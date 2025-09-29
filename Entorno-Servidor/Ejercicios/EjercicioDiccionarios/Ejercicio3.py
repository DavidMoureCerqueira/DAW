'''Exercicio 3. Escribe nun script unha función agrupar_datos_por_valor(dicionario: Dict[str, List[int]]) -> Dict[int, List[str]] 
que reciba un dicionario onde os valores son listas e devolva un novo dicionario que agrupe as claves segundo os valores que teñen en común..
Aquí tes un fragmento de código para probar a función:'''


def agrupar_datos_por_valor(diccionario):
    retorno = {}
    lista=[]
    for clave, valor in diccionario.items():
        print(clave, valor)
        for valor_dict in valor:
            
            if valor_dict:
                
                print(f"segundo for",valor_dict)
                
        
    return retorno


diccionario = {'a': [1, 2], 'b': [2, 3], 'c': [1, 4]}
print(agrupar_datos_por_valor(diccionario))
# Saída esperada:
# {1: ['a', 'c'], 2: ['a', 'b'], 3: ['b'], 4: ['c']}
