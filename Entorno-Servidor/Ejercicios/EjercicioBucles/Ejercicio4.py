'''Exercicio 4. Escribe un script que pida as notas dun exame dos alumnos de unha clase e conte o numero de aprobados e suspensos. 
Pediráselle ao usuario que introduza notas por teclado ata que introduza un número inferior a 0 ou superior a 10. Mostrará primeiro o número de aprobados e despois o de suspensos.'''

aprobado = 0
suspenso = 0
cancelar=False
while cancelar==False:
    nota = float(input(
        "Introduzca la nota de los examenes. Utilice  un valor inferior a 0 o mayor de 10 para parar\n"))
    if(nota >= 0 and nota <= 10):
        if nota < 5:
            suspenso += 1
        else:
            aprobado += 1
    else:
        cancelar=True

print("El numero de aprobados es: ", aprobado)
print("El numero de suspensos es: ", suspenso)
