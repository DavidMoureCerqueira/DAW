# Comprueba par:

import pytest

from app.ejercicio_funciones import comproba_par


def test_comprueba_par_introducir_letra():
    with pytest.raises(TypeError):
        comproba_par('a')
        
def test_comprueba_par_introducir_numero_string():
    with pytest.raises(TypeError):
        comproba_par('2')
        
def test_comprueba_par_introducir_mas_de_un_numero():
    with pytest.raises(TypeError):
        comproba_par(2,3)

def test_comprueba_par_numero_negativo_par():
    resultado = comproba_par(-4)
    assert resultado == True
    
def test_comprueba_par_numero_negativo_impar():
    resultado = comproba_par(-5)
    assert resultado == False
    
def test_comprueba_par_numero_par():
    resultado = comproba_par(4)
    assert resultado == True
    
def test_comprueba_par_numero_impar():
    resultado = comproba_par(5)
    assert resultado == False
    
def test_comprueba_par_numero_zero():
        resultado=comproba_par(0)
        assert resultado==True
        
def test_comprueba_par_decimal_par():
    resultado=comproba_par(2.2)
    assert resultado==False
    

