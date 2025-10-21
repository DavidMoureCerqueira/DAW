'''Exercicio 7 – Clases abstractas. Crea unha clase abstracta chamada Figura que teña o método abstracto area(). 

Crea dúas clases fillas: Cadrado e Circulo, cada unha implementando o método area() segundo corresponda.

Proba a crear obxectos de ambas clases e mostra as súas áreas.'''


from abc import ABC, abstractmethod


class Figura(ABC):
    @abstractmethod
    def area(self):
        pass


class Cuadrado(Figura):

    def __init__(self, lado):
        super().__init__()
        self._lado = lado

    def area(self):
        return self._lado*self._lado


class Circulo(Figura):

    PI = 3.1416

    def __init__(self, radio):
        super().__init__()
        self._radio = radio

    def area(self):
        return Circulo.PI*self._radio*self._radio

cuadrado=Cuadrado(25)
circulo=Circulo(25)
print(cuadrado.area())
print(circulo.area())