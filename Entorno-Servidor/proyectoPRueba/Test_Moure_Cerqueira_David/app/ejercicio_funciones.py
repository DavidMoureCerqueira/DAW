# Ejercicio 1 


def comproba_par(numero):
    """
    Funcion que indica se un numero e par ou impar
    
    Args:
        n(int): un enteiro o cal se vai comprobar se e par
    
    Returns: 
        (boolean) True se e par ou False se e impar

    """
    if numero % 2 == 0:
        return True
    else:
        return False

def   comprobar_valores_iguais(numero1, numero2, numero3):
    if numero1 == numero2 or numero1 == numero3 or numero2 == numero3:
        return True
    return False


def calcular_menor_numero(numero1, numero2, numero3):
    if numero1 < numero2 and numero1 < numero3:
            return numero1
    elif numero2 < numero1 and numero2 < numero3:
        return numero2
    return numero3


def comprobar_bisesto(ano):   
    """
    Función que indica o menor de tres numeros
    
    Args:
        ano (int): o ano que queremos comprobar
    
    Returns:
        (boolean )Devolve True se e bisesto, False se non o e

    """
    if ano % 4 == 0 and ano % 100 == 0 and ano % 400 == 0:
        return True
    elif ano % 4 == 0 and ano % 100 != 0:
        return True
    else:
        return False