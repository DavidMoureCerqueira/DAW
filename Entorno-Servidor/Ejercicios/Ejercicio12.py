"""Exercicio 12. Escribe un script que pida que calcule o valor do seguinte polinomio 2x^2 + 5x - 3 para o valor de x que especifique o usuario por teclado. Mostra o resultado por pantalla."""

x = int(input("Dado el polinomio 2x^2+5x-3, introduzca el valor de x para ver el resultado\n"))

polinomio=(2*x**2)+(5*x)-3
print(f"El resultado del polinomio es: {polinomio}")
