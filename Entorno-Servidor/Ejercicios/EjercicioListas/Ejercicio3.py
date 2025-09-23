'''Exercicio 3. Escribe unha función en Python eliminar_duplicados(lista: List) -> List que reciba unha lista con elementos duplicados e devolva unha nova lista sen duplicados, 
mantendo a orde orixinal.'''


def eliminar_duplicados(lista):
    listaDevolver=[]
    lista.sort()
    for index in  range(len(lista)):
        if(index==0):
            listaDevolver.append(lista[index])
        

        elif(lista[index]!=lista[index-1]):
            listaDevolver.append(lista[index])
    return listaDevolver




lista=[1,1,2,3,3,4,5,6,6,1]

lista_sin_repes=eliminar_duplicados(lista)

print(lista_sin_repes)

