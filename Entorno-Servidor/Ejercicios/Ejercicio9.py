"""Exercicio 9. Escribe un script que pida ao usuario o radio dunha circunferencia e calcular o seu perímetro e área. Mostra o resultado por pantalla, primeiro o perímetro e despois a área."""

radio = float(input("Introduzca el radio del cuadrado\n"))

pi = 3.1416

perimetro = 2 * pi * radio

area = pi * radio ** 2

print(f"El perimeto del triangulo es: {perimetro} y el area es: {area}")
