
# # Las excepciones la utilizamos para casos que no controlamos

# # En lugar de try-catch es try except, se ejecutan las lineas del try hasta que haya el error

# ent=input('Introduzca la temperatura Farenheit:')
# try:
#     fahr=float(ent)
#     cel=(fahr-32.0) *5.0/9.0
#     print(cel)

# except:
# 	print('Por favor, introduza un número')
 
# #  existe el: try except else

# def dividir(a, b):
#     try:
#         resultado = a / b
#     except ZeroDivisionError:
#         print("Erro: Non se pode dividir por cero.")
#     else:
#         print(f"O resultado de {a} / {b} e: {resultado}") #EL ELSE SE EJECUTA SIEMPRE QUE NO HAYA UNA EXCEPCION, no es como un finally (que se ejecuta siempre)

# dividir(10, 2) # Imprime: O resultado de 10 / 2 e: 5.0

# dividir(10, 0) # Erro: Non se pode dividir por cero.

# #Se pueden propagar excepciones.

# def funcion_b():
#     x = 1 / 0  # Excepción aquí

# def funcion_a():
#     funcion_b()  # Llama a funcion_b

# try:
#     funcion_a()  # Chama a funcion_a
# except:
#     print("Capturada na función principal!")
    
#Lanza excepcion
def funcion_b():
    try:
        x = 1 / 0  
    except ZeroDivisionError:
        raise Exception
    

def funcion_a():
    try:
        funcion_b()  # Llama a funcion_b
    except Exception:
        print("capturada en la funcion principal    x1")
        raise Exception

try:
    funcion_a()  # Chama a funcion_a
except:
    print("Capturada na función principal!")