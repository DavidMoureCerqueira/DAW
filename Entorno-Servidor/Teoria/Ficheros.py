# Abrimos o ficheiro en modo lectura
import json
import csv
arquivo = open('arquivo.txt', 'r')

# Traballamos co ficheiro...

# Cerramos o ficheiro despois de lelo.
arquivo.close()
# abrir un fichero


# Try with resources
# Abrimos o ficheiro en modo lectura
# with open('arquivo.txt', 'r') as arquivo:
#     # Traballamos co ficheiro...

# Unha vez rematada a estrutura with o ficheiro cerrase automaticamente

with open('text.txt', 'r')as archivo:
    contenido = archivo.readlines()  # Lee todo
    for linea in archivo:  # Otra forma de eler todo
        print(linea)


# with open('text.txt', 'w')as archivo: Abrir en el metodo de escritura

# CSV--> Se puede leer con readlines y para cada linea y hay una libreria csv

with open('text.txt', 'r') as lector_csv:
    lector_csv = csv.reader('text.txt') 


# Leer JSOM usando liberia
with open('datos.jason', 'r') as archivo_json:
    datos = json.load(archivo_json)

    print(datos["edades"])
