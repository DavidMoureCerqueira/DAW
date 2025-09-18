'''Exercicio 1. Escribe un script que pida ao usuario dous números por teclado. Se a suma é maior que 10 mostrase por pantalla A suma é maior que 10 e en caso contrario A suma non é maior que 10.'''

numero1=int(input("Introduzca el primer numero a sumar"))
numero2=int(input("Introduzca el segundo numero a sumar"))

if(numero1+numero2>10):
    print("La suma es mayor de 10\n")
elif (numero1+numero2<10):
    print("La suma es menor de 10\n")
else:
    print("La suma es 10")
    