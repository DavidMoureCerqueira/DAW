def celsius_to_farenheit(celsius):
    """
    Función que fai un cambio de unidades de temperatura, de graos Celsius a Farenheit.
    
    Args:
        celsius (float): O valor de graos Celsios que desexamos transformar
    
    Returns:
        float: O valor da temperatura en graos Farenheit

    Raises:
        ValueError: se o valor do parámetro celsius non é un número
    """

    if not(type(celsius) is int or type(celsius) is float):
        raise ValueError()

    if celsius < 0:
        raise ValueError()

    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit