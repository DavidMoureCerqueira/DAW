'''Exercicio 4. Crea unha función recursiva decimal_to_binario(numero: int) -> str que obteña o número binario dun número N decimal. 
Axuda: https://ed.team/blog/sistemas-binarios-y-decimales.'''


def decimal_to_binario(numero):
    if numero==0:
        print(numero)

        return 0
    elif numero==1:
        print(numero)

    else:
        print(numero%2)

        return decimal_to_binario(numero//2)
    
decimal_to_binario(110)
