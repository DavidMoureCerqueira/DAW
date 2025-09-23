'''Exercicio 4. Escribe unha función en Python contar_lonxitudes(lista: List) -> List que reciba unha lista de palabras e devolva unha lista coa lonxitude de cada palabra.'''

def contar_longitudes(lista):
    longitudes=[len(x) for x in lista]
    return longitudes

lista=["gpña",'adios','guiri','paco']

longitudes=contar_longitudes(lista)

print(longitudes)