'''Exercicio 2. A partir do exercicio anterior, crea unha función fila_to_datos(fila) que a partir de cada fila cree un dicionario cas seguintes claves:

“nome”: tan só o nome. Sen apelidos.

“apelido”: tan só o apelido. Sen o nome.

“dni”: o DNI pero ca letra en maiúscula.

“data_contrato”: a data do contrato pero como tipo de dato datetime.

“soldo_bruto_mensual”: o soldo bruto mensual como un float.

“IRPF”: o dato d entrada está proporcionado nun valor porcentual e deberemos almacenalo como un float, polo que debemos dividir o seu valor entre 100.

NOTA: elimina todos os espazos en branco de cada valor tanto ao comezo como ao final.

Proba a utilizar dita función na lectura do ficheiro realizada no exercicio anterior imprimindo cada dicionario.'''


import csv
from datetime import datetime


def fila_to_datos(lineas):

    datos = {
        "nombre": [],
        "apellido": [],
        "dni": [],
        "fecha_contrato": [],
        "sueldo_bruto_mensual": [],
        "IRPF": []
    }

    lineas = lineas[1:]
    for linea in lineas:

        linea = linea.strip()
        palabras = linea.split(',')

        for index, palabra in enumerate(palabras):
            palabra = palabra.strip()

            if (index == 0):  # nombre y apellido
                palabra = palabra.split(' ')
                datos["nombre"].append(palabra[0])
                datos["apellido"].append(palabra[1])
            if (index == 1):
                datos["dni"].append(palabra.upper())
            if (index == 2):
                fecha = datetime.strptime(palabra, "%d-%m-%Y %H:%M")
                datos["fecha_contrato"].append(fecha)
            if(index==3):
                sueldo=float(palabra)
                datos["sueldo_bruto_mensual"].append(sueldo)
            if(index==4):
                retencion=float(palabra)/100
                datos["IRPF"].append(retencion)

    print(datos)


def lectura(direccion):
    with open(direccion, 'r') as archivo_csv:
        lineas = archivo_csv.readlines()
    return lineas


lineas = lectura('Entorno-Servidor\Ejercicios\EjerciciosFicheros\data.csv')


fila_to_datos(lineas)
