'''Exercicio 5 – Estudantes. Crea unha clase Estudante cos atributos nome e curso. Engade un atributo estático chamado centro co valor inicial "IES FP Galicia". 

Engade un método estático cambiar_centro(novo_nome) que modifique este valor para toda a clase.

Crea varios estudantes, cambia o centro e comproba que o cambio afecta a todos.'''

class Estudiante:
    centro='IES FP Galicia'
    def __init__(self, nombre, curso):
        self._nombre=nombre
        self._curso=curso
    @staticmethod
    def cambiar_centro(nuevo_nombre):
        Estudiante.centro=nuevo_nombre
    def __str__(self):
        return (f"El alumno {self._nombre} del curso {self._curso} esta en el centro {Estudiante.centro}")

estudiante= Estudiante("David", "DAW")
print(estudiante)
Estudiante.cambiar_centro("WIRTZ")
print(estudiante)