'''Exercicio 1. Lee o seguinte ficheiro CSV nun script de Python. O nome do ficheiro recibirase por argumento do script. Almacena os datos nunha lista de dicionarios. 
Imprime por pantalla unicamente o apelido de cada elemento (o campo “nome e apelido” tan só conta cun único e nome é un único apelido).'''

import csv

with open('Entorno-Servidor\Ejercicios\EjerciciosFicheros\data.csv', 'r' ) as archivo_csv:
    
    busqueda=''

    lineas=archivo_csv.readlines()
    lineas=lineas[1:]
    for index, linea in enumerate(lineas):
        linea=linea.strip()
        palabras=linea.split(',')
       
        nombre_apellidos=palabras[0].split(' ')
        print(nombre_apellidos[1])
