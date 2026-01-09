def so_pares(lista):
    nova_lista = []
    for numero in lista:
        if numero % 2 == 0:
            nova_lista.append(numero)
    return nova_lista


def eliminar_duplicados(lista):
    nova_lista = []
    
    for elemento in lista:
        if elemento not in nova_lista:  
            nova_lista.append(elemento)  
    
    return nova_lista

def contar_lonxitudes(lista):
    lista_lonxitudes = []
    for palabra in lista:
        lista_lonxitudes.append(len(palabra))
    return lista_lonxitudes
