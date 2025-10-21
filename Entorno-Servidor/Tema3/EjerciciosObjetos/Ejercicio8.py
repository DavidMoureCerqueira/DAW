'''Exercicio 8 - Temperaturas. Crea unha clase chamada Temperatura que xestione o valor dunha temperatura en graos Celsius, pero permitindo acceder tamén á súa conversión a graos Fahrenheit e Kelvin.

 A clase debe ter un atributo privado _celsius.

No construtor (init) debe recibir o valor inicial en graos Celsius.

Se o valor é inferior a −273.15, debe lanzar un ValueError con mensaxe: "A temperatura non pode ser inferior ao cero absoluto." 

Engade unha propiedade celsius con: 

Getter: devolve o valor actual en graos Celsius. 

Setter: permite modificar o valor, comprobando que non sexa inferior a −273.15. Se o é, lanza o mesmo ValueError. 

Engade dúas propiedades de só lectura: 

fahrenheit → devolve a temperatura convertida a °F. Fórmula: F = C * 9/5 + 32 

kelvin → devolve a temperatura convertida a K. Fórmula: K = C + 273.15 
4. 

Engade o método str() que devolva:


Copiar
"<valor>°C = <valor>°F = <valor>K"'''


class Temperatura:
    def __init__(self, celsius):
        if (celsius < -(273.15)):
            raise ValueError("Esa temperatura no es en Celsius")
        self._celsius = celsius

    @property
    def temperatura(self):
        return self._celsius

    @temperatura.setter
    def temperatura(self, temperatura):
        if temperatura < -(273.15):
            raise ValueError("No es una temperatura en Celsius")
        self._celsius = temperatura

    @property
    def fahrenheit(self):
        return self.temperatura*9/5+32

    @property
    def kelvin(self):
        return self.temperatura+273.15

    def __str__(self):
        return f"{self.temperatura}ºC = {self.fahrenheit}ºF ={self.kelvin}K "


temperatura = Temperatura(32)

print(temperatura)

temperatura.temperatura = 50
print(temperatura)
