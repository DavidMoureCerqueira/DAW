'''Exercicio 3. Escribe un script que lea un número por teclado e deduza se está entre 10 e 100 (ambos inclusive). Se é así mostra por pantalla Está no intervalo e senón Non está no intervalo.'''

numero=int(input("Introduzca un numero\n"))

if numero>=10 and numero<=100:
    print("Esta en el intervalor")
else:
    print("No esta en el intervalo")