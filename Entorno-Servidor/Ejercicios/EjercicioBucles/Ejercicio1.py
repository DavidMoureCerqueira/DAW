'''Exercicio 1. Escribe un script que calcule a suma dos N primeiros números. O valor de N e introducido por teclado. Mostra o resultado por pantalla.'''

num=int(input('Introduce un numero\n'))
suma=0
rango= range(num)
for i in rango:
    suma+=i
print("La suma de los numeros es: ", suma)