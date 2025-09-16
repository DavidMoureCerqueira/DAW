""" Escribe un script que pida ao usuario primeiro o seu salario bruto e despois o IRFP en tanto por cen e indícalle o seu salario neto. 
Utiliza a seguinte fórmula para o calculo: salario_neto = salario_bruto - (salario_bruto * IRPF). Mostra o resultado por pantalla."""

salario_bruto = float(input("Introduzca su salario bruto\n"))
IRPF = float(input("Introduzca el IRPF en tanto porciento\n"))/100

salario_neto = salario_bruto-(salario_bruto*IRPF)

print(f"Su salario neto resultanto de su sueldo de {salario_bruto} es de: {salario_neto}, disfruta lo votado")