def so_pares(lista):
    nova_lista = []
    for numero in lista:
        if numero % 2 == 0:
            nova_lista.append(numero)
    return nova_lista
