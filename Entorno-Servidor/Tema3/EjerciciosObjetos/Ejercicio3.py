"""Exercicio 3 - Produtos. Crea unha clase Produto cos atributos nome, prezo e stock.

Engade os seguintes métodos:

vender(unidades) → resta do stock o número de unidades vendidas.

Se non hai suficiente stock, debe mostrar unha mensaxe indicándoo.

__str__() → devolve unha cadea co formato "Produto: <nome> (Stock: <stock>)".

Crea varios produtos e proba a vender unidades para comprobar o funcionamento."""


class Product:
    def __init__(self, nombre, precio, stock):
        self.nombre = nombre
        self.precio = precio
        self.stock = stock

    def vender(self, unidades):
        if unidades > self.stock:
            print("El stock no es suficiente para esa demanda")
        else:
            self.stock -= unidades

    def __str__(self):
        return (f" Producto {self.nombre} (Stock: {self.stock})")


producto = Product('Pera', 2.50, stock=50)
producto.vender(51)
print(producto)
producto.vender(25)
print(producto)
producto.vender(24)
print(producto)
