'''Exercicio 6. Escribe un script que comprobe se dados dous números introducidos por teclado, se un deles é divisor do outro. 
Se un deles é divisor mostra o número divisor pon pantalla. Se ningún é divisor do outro, mostra Erro.'''
num1=int(input("Introduzca el primer numero\n"))
num2=int(input("Introduzca el segundo numero\n"))

if(num1%num2==0 or num2%num1==0):
    if(num1%num2==0):
        print(num2, " es divisor")
    if(num2%num1==0):
        print(num1, " es divisor")
else:
    print("Error")


