def contar_frecuencia(lista):
    """
    Conta a frecuencia de cada unha das palabras nunha lista

    Args:
        lista (list): lista de palabras

    Returns:
        dict: diccionario onde as chaves son as palabras e o seu valor o número de ocurrencias

    """
    # Creamos un dicionario baleiro
    contador = {}

    # Recorremos a lista
    for palabra in lista:
        # COmprobamos se hai unha clave que sexa a palabra da lista 
        if palabra in contador:
            # Aumentamos en 1 o contador da palabra
            contador[palabra] = contador[palabra] + 1
        else:
            # Como non existe a clave coa palabra, creamola e asignamoslle o valor 1
            contador[palabra] = 1

    return contador


def valor_maximo(dicionario):
    """
    Esta función devolve unha lista coas chaves do dicionario que teñen un valor maior

    Args:
        dicionario(dict): dicionario

    Returns:
        list: lista de chaves cos valores maiores

    """
    # Inicializamos o valor maximo como None
    maximo_valor = None

    # Inicializamos unha lista baleira
    claves = []

    # Recorremos o dicionario collendo a clave e o seu valor
    for clave, valor in dicionario.items():
        # Se o valor maximo e None (e decir e a primeira chave) ou o seu valor e maior atopamos un novo valor maximo
        if maximo_valor is None or valor > maximo_valor:
            # Actualizamos o valor maximo
            maximo_valor = valor
            # Creamos unha lista cun unico elemento que e a chave
            claves = [clave]

        # Se o valor e igual o valor maximo
        elif valor == maximo_valor:
            # Engadimos a chave a lista de chaves
            claves.append(clave)

    return claves