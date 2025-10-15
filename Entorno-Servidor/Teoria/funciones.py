cadena: str = "Cadena"

print(max(cadena))  # Devuelve la n //ASCII
print(min(cadena))  # Devuelve la C //ASCII
print(len(cadena))  # Devuelve la longitud de la cadena


# Definir nuestras funciones:

def saludar():
    print("hola")


saludar()


def saludar(name: str):
    print(name)


saludar("Arturito Paquito")

# no hay porque tipar el parametro que da o que devuelve


def saludar(nombre: str, edad):
    print(nombre, edad)


saludar("paco", 25)
saludar(nombre="paco", edad=25)
saludar(edad=25, nombre="paco")
saludar("Roi", edad=77)

# Los parametros que se pasen sin nombre tienen que mantener la posicion, por lo que usualmente iran primero

# Se puede definir el parametro en la propia funcion para que tenga un valor predefinido.


def describir_personal(nombre, edad=25):
    print(f"{nombre} tiene {edad}")

# Paso por valor y pao por referencia
# Paso por valor --> Son inmutables int, str, float, tupla...


def incrementar(n):
    n += 1
    print("Dentro de funcion.", n)


numero = 5
# Le envio el valor pero no lo modifico solo dentro de la funcion "Crea una copia en la funcion" -->6-->las id(variable) van a ser diferentes
incrementar(numero)
# No se modifica porque se envio una copia por tanto fuera sigue siendo -->5
print("Fuera de la funcion: ", numero)

# Paso por referencia--> Ocurre con elementos mutables --> Listas, objetos, etc..


def añadir_elemento(lista):
    lista.append(10)
    print("Dentro de la funcion: ", list)


numeros = [1, 2, 3]
añadir_elemento(numeros)  # 1,2,3,10
print("Fuera de la funcion; ", numeros)  # 1,2,3,10

# Se pasa el puntero de memoria, lo que provoca que se las modificaciones realizadas en una array si permanezcan al volver de la funcion si se hace print(id(lista))  tienen el mismo valor

a=6
def funcion_de_prueba():
    a=10
    print(a)
funcion_de_prueba()
# En el caso  de que no se hiciese a=10, cogeria la variable a como variable global y daria el valor igual


#Se pueden devolver varios valores en forma de tupla

def operar(a,b):
    suma=a+b
    resta=a-b
    return suma, resta
s,r=operar(4,5)
print("suma",s)   #9
print("resta",r)  #-1

#Early return --> Consiste en analizar los casos malos que no quieres y se retorna el dando error.
def dividr(a,b):
    if b==0:
        return "Error, numero igual a 0"
    
    if(b<0 and a<0):
        return "solo numeros positivos"
    
    return a/b