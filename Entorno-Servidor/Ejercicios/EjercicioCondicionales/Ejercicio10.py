'''Exercicio 9. Escribe un script que que calcule o importe a pagar por un vehículo ao circular por unha autoestrada. Seleccionade o vehículo mediante un menú. 
Se é necesario pedídelle ao usuario os quilómetros recorridos pola autoestrada e o seu peso.

a) Moto: importe fixo de 1€

b) Turismo: 0,25€ por km recorrido

c) Camión: 0,25€ por km más 0,15€ por tonelada de peso (Primeiro pídeselle a distancia e despois o peso)'''

vehiculo = str(input('''Introduzca el tipo de vehiculo que utiliza\n
                     Moto si va en moto
                     Turismo si va en coche y digame los kilometros 
                     Camion si va en camion y digame kilometros y peso\n'''))

if(vehiculo.lower()=="moto" or vehiculo.lower()=="turismo" or vehiculo.lower()=="camion"):
    
    if(vehiculo.lower()=="moto"):
        print("Debe pagar 1€")
    else:
        distancia=float(input("Introduzca los kilometros que lleva en la autopista\n"))
        if vehiculo.lower()=="turismo":
            importe=distancia*0.25
            print(f"Debe pagar: {importe:.2f}€\n")
        else:
            peso=float(input("Introduzca el peso el camion\n"))
            importe=distancia*0.25+peso*0.15
            print(f"Debe pagar {importe:.2f}€")
    
else:
    print("No es un vehiculo aceptado")
    