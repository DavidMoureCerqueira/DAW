"""Exercicio 2 – Alumnos. Crea unha clase chamada Alumno cos atributos nome e nota. 
Engade un método chamado aprobado() que devolva True se a nota é maior ou igual a 5, e False en caso contrario."""


class Alumno:

    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota

    def aprobado(self):
        if self.nota >= 5:
            print(f"{self.nombre} esta aprobado")
        else:
            print(f"{self.nombre} esta suspenso")


paco = Alumno('paco', 5)
francisco = Alumno('francisco', 4.5)
alumnos = [Alumno('Paco', 5), Alumno('Francisco', 4.5), Alumno('Mateo', 9)]

for alumno in alumnos:
    alumno.aprobado()
