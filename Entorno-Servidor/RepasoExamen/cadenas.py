# cadea = "abcdefghij"
# resultado = cadea[::3]
# print(resultado)

# texto = " Hola mundo     "

# modificado = texto.replace("mundo", "")
# print("palabra: "+texto.rstrip() + " espacios")
# print(modificado)
# lista = (texto.strip()).split(" ")
# print(lista)

'''Ej 1'''
# cadena='palabra'
# contadorVocales=0
# for letra in cadena:
#     if letra in 'aeiouAEIOU':
#         contadorVocales+=1
# print("el numero de vocales es de: " + str(contadorVocales))

# EJ2

# palabra="Dabale arroz a la zorra el abad"
# nuevaPalabra=''
# for letra in palabra:
#     if letra!=' ':
#         nuevaPalabra+=letra.lower()

# if nuevaPalabra==nuevaPalabra[::-1]:
#     print("es palindromo")
# else:
#     print("No es palindromo")

'''Ej3'''
# texto = "Dabale arroz a la zorra el abad"

# nova_palabra = ""  # A nova palabra son co vogais

# # Recorremos as letras do texto
# for letra in texto:
#     if letra not in 'bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ':
#         nova_palabra += letra
# print(nova_palabra)

# texto = "palabra con     espacios"
# palabras = texto.split(" ")
# palabraSinEspacios = []
# for palabra in palabras:
#     palabra = palabra.strip()
#     if palabra is not "":
#         palabraSinEspacios.append(palabra)
# print(palabraSinEspacios)


# notas=[]

# while True:
#     nota_str=input("introduce nota")

#     if nota_str=='fin':
#         break;
#     else:
#         try:
#             nota=float(nota_str)
#         except:
#             print("no ha introducido un valor válido")
#         else:
#             if nota>=0 and nota<=10:
#                 notas.append(nota)
#             else:
#                 print("es una nota no valida")
# suma_notas=0
# media_notas=None

# for nota in notas:
#     suma_notas+=nota
# print(notas)
# media_notas=suma_notas/len(notas)
# print(media_notas)

# def solo_pares(numeros):
#     lista_pares=[]
#     for numero in numeros:
#         if numero%2==0:
#             lista_pares.append(numero)
#     return lista_pares


# def duplicados(elementos:list):
#     duplicado=[]

#     for elemento in elementos:
#         if elemento not in duplicado:
#             duplicado.append(elemento)
#     return duplicado


# lista=[1,2,2,2,2,2,2,3,4,5,6,7,8,9,10]
# print(duplicados(lista))

# def contar_letras(palabras:list)-> list:
#     longitudes=[]

#     for palabra in palabras:
#         longitudes.append(len(palabra))
#     return longitudes

# lista=["platano", "mandarina", "papa", "perico","a"]
# print(contar_letras(lista))

# a = [2, [3, 4]]
# b = list(a)
# print('a', a)
# print('b', b)

# b[0] = 5
# print('a', a)
# print('b', b)

# diccionario = {}
# diccionario['one'] = 'uno'
# diccionario['two'] = 'dos'
# diccionario['three'] = 'tres'
# dict2 = {'paco': '54', 'two': 'franco'}
# print(diccionario)

# print(list(diccionario.values()))
# print(list(diccionario.keys()))
# diccionario.update(dict2)
# print(diccionario)
# devuelto = diccionario.pop('two')
# print(diccionario)
# print(devuelto)

# del diccionario['paco']
# print(diccionario)


# contadores = {'chuck': 1, 'annie': 42, 'jan': 100}

# for clave,valor in contadores.items():
#     print(clave, valor, sep='-')
# for valor in contadores.values():
#     print(valor, end='-\n')
# for key in contadores.keys():
#     print(key, end='-\n')

# def contar_frecuencia(lista: list[str]) -> dict[str, int]:
#     frecuencia = {}
#     for fruta in lista:
#         if fruta not in frecuencia:
#             frecuencia[fruta] = 1
#         else:
#             frecuencia[fruta] = frecuencia[fruta]+1
#     return frecuencia


# lista_palabras = ['mazá', 'banana', 'mazá', 'laranxa', 'banana', 'mazá']

# print(contar_frecuencia(lista_palabras))

# def valor_maximo(diccionario:dict[str,int])->list[str]:
#     max=None
#     maximos=[]
#     for key,value in diccionario.items():
#         if max is None or value > max:
#             max=value
#             maximos=[key]
#         elif value==max:
#             maximos.append(key)

#     return maximos

# diccionario = {'a': 5, 'b': 3, 'c': 5, 'd': 2}

# print(valor_maximo(diccionario))
# # Saída esperada: ['a', 'c']


def agrupar_datos_por_valor(diccionario: dict[str, list[int]]) -> dict[int, list[str]]:
    resultado={}

    for key, values in diccionario.items():
        for value in values:
            if value not in resultado:
          
                resultado[value]=[key]
            else:
                
                resultado[value].append(key)

    return resultado


diccionario = {'a': [1, 2], 'b': [2, 3], 'c': [1, 4]}
print(agrupar_datos_por_valor(diccionario))
# Saída esperada:
# {1: ['a', 'c'], 2: ['a', 'b'], 3: ['b'], 4: ['c']}
