

def determinante(m,c):
  
    if len(m)>2:
        for i,x in enumerate(m[0]):
            nmatriz=[]
            for j,y in enumerate(m):
                fila=[]
                if j==0:continue
                for k,z in enumerate(m[j]):
                    if k!=i:
                        fila.append(z)
                nmatriz.append(fila)
            #print(c*x*(-1)**(i),'*',nmatriz)

            determinante(nmatriz,c*x*(-1)**(i))
    else: print(c*(m[0][0]*m[1][1]-m[0][1]*m[1][0]))

# m=[[9,2,3,4,1],
#    [4,5,6,7,2],
#    [7,8,9,8,3],
#    [3,3,3,3,4],
#    [5,4,4,2,4],]
m=[[1,3,5,9],
   [1,3,1,7],
   [4,3,9,7],
   [5,2,0,-1]]
  

determinante(m,1)