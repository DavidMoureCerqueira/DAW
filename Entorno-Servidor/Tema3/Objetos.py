


class Animal:

    # __slots__=['nombre','edad'] #Es una lista que contiene los atributos que va a tener,  no me va a dejar poner mas
    # atributos
    # nombre = 'Gatete' --> Aqui estos atributos son estaticos se accede con Animal.nombre
    pi=3.1416
    # constructor

    def __init__(self,nombre, apellido="es un animal"):  #--> Son los atributos reales del objeto se pueden enviar mas atributos ya predeterminados, si no pasamos nada para apellido cogera el default, si se envia cogera el que se envia
        self._nombre = nombre
        
    @property #decorador que permite simular los atributos privados // GETTER
    def nombre(self): #Es un alias de _nombre
        return self._nombre
    @nombre.setter # es el setter
    def nombre(self, nuevo_nombre):
        self._nombre=nuevo_nombre
    
    @staticmethod
    def getPi():        #No utiliza self porque no puede acceder a metodos no estaticos, no reconoce self
        return Animal.pi

    # # metodos
    # def getNombre(self):
    #     return self.nombre

    # # la primera referencia es lo que queremos cambiar, le pasas el self para referirse a lo que seria this
    # def setNombre(self, nombre):
    #     self.nombre = nombre


animal = Animal()
# animal.setNombre('Paquito')
# No hace falta setter
# print(animal.getNombre())
# No hay control de visibilidad por tanto no hace falta getters
# print(animal.nombre)
# animal.nombre = 'No Hace falta setter'
# print(animal.nombre)
# animal.edad = 11  # Crea edad
# print(animal.nombre)
# print(animal.edad)

#atributos privados con _, aunque funciona igual, es solo una convencion, puede aplicarse tambien a un metodo
# print(animal.nombre)


# animal.edad=11 con __slots__ si no esta edad, fallara

#con @property representa lo que puedes acceder y modificar y tu
animal.nombre="Paquito"
print(animal.nombre)