'''Exercicio 2. Implantar unha aplicación que calcule o menor de tres números introducidos por teclado polo usuario e o mostre por pantalla. 
Comproba antes de nada que ningún par de números é igual. Se isto é así, indícallo mostra por pantalla Erro e non calcules cal é o menor dos 3. 
Define dúas e utiliza estas dúas funcións:

comprobar_valores_iguais(numero1: int, numero2: int, numero3: int) -> boolean: indica se algún dos números é igual.

calcular_menor_numero(numero1: int, numero2: int, numero3: int) -> int: indica cal é o menor dos números.'''

def comprobar_valores_iguales(numero1,numero2,numero3):
    
    if numero1==numero2 or numero2==numero3 or numero1==numero3:
        return False
    else: 
        return True

def calcular_menor_numero(numero1,numero2,numero3):
    min=numero1
    
    if(numero2<min):
        min=numero2
    
    elif(numero3<min):
        min=numero3
    return min

numero1=int(input("Introduzca el primer numero.\n"))
numero2=int(input("Introduzca el segundo numero.\n"))
numero3=int(input("Introduzca el tercer numero.\n"))

if(comprobar_valores_iguales(numero1,numero2,numero3)):
   print(f"El menor es: {calcular_menor_numero(numero1,numero2,numero3)}") 
else:
    print("Alguno de los numero son iguales")
    