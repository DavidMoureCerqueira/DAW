'''Exercicio 3. Escribe un script que elimine todas as consoantes dunha cadea de texto introducida por teclado e devolva unha nova cadea só coas vocais e outros caracteres. 
Mostra este texto por pantalla.
'''

cadena=str(input("Introduce una palabra o cadena de caraceteres\n"))
cadenaSinConso=''
for letra in cadena:
    if letra.lower() not in 'bcdfghjklmnrñpqrstvwxyz':
        cadenaSinConso+=letra
print(cadenaSinConso)