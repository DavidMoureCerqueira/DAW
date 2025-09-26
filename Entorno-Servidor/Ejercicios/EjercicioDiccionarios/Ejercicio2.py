'''Exercicio 2. Escribe nun script unha función valor_maximo(dicionario: Dict[str, int]) -> claves[str] que devolva as chaves asociadas ao valor máximo nun dicionario. 
Devolve unha clavesa con todas as claves que teñan ese valor. Aquí tes un fragmento de código para probar a función:


dicionario = {'a': 5, 'b': 3, 'c': 5, 'd': 2}

print(valor_maximo(dicionario))
# Saída esperada: ['a', 'c']'''


def valor_maximo(dicionario):
    claves=[]
    valor_maximo=None
    for clave,valor in dicionario.items():
        
        if valor_maximo is None or valor>valor_maximo:
            valor_maximo=valor
            clave=[clave]
        elif valor==valor_maximo:
            claves.append(clave)
        
        
    return claves
    



dicionario = {'a': 5, 'b': 3, 'c': 5, 'd': 2}

print(valor_maximo(dicionario))