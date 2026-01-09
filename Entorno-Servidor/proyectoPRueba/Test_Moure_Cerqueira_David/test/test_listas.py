import pytest
from app.ejercicio_listas import so_pares
from app.ejercicio_listas import eliminar_duplicados
from app.ejercicio_listas import contar_lonxitudes



def test_so_pares_lista_mixto():
    resultado = so_pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    assert resultado == [2, 4, 6, 8, 10]


def test_so_pares_solo_pares():
    resultado = so_pares([2, 4, 6, 8, 10])
    assert resultado == [2, 4, 6, 8, 10]


def test_so_pares_solo_impares():
    resultado = so_pares([1, 3, 5, 7, 9, 11])
    assert resultado == []
    
    
def test_so_pares_vacio():
    resultado = so_pares([])
    assert resultado == []

def test_eliminar_duplicados_todos_duplicados():
    resultado=eliminar_duplicados([1,1,1,1,1,1,1,1])
    assert resultado==[1]
    
def test_eliminar_duplicados_ningun_duplicados():
    resultado=eliminar_duplicados([1,2,3,4,5,6,7,8,9,10])
    assert resultado==[1,2,3,4,5,6,7,8,9,10]
    
def test_eliminar_duplicados_vacio():
    resultado=eliminar_duplicados([])
    assert resultado==[]
    
def test_eliminar_duplicados_todos_menos_uno():
    resultado=eliminar_duplicados([3,3,3,3,3,3,5,3,3,3,3,3,3,3])
    assert resultado==[3,5]
    
def test_contar_longitudes_estandar():
    resultado=contar_lonxitudes(['paco','almendra', 'ramon'])
    assert resultado==[4,8,5]

def test_contar_longitudes_palabras_con_espacios():
    resultado=contar_lonxitudes(['hola que tal','almendra', 'ramon'])
    assert resultado==[12,8,5]

def test_contar_longitudes_palabras_iguales():
    resultado=contar_lonxitudes(['almendra','almendra', 'almendra'])
    assert resultado==[8,8,8]
    
def test_contar_longitudes_vacio():
    resultado=contar_lonxitudes([])
    assert resultado==[]
    
def test_contar_longitudes():
    with pytest.raises(TypeError):
        contar_lonxitudes([2,3,4])
    
    

    


