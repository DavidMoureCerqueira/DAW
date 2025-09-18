'''Exercicio 4. Escribe un script que informe se un número introducido por teclado é par ou impar. Imprimirá por pantalla Par ou Impar segundo corresponda.'''

numero=int(input("Introduzca un numero\n"))

if(numero%2==0):
    print("El numero es par")
else:
    print("El numero es impar")