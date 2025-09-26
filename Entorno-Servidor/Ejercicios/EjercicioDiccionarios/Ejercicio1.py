'''Exercicio 1. Escribe nun script unha función contar_frecuencia(lista: List[str]) -> Dict[str, int] que conte a frecuencia de cada palabra nunha lista de palabras.
A función debe devolver un dicionario onde as chaves son as palabras e os valores son as frecuencias. Aquí tes un fragmento de código para probar dita función:'''
from typing import Dict, List


# def contar_frecuencia(lista: List[str])->Dict[str,int]:
#     dict={}
#     for fruta in lista:
#         cantidad=lista.count(fruta)
#         if(fruta not in dict):
#             dict[fruta]=cantidad
            
        
#     return dict
        




# lista_palabras = ['mazá', 'banana', 'mazá', 'laranxa', 'banana', 'mazá']

# print(contar_frecuencia(lista_palabras))


def contar_frecuencia(lista):
    dict={}
    for fruta in lista:
        if fruta not in dict:
            dict[fruta]=1
        else:
            dict[fruta]=dict.get(fruta)+1
    return dict

lista_palabras = ['mazá', 'banana', 'mazá', 'laranxa', 'banana', 'mazá']

print(contar_frecuencia(lista_palabras))