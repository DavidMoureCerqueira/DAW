'''Exercicio 6. Escribe un script que reciba por teclado un número enteiro positivo N. O programa mostrará por pantalla nesta orde:

O número de pares entre 1 e N incluídos.

O número de impares entre 1 e N incluídos.

A suma total de todos os números entre 1 e N incluídos.

A media só dos números pares entre 1 e N incluídos.'''

num=int(input("Introduzca un numero positivo\n"))
cont_par=0
cont_impar=0
suma=0
suma_par=0


rango=range(1,num+1)

for i in rango:
    if i%2==0:
        cont_par+=1
        suma_par+=i
    else:
        cont_impar+=1
    suma+=i


print(f"El numero de pares es {cont_par}, y su media es {(suma_par/cont_par)}\nEl numero de impares es {cont_impar} y la suma total es de: {suma} ")