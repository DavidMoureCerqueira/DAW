'''Exercicio 1. Escribe un script que solicite ao usuario dous números e a continuación mostre o resultado de dividir o primeiro número polo segundo. 
Asegúrate de manexar as excepcións no caso de que o usuario intente dividir entre cero ou introduza por teclado un valor que non sexa un número. 
Para realizar isto deberás capturar as excepcións ZeroDivisionError e ValueError. Para cada unha das mensaxes mostra unha mensaxe de erro diferente:

Cando se capture a excepción ZeroDivisionError mostra por pantalla: Erro: Non se pode dividir entre cero.

Cando se capture a excepción ValueError mostra por pantalla: Erro: Entrada non válida, por favor introduce números..'''


def capturarNumeros(mensaje):
    num=input(mensaje)
    try:
        num=float(num)
    except ValueError:
        raise ValueError
    else:
        return num
    

def dividir(num,num2):
    try:
        division=num/num2
    except ZeroDivisionError:
        print("No es posible dividir entre 0")
    else:
        print(f"El resultado de dividir {num} y {num2} es: {division}")

try:
    num1=capturarNumeros("Introduzca el dividendo\n")
    num2=capturarNumeros("Introduzca el divisor\n")
except ValueError:
        print("Debe introducir un numero")
else:
        dividir(num1,num2)


