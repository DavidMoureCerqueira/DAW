# Es un vector
cadena = "banana"

# Imprime una a porque la posicion 1 es la a ya que empieza en 0
print(cadena[1])

# Las cadenas no se puede modificar:
cadena[0] = "A"  # Esto da error, el String no soporta la asignacion de items.

# tamaño cadena funcion len()

print(cadena(len))  # 6

# Recorrer la cadena con While o For

# while
indice = 0

while indice < len(cadena):
    letra = cadena[indice]
    print(letra)
    indice = indice+1

# for

for letra in cadena:
    print(letra)  # va imprimiendo cada letra

# si utilizo el range() puedo acceder a su indice

for i in range(len(cadena)):
    print(i)            # Imprime los numeros de las posiciones
    print(cadena[i])    # Me da cada letra

#slicing


s= 'Monty Python'

print(s[0,5])   #Empieza en 0 y acaba en 5 pero el ultimo no lo coge
print(s[6,12])  #Empieza en el 6 y acaba en el 12 no incluido
s[4:5] #Coge lo que hay entre dos posiciones con los :
s[-1] #Coge empezando desde el final con valores negativos
s[-4] #Coge empezando desde el final con valores negativos
s[:] #Crea una copia tal cual de la cadena
# Se puede usar con 3 parametros
print(2[0:10:2]) # --> Empieza en el inicio y acaba en 10  haciendo saltos de 2
print(s[::-1]) #--> Hace un reverse de la cadena
print(s[::2]) #--> Copia la cadena saltando de 2 en 2

s='Monty_Python'
if(s=="Monty_Python"):
    print(True)
    
if("M" in s): #Busca dentro de la cadena
    print(True)
    
# .upper() MAYUSCULAS
# .lower() MINUSCULAS
# .capitalize() PRIMERA LETRA EN MAYUSUCLAS
# .title() CADA ESPACIO LO PONE EN MAYUSCULAS

# .strip() Quita espacios en blanco
# .rstrip() Quita espacios en blanco de la derecha
# .lstrip() Quita espacios en blanco de la izquierda

# .find("loquesea") me dice la posicion en la que esta, si no encuentra devuelve -1
# .index("loquesea") me dice la posicion en la que esta, si no encuentra lanza error

# .replace("quita", "pone") Reemplaza el quita por el pone
# .replace("quita", "pone",numerodeveces) Reemplaza el quita por el pone, el tercer parametro reemplaza el numero de veces que le digamos, puede ser 1 el primero, 2 los dos primeros....
#.split(" ") Divide por lo que le digamos y devuelve un array
# endswith("texto") Compueba si la cadena acaba en el texto introducido

