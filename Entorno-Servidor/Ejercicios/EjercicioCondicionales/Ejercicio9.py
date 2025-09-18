'''
Exercicio 8. Crea un menú nun script para seleccionar a acción que desexa realizar o usuario. Neste caso temos tres opcións:

a) Sumar 2 números introducidos por teclado e mostrar o resultado.

b) Restar 2 números introducidos por teclado e mostrar o resultado.

c) Multiplicar 2 números introducidos por teclado e mostrar o resultado.'''

num1=int(input("Introduzca el primer numero\n"))
num2=int(input("Introduzca el segundo numero\n"))

opcion=int(input('''Introduzca una opcion:\n
                 1. Para sumar 2 numeros
                 2. Para restar 2 numeros
                 3. Para multiplicar 2 numeros\n'''))
if opcion==1 :
    print("La suma es: " ,num1+num2)
elif opcion==2:
    print("La resta es: ", num1-num2)
elif opcion==3:
    print("La multiplicacion es: ", num1*num2)

else:
    
    print("No es una opcion correcta")