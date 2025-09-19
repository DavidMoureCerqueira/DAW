'''Exercicio 7. Escribe un script que pida que se introduzan números por teclado ata que o total da suma de tódolos números introducidos sexa 100 ou máis. 
Ao rematar indica por pantalla a cantidade de números introducidos.'''

suma = int(input("Introduce el valor a sumar\n"))
contador = 1

while (suma <= 100):
    suma = int(input("Introduzca otro numero\n"))
    suma += suma
    contador += 1


print(f"Has utilizado {contador} numeros")
