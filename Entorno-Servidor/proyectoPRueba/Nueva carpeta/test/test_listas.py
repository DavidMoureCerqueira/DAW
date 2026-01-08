import pytest
from app.ejercicio_listas import so_pares


def test_so_pares_lista_mixto():
    resultado = so_pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    assert resultado == [2, 4, 6, 8, 10]


def test_so_pares_solo_pares():
    resultado = so_pares([2, 4, 6, 8, 10])
    assert resultado == [2, 4, 6, 8, 10]


def test_so_pares_solo_impares():
    resultado = so_pares([1, 3, 5, 7, 9, 11])
    assert resultado == [1, 3, 5, 7, 9, 11]
