
if ():  # Utiliza dos puntos
    print("esta dentro del if")

    print("Sigue dentro del if")

print("Esta fuera del if")

# = --> Asignacion
# == --> Comparacion
# x is y --> Compara por referencia
# x is not y --> Compara por referencia

# Listas

lista1 = [1, 2, 3]
lista2 = [1, 2, 3]

print(lista1 == lista2)  # Da true

lista1 = [1, 2, 3]
lista2 = [1, 2, 3]
lista3 = lista1
# Da false porque no apuntan a la misma referencia a memoria
print(lista1 is lista2)

# Da true porque son la misma referencia a memoria. Si usas id(lista3) da la referencia de memoria
print(lista3 is lista1)


# is generalmente se utiliza para comparar a None (valor is None)

# El if se puede usar con if(valor): si valor es !=0 da True

# Patron guardian si no se cumple una ya no evalua la otra

x = 4
y = 2
print(x >= 2 and y!=1 and (x/y) > 1) #Da true
print(x >= 2 and y!=2 and (x/y) > 1) #Para de ejecutarse porque la y es igual a 2 entonces deja de funcionar porque ese and ya da false. y en un caso da true y en otro da false

# Funcionamiento ifs:

x=1
if(x>0):
    print("X es positivo") #Se ejecuta siempre que se cumpla el if
if(x<0):
    pass # Si no se quiere hacer nada dentro de ese bloque hay que poner pass, palabra reservada

print("X es positivo") #Se ejecuta siempre, ya que no esta dentro del if

# if-else
if(x>0):
    print("x es positivo")
else:
    print("x es negativo")

# if(condicion)-elseif(condicion)-else se pueden poner todos los elseif que se quiera

# Anidamientos
if x>0:
    print("x es mayor de 0")
    if(x>10):
        print("x es mayor de 10")
        if(x>30):
            print("x es mayor de 30")
    else :
        print("x no es mayor de 10")
        
print("x es un numero")    
        
