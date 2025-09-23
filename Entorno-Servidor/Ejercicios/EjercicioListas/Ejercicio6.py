'''Exercicio 6. Escribe unha función en Python piramide(lonxitude: int) que imprima unha pirámide de números. 
Esta recibe un enteiro que indica a lonxitude da pirámide.'''

def piramide(longitud: int):
    for i in range(1,longitud+1):
        print()

        for k in range(1,i+1):
            print(k, end=" ")
            
piramide(5)