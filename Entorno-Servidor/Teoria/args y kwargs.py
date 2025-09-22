

def suma(a,b):
    print(a+b)
    
suma(1,2)

# si se quieren enviar parametros variables 2, 3 ,4 los que sean

def suma(*args): #Forma de enviar los parametros posicionales
    
    suma=0
    for num in args:
        suma=suma+num
    
    print (suma)
    
    suma(1,2,4,6,10)
    
    
def suma(*args,**kwargs): #Forma de enviar los parametros con nombre, como un clave valor
    
    suma=0
    for clave,valor in kwargs.items():

        print(clave, " : ", valor)
    
    print (suma)
    
    suma(1,2,4,6,10)
    
    # DECORADOR: Funcion que recibe funcion como argumento y devuelve
    
def decorador(funcion_b):
    def funcion_c(*args,**kwargs):
        print('Antes de la ejecucion de la funcion a decorar')
        funcion_b(*args,**kwargs)
        print('Despues de la ejecucion de la funcion a decorar')
        return funcion_c
        
@decorador
def saludar(nombre):
    print("Hola mundo", nombre)
    
saludar()
#Es importante los parametros que se le pasan, hay que ponerlo en la funcion, se suele usar *args, **kwargs
#Con args recibes una tupla y junto al kwargs recibes un clave valor
# args cubre pasar argumentos como posicion
# kwargs cubre como que se pase como clave-valor
saludar(nombre="David")