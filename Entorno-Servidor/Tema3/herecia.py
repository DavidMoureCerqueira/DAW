# Clase pai
class Animal:
    # Construtor
    def __init__(self, nome):
        self.nome = nome

    # Metodo
    def hacer_sonido(self):
        return "El animal hizo: "

# PERMITE HERENCIA MULTIPLE
# Clase filla de Animal


class Perro(Animal):  # en el parentesis es la clase de la que esta heredando

    # def __init__(self,nombre,edad):
    #     super().__init__(nombre)   #acceder al constructor del padre
    #     self.edad=edad

    def hacer_sonido(self):
        sonido_animal = super().hacer_sonido()
        return sonido_animal +" Guau!"

# Clase filla de Animal


class Gato(Animal):
    def hacer_sonido(self):
        return "Miau!"


# Crear instancias das clases derivadas
perro = Perro(nome="Buddy")
gato = Gato(nome="Whiskers")

# Acceder aos atributos da clase base
print(perro.nome)  # Saida: Buddy

# Chama aos metodos da clases derivadas


print(perro.hacer_sonido())  # Saida: Guau!
print(gato.hacer_sonido())   # Saida: Miau!
print(isinstance(perro, Perro))
print(isinstance(perro, Animal))
print(isinstance(perro, Gato))
print(perro.hacer_sonido())

def ClaseAbstracta(ABC): # se usa ABC
    pass


#interfaz de nuevo, es una convencion es como una herecia class Circulo(FiguraGeometrica) se pasa como parametro
class FiguraGeometricas(): #No hay una convencion para la creacion de una clase abstracta
    def calcular_area(self):
        raise NotADirectoryError("")
    def calcular_perimetro(self):
        raise NotADirectoryError("")
    
    
class Circulo():
    def __init__(self, radio):
        self.radio=radio
    def __str__(self):
        #toString
        pass
    def __eq__(self):
        #toEquals
        pass
    def __len__(self):
        #La longitud del objeto
        pass 


circulo=Circulo(radio=5)
print(circulo.__dict__) #Convierte el objeto a un diccionario, muy similar a un JSON