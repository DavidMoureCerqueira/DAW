"""Exercicio 8. Escribe un script que pida ao usuario a base e altura dun triángulo nesta orde e calcular a súa área. Mostra o resultado por pantalla."""

base=float(input("Introduzca la base del triangulo\n"))
altura=float(input("Introduzca la altura del triangulo\n"))
area_triangulo = (base * altura) / 2
print(f"El area resultante del triangulo de base : {base} y altura: {altura} es: {area_triangulo}")