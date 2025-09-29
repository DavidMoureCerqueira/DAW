'''Exercicio 1: Calculadora en módulos. Crea unha aplicación de cálculo separada en distintos módulos. As operacións soportados son dúas: aritméticas e comparación

Crea dous módulos independientes:

aritmeticas.py

Define as funcións de suma, resta e multiplicación.

comparacions.py

Define as funcións de maior_que e menor_que.

Crea tamén un módulo principal main.py  que solicite ao usuario dous números e operación que queira realizar. Con ese datos, deberá executar a función correspondente e mostrar o resultado por pantalla.

Exemplo:

Copiar
=== Menú de operacións ===
1. Sumar
2. Restar
3. Multiplicar
4. ¿É maior?
5. ¿É menor?
Escolle unha opción: 1
Introduce o primeiro número: 10
Introduce o segundo número: 5
Resultado: 15'''

import aritmeticas, comparaciones

try:
    print("""1. Sumar
2. Restar
3. Multiplicar
4. ¿É maior?
5. ¿É menor?
""")
    opcion=int(input("Escoge una opcion utilizando los numeros:\n"))
    num1=int(input("Introduce el primer numero.\n"))
    num2=int(input("Introduce el segundo numero.\n"))

except Exception:
    print("No ha introducido un numero")

else:
    
    if opcion==1:
        resultado=aritmeticas.sumar(num1,num2)
        print("Resultado: ",resultado)
    elif opcion==2:
        resultado=aritmeticas.restar(num1,num2)
        print("Resultado: ",resultado)
    elif opcion==3:
        resultado=aritmeticas.multiplicar(num1,num2)
        print("Resultado: ",resultado)
    elif opcion==4:
        comparaciones.mayor(num1,num2)
    elif opcion==5:
       comparaciones.menor(num1,num2)
    else:
        print("No ha introducido una opcion valida.\n")
        
