'''Exercicio 5. Escribe unha función en Python coller_comúns(lista1: List, lista2: List) -> List que reciba dúas listas e devolva unha lista cos elementos comúns.
'''

def coger_comunes(lista1:list,lista2:list):
    lista3=[]
    for index in lista1:
        if(index in lista2):
            lista3.append(index)
    return lista3

lista1=[1,2,"paco","ciervo",3]
lista2=["paco","ciervo"]

print(coger_comunes(lista1,lista2))