'''Exercicio 6 – Herdanza. Crea unha clase base chamada Empregado cos atributos nome e salario. 
Crea unha subclase chamada Xestor que herde de Empregado e engada un atributo departamento. 
Engade un método mostrar_info() en cada clase que devolva unha cadea cos datos correspondentes.'''


class Empleado:

    def __init__(self, nombre, salario):
        self._nombre = nombre
        self._salario = salario

    def mostrar_info(self):
        return f"El empleado {self._nombre} cobra {self._salario} €"


class Gestor(Empleado):
    def __init__(self, nombre, salario, departamento):
        super().__init__(nombre, salario)
        self._departamento = departamento

    def mostrar_info(self):
        return super().mostrar_info() + f" trabaja en el departamento de {self._departamento}"


empleado = Empleado('Paco', 1500)

gestor = Gestor('Arturo', 2000, 'IT')

print(empleado.mostrar_info())

print(gestor.mostrar_info())
