rango= range(10)
print(type(rango)) #Da tipo range en este caso ira del 0-9

rango=range(5,10) # Cuando empieza y cuando acaba

rango=range(5,10,2) # Se puede pasar cuando empieza caba y cuanto salta por iteracion

# Estructura:
rango= range (0,10)
for i in rango:
    print (i)
    # Imprime del 0 al 9
rango= range (5,10)
for i in rango:
    print (i)
    # Imprime del 5 al 9
rango= range (0,10,2)
for i in rango:
    print (i)
    # Imprime los numeros pares
    
# Se puede iterar Strings

rango="Hola, me llamo Paco"

for i in rango:
    print(i)
    
# Se pueden anidar al igual que en Java
