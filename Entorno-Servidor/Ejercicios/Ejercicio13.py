"""Exercicio 13. Escribe un script que pida ao usuario o radio e altura dun cilindro nesta orde e calcula o seu volume. Mostra o resultado por pantalla.
"""
radio=float(input("Introduce el radio del cilindro\n"))
altura=float(input("Introduce la altura del cilindro\n"))
pi=3.1416
volumen=2*pi*radio**2*altura
print(f"El volumen de ese cilindro es de: {volumen}")