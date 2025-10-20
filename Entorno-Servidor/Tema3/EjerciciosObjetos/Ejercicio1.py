"""Exercicio 1 – Coches. Crea unha clase chamada Coche que teña como atributos: marca, modelo e ano. 
Engade un método chamado descricion() que devolva unha cadea co seguinte formato:"""


class Coche:
    def __init__(self, marca, modelo, ano):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano

    def descripcion(self):
        return f"Marca {self.marca}, modelo {self.modelo}, año {self.ano}"


coche = Coche(marca="Volvo", modelo=940, ano=1990)
print(coche.descripcion())
