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

a = [[1, 2], [3, 4]]
b = a[:]
print('a', a)
print('b', b)

b[0].append(5)
print('a', a)
print('b', b)
