'''Exercicio 4. Escribe un script en Python que conte o número de palabras nunha cadea de texto introducida por teclado e o mostre por pantalla. 
Considera que as palabras están separadas por un ou máis espazos. Coidado cos dobres, triples ou máis espazos e cos espazos ao comezo e o final do texto.'''

cadena=str(input("Introduce una cadena de caraceteres.\n"))

palabras=cadena.split(" ")
print(palabras)
palabrasSinEspacio=[]

for i in range(len(palabras)):
    
    if palabras[i]!="":
        #print(":", palabrasSinEspacio[i])
        palabrasSinEspacio.append(palabras[i])
        print(palabras[i])
    
longitud=len(palabrasSinEspacio)
        


print(f"Tiene {longitud} palabras")