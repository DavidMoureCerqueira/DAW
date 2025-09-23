'''Exercicio 2. Escribe unha función en Python so_pares(lista: List) -> List que reciba unha lista de números e devolva unha nova lista que conteña só os números pares da lista orixinal.'''


def son_pares(lista):

  
    lista_pares= [x for x in lista if x % 2 == 0]
    return lista_pares

lista1=[1, 2, 3, 4, 5, 6, 7, 8, 9]
lista=son_pares(lista1)
print(lista)