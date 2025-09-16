"""Escribe un script que simule unha calculadora que reciba unha cantidade de Libras Esterlinas e realice o cambio de divisas a euros. Un € é igual a 1,10 libras. Mostra o resultado por pantalla."""

print("Bienvenido al conversor de Libras a Euros")

libras = float(input("Introduzca la cantidad de libras a convertir.\n"))

print(f"La cantidad de euros equivalente a {libras} libras es de: {libras*1.10:.2f} euros")
