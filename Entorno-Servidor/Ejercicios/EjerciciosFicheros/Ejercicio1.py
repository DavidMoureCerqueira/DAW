'''Exercicio 1. Lee o seguinte ficheiro CSV nun script de Python. O nome do ficheiro recibirase por argumento do script. Almacena os datos nunha lista de dicionarios. 
Imprime por pantalla unicamente o apelido de cada elemento (o campo “nome e apelido” tan só conta cun único e nome é un único apelido).'''
#Hacer un array con el diccionario de cada uno. --> Una lista de diccionarios


import csv

with open('Entorno-Servidor\Ejercicios\EjerciciosFicheros\data.csv', 'r' ) as archivo_csv:
    
    busqueda=''
    lista=[]
    lineas=archivo_csv.readlines()
    # lineas=lineas[1:]
    # for index, linea in enumerate(lineas):
    #     linea=linea.strip()
    #     palabras=linea.split(',')
       
    #     nombre_apellidos=palabras[0].split(' ')
    #     print(nombre_apellidos[1])

    lista=[]
    lineas=lineas[1:]
    for  linea in lineas:
        
        diccionario={
        "nombre":'',
        "apellido":'',
        "dni":'',
        "fecha_contrato":'',
        'sueldo_mensual':'',
        'IRPF':''
        }
        
        linea=linea.strip()
        print(linea)
        palabras=linea.split(',')
         
        for index, palabra in enumerate(palabras):
            if(index==0): #nombre y apellidos
                palabra=palabra.split(' ')
                diccionario['nombre']=palabra[0]
                diccionario['apellido']=palabra[1]
            elif(index==1): #dni
                diccionario['dni']=palabra
            elif(index==2): #Fecha contrato
                diccionario['fecha_contrato']=palabra
            elif(index==3): #sueldo
                diccionario['sueldo_mensual']=palabra
            elif(index==4): #IRPF
                diccionario['IRPF']=palabra
                lista.append(diccionario)
                
            
        
    print(lista)
    print(len(lista))
    
        
        
