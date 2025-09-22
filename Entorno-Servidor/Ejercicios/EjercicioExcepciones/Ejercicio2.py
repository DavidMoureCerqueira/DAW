'''Exercicio 2. Escribe un script que pida ao usuario un número enteiro positivo. Se o usuario introduce un valor incorrecto (e dicir, un valor que non sexa un número ou non é positivo), 
o programa debe de volver a pedir o número ata que o usuario introduza un valor válido. Para finalizar o script mostra o número de veces que se intentou introducir un número ata que este fose un enteiro positivo.'''

esNumero=False
contador=0

while(not esNumero):
    numeroPos=(input("Introduzca un numero positivo\n"))
    
    try:
        numeroPos=int(numeroPos)
        if(numeroPos<0):
            raise ValueError
    except (TypeError,ValueError):
        print("Numero erroneo")
        contador+=1
    else:
        esNumero=True
print(f"Has necesitado {contador} intentos.")
    