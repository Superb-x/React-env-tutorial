import os 

# 只打印以下类型文件
cType = ['.py', '.html', '.css', '.scss', '.js', '.json', '.sql', '.gitignore', '.babelrc']  
with open ("dir.txt", "w") as f:
    def search(path, deep):
        for dir in os.listdir(path):
            if dir == 'node_modules' or dir == '.git' or dir == '.vscode': #避开这些不需要列出的文件夹
                continue
            d = os.path.join(path, dir)
            if os.path.isdir(d):
                if deep == 0:  
                    f.write(dir+'/ \n')  
                else:  
                    f.write('| '*deep+'+-'+dir+'/ \n') 
                search(d, deep+1) #递归

        for file in os.listdir(path):
            fi = os.path.join(path, file)
            if os.path.isfile(fi):
                #过滤文件  
                for type in cType:  
                    #对路径切片获得文件拓展名  
                    if os.path.splitext(fi)[1] == type:  
                        print(file)
                        if deep == 0:  
                            f.write(file + '\n')  
                        else:  
                            f.write('| '*deep+'+-'+file + '\n')  
                        break;
    search('.', 0)                    