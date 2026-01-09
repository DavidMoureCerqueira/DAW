import pytest
from app.ejercicio_diccionarios import contar_frecuencia
from app.ejercicio_diccionarios import valor_maximo

def test_contar_frecuencia_estandar():
    resultado=contar_frecuencia(["manzana", "banana", "manzana", "naranja", "banana", "manzana"])
    assert resultado=={"manzana":3,"banana":2,"naranja":1}

def test_contar_frecuencia_todas_diferentes():
    resultado=contar_frecuencia(["manzana", "banana", "naranja"])
    assert resultado=={"manzana":1,"banana":1,"naranja":1}
    
def test_contar_frecuencia_con_numero():
    resultado=contar_frecuencia([5, "banana", "manzana", "naranja", "banana", "manzana"])
    assert resultado=={5:1,"banana":2,"manzana":2,"naranja":1}

def test_contar_frecuencia_todos_iguales():
    resultado=contar_frecuencia(["banana", "banana", "banana", "banana", "banana", "banana"])
    assert resultado=={"banana":6}
    

def test_contar_frecuencia_todos_numeros():
    resultado=contar_frecuencia([1,1,1,1,3,4,5,6,7,4,4,2])
    assert resultado=={1:4,3:1,4:3,5:1,6:1,7:1,2:1}
    
def test_contar_frecuencia_vacio():
    resultado=contar_frecuencia([])
    assert resultado=={}
    
    
def test_valor_maximo_standar():
    resultado=valor_maximo({'a': 5, 'b': 3, 'c': 5, 'd': 2})
    assert resultado==['a','c']
    
def test_valor_maximo_todos_mismo_valor():
    resultado=valor_maximo({'a': 5, 'b': 5, 'c': 5, 'd': 5})
    assert resultado==['a','b','c','d']
    
def test_valor_maximo_todos_diferente_valor():
    resultado=valor_maximo({'a': 5, 'b': 4, 'c': 3, 'd': 2})
    assert resultado==['a']

def test_valor_maximo_letra():
    with pytest.raises(TypeError):
        valor_maximo({'a': 'a', 'b': 4, 'c': 3, 'd': 2})
            
def test_valor_maximo_vacio():
    resultado=valor_maximo({})
    assert resultado==[]


