#Esto son shadow copies, copia todo lo que esta dentro del mismo nivel
#hay un metodo copy.deepcopy() para evitar shadow copies y casos que se copian las direcciones de memomeria de una posible lista o diccionario en el interior de la lista
import copy
lista = [1, 2, 3]
list.append(2)
print(lista)

lista2 = lista  # Es como un alias, un puntero de memoria a un mismo sitio

# Copiar listas:
# Usando constructor:
# Cada uno tiene su direccion de memoria aunque al principio tengan lo mismo
lista2 = list(lista)
lista[0] = 20 
print(lista2)   #da 1,2,3 porque no tiene la misma direccion de memoria aunque sean iguales al principio
lista2 = lista[:]  # usando el slicing
lista2 = copy.copy(lista)  # usando la importacion copy


lista1=[1,2,3[1,2]]

lista2=list(lista1) #Al ser una lista dentro de otra copias los valores reales (no la direccion de memoria) de la lista 1,2,3 pero la segunda lista(que esta dentro) copia la misma direccion de memoria

lista[3][1]=99

print(lista2) #da [1,2,3[1,99]]


#Recorrer listas:

for x in lista1:
    print(x)
    
#si queremos tener el valor y la posicion utilizamos enumerate():

for index, x in enumerate(lista1):
    print(f"Indice: {index}, valor {x}")
    
#Operaciones con listas:
#concatenar crea una nueva cadena
lista1=[1,2,3]
lista2=[22,32]
print(lista1+lista2) #1,2,3,22,32

queixos = ['Cheddar', 'Edam', 'Gouda']
'Edam' in queixos # Imprime: True
'Brie' in queixos # Imprime: False

#slicing funciona igual que en las cadenas


#con append añadimos al final
t = ['a', 'b', 'c']
t.append('d')
print(t) # Imrpime: ['a', 'b', 'c', 'd'] 

#se modifica la lista que invoco el metodo
t1 = ['a', 'b', 'c']
t2 = ['d', 'e']
t1.extend(t2)
print(t1) # Imrpime: ['a', 'b', 'c', 'd', 'e']

#insertar entre dos posiciones
t1 = ['a', 'b', 'c']
t1.insert(1,"d") #con indices negativos los añade siempre por detras
print(t1) # Imprime: ['a', 'd', 'b', 'c']

#ordernar
t = ['d', 'c', 'e', 'b', 'a']
t.sort()
print(t) # Imrpime: ['a', 'b', 'c', 'd', 'e']

#ordernar por funcion
t1=['a','bb','dddd','ccc']
t1.sort(key=len) #se puede definiir la funcion que se quiera
print(t1)

#ordernar por funcion personalizada
t1=['a','bb','dddd','ccc']
def funSort(str):
    return str[-1] #Ordena por la letra del final
t1.sort(key=funSort) #se puede definiir la funcion que se quiera
print(t1)

#eliminar elementos de la lista

t = ['a', 'b', 'c']
x = t.pop(1)
print(t) # Imprime: ['a', 'c']
print(x) # Imrpime: b

# se puede usar del
t = ['a', 'b', 'c']
del t[1]
print(t) # Imprime: ['a', 'c']

# y tambien remove y usar try except para controlar que si no esta lo quite
t = ['a', 'b', 'c']
t.remove('b')
print(t) # Imprime: ['a', 'c']


#usar varios elementos usando el indice se utiliza el slicing

t = ['a', 'b', 'c', 'd', 'e', 'f']
del t[1:5] #Tambien se pueden usar indices negativos
print(t) # Imrpime: ['a', 'f']


#limpiar la lista t.clear().

#Obtener la posicion de algo
t = ['a', 'b', 'c', 'd', 'e', 'f']
del t[1:5]
print(t) # Imrpime: ['a', 'f']


numeros = [1, 2, 3, 4, 5, 6]
lista_cuadrados=[]

for num in numeros:
    if(num%2==0):
        lista_cuadrados.append(num**2)
print(lista_cuadrados)

#COMPRIMIDO EN ESTO

numeros = [1, 2, 3, 4, 5, 6]
cadrados_pares = [x**2 for x in numeros if x % 2 == 0] #1º EXPRESION A REALIZAR 2º ELEMENTO INTERACCION (FOR) 3º CONDICION
                                                       # PARA CADA ELEMENTO EN LA LISTA NUMERO QUE SU MODULO DE 2 SEA 0 SE LE HACE EL CUADRADO
print(cadrados_pares) # Imprime: [4, 16, 36]
