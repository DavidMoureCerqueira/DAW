'''Exercicio 3. Escribe unha función celsius_to_farenheit(celsius: float) -> float nun script que converta unha temperatura de graos Celsius a Farenheit. 
Se o parámetro que se lle pasa a función non é un número ou non é un número positivo, debe lanzar unha excepción ValueError.'''
def celsius_to_farenheit(cel):

        
    try:
        cel=float(cel)
        if type(cel)!=float:
            raise ValueError
        
        if(cel<0):
            raise ValueError
    except (TypeError,ValueError):
            print("Numero erroneo")
    else:
        farh=((cel*9/5)+32)
        print(f"{cel} grados celsius equivalen a {farh:.2f} grados farenheit.")
        
cel=(input("Introduzca un numero positivo\n"))

celsius_to_farenheit(cel);