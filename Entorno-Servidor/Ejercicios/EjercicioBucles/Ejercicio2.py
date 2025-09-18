'''Exercicio 2. Escribe un script que imprima os números pares (un en cada liña) ata un numero introducido polo usuario, este número incluído.'''

num=int(input("Introduzca un numero\n"))

rango=range(0,num+1,2)

for i in rango:
    print(i)