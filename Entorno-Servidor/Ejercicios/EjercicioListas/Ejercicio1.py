'''Exercicio 1. Crea un script no que se ingresen as notas de alumnos. 
Vai gardando todas as notas que están entre 0 e 10 nunha lista. Cando o usuario introduza a palabra “fin”, non se pediran máis notas. 
Ao finalizar o ingreso de notas mostra por pantalla a media de todas as notas.'''

esSalida=False
notas=[]
suma=0
media=0
while(not esSalida):
    nota=str(input("Introduce una nota y usa fin para salir.\n"))
    if(nota.lower()=="fin"):
        esSalida=True
    else:
        try:
            nota=float(nota)
        except ValueError:
            print("No es una nota valida ni de salida")
        else:
            suma+=nota
            notas.append(nota)
            
if(len(notas)!=0):

    media=suma/len(notas) 

    print(f"La suma de las notas es igual {suma} y la media es {media}")
else:
    print("No has introducido ninguna nota")