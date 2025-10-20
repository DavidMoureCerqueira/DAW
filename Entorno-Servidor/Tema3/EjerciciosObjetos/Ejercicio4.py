'''Exercicio 4 – ContaBancaria. Crea unha clase ContaBancaria cos atributos privados _titular e _saldo.

Engade os métodos:

ingresar(cantidade) → aumenta o saldo.

retirar(cantidade) → diminúe o saldo, sempre que haxa fondos suficientes.

Engade tamén unha propiedade (property) chamada saldo que:

devolva o saldo actual cando se lea;

e non permita asignar valores negativos.

Crea unha conta e proba distintas operacións de ingreso e retirada.'''

class CuentaBancaria:
    def __init__(self, titular, saldo):
        if(saldo>0):
            self._titular=titular
            self._saldo=saldo
        else:
            raise ValueError("No se puede crear una cuenta con valor negativo")
        
    @property 
    def saldo(self): #Es un alias de _nombre
        return self._saldo

    def ingresar(self, cantidad):
        if cantidad<0:
            raise ValueError("No se puede ingresar cantidades negativas")
        
        self._saldo+=cantidad
       
    def retirar(self, cantidad):
        if cantidad<0:
            raise ValueError("No es posible operar con importes negativos")
        else:
            if cantidad<self.saldo:
                self._saldo-=cantidad
            else:
                print("La cantidad a retirar supera los fondos disponibles")
    def __str__(self):
        return(f"{self._titular} tiene de saldo {self.saldo}")
            
try:
    cuenta_bancaria=CuentaBancaria('David',51.25)
    print(cuenta_bancaria)
    cuenta_bancaria.retirar(25)
    print(cuenta_bancaria)
    cuenta_bancaria.ingresar(155)
    print(cuenta_bancaria)
    
except ValueError as e:
    print("Error: ", e)