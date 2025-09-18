'''Exercicio 5. Implantar unha aplicación que calcule o menor de tres números introducidos por teclado polo usuario e o mostre por pantalla. 
Comproba antes de nada que ningún par de números é igual. Se isto é así, indícallo mostra por pantalla Erro. e non calcules cal é o menor dos 3.'''

num1=int(input("Introduzca el primer numero\n"))
num2=int(input("Introduzca el segundo numero\n"))
num3=int(input("Introduzca el tercer numero\n"))

if num1!=num2 and num2!=num3 and num1!=num3:
    min=num1
    if num2<min:
        min=num2
    if num3<min:
        min=num3
    print("El numero menor es:" , min)
else:
    print("Hay dos numeros iguales")
            