'''Exercicio 5. Escribe un script que imprima os números pares comprendidos nun intervalo (a,b) non contado o valor de b entro do intervalo, un en cada liña. 
Os valores a e bserán introducidos por teclado polo usuario. 
Unha vez introducido o intervalo, verificar se a é menor que b. Senón é así, invertede os valores. Se os números son iguais imprime Erro.'''

num1 = int(input("Introduzca el primer numero.\n"))
num2 = int(input("Introduzca el segundo numero.\n"))
if num1 > num2:
    print("Invirtiendo valores")
    temp = num2
    num2 = num1
    num1 = temp
rango = range(num1, num2, 2)


for i in rango:
    if (i % 2 == 0):
        print(i)
