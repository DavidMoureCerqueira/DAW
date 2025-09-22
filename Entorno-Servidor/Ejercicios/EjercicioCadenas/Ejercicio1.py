'''Exercicio 1. Escribe un script que en Python que conte o número de vogais nunha cadea de texto introducida por teclado. 
Por último imprimirá por pantalla o número de vogais. Recorda contar tanto as maiúsculas como as minúsculas.'''

cadena = str(input('Introduce una palabra o frase.\n'))
vocales=0
for letra in cadena:
    if letra in 'AEIOUaeiou':
        vocales+=1
print(f"La palabra {cadena} tiene {vocales} vocales")