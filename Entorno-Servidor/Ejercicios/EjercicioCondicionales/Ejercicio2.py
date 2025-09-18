'''Exercicio 2. Escribe un script que a partir dun número introducido por teclado, indique se é un número positivo, negativo ou é igual a cero. Se é positivo mostra por pantalla Positivo, se é negativo Negativo e se é 0 Cero.'''

numero=int(input("Introduzca un numero\n"))

if(numero>0):
    print("Positivo")
elif(numero<0):
    print("Negativo")
else:
    print("Cero")