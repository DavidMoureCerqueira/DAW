'''Exercicio 3. Escribe nun script unha función agrupar_datos_por_valor(dicionario: Dict[str, List[int]]) -> Dict[int, List[str]] 
que reciba un dicionario onde os valores son listas e devolva un novo dicionario que agrupe as claves segundo os valores que teñen en común..
Aquí tes un fragmento de código para probar a función:'''


def agrupar_datos_por_valor(diccionario):
    retorno = {}

    for clave, valor in diccionario.items():

        for valor_dict in valor:
            if valor_dict not in retorno:
               retorno[valor_dict]=[]
               retorno[valor_dict].append(clave) 
            else:
                retorno[valor_dict].append(clave)
               
                
               
                
        
    return retorno


diccionario = {'a': [1, 2], 'b': [2, 3], 'c': [1, 4]}
print(agrupar_datos_por_valor(diccionario))
# Saída esperada:
# {1: ['a', 'c'], 2: ['a', 'b'], 3: ['b'], 4: ['c']}
