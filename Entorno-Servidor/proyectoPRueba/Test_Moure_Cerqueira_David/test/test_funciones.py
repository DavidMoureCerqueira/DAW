# Comprueba par:

import pytest

from app.ejercicio_funciones import comproba_par
from app.ejercicio_funciones import comprobar_valores_iguais
from app.ejercicio_funciones import calcular_menor_numero
from app.ejercicio_funciones import comprobar_bisesto


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
    
def test_valores_iguales_todos_iguales():
    resultado=comprobar_valores_iguais(3,3,3)
    assert resultado==True
    
def test_valores_iguales_primeros_iguales():
    resultado=comprobar_valores_iguais(1,1,3)
    assert resultado==True
    
def test_valores_iguales_ultimos_iguales():
    resultado=comprobar_valores_iguais(1,3,3)
    assert resultado==True
    
def test_valores_iguales_salteados_iguales():
    resultado=comprobar_valores_iguais(1,3,1)
    assert resultado==True
    
def test_valores_iguales_diferentes():
    resultado=comprobar_valores_iguais(1,2,3)
    assert resultado==False

def test_menor_numero_primero():
    resultado=calcular_menor_numero(1,2,3)
    assert resultado==1
    
def test_menor_numero_segundo():
    resultado=calcular_menor_numero(2,1,3)
    assert resultado==1
    
def test_menor_numero_tercer():
    resultado=calcular_menor_numero(3,2,1)
    assert resultado==1
    
def test_menor_numero_iguales():
    resultado=calcular_menor_numero(1,1,1)
    assert resultado==1

def test_menor_numero_dos_primeros_iguales():
    resultado=calcular_menor_numero(2,2,5)
    assert resultado==5
def test_menor_numero_dos_ultimos_iguales():
    resultado=calcular_menor_numero(5,7,7)
    assert resultado==5
    
def test_menor_numero_negativos():
    resultado=calcular_menor_numero(-11,-31,-51)
    assert resultado==-51

def test_comprobar_bisiesto_numero_muy_bajo_bisiesto():
    resultado=comprobar_bisesto(4)
    assert resultado==True
def test_comprobar_bisiesto_numero_muy_bajo_no_bisiesto():
    resultado=comprobar_bisesto(10)
    assert resultado==False
    
def test_comprobar_bisiesto_numero_muy_alto():
    resultado=comprobar_bisesto(4000)
    assert resultado==True
    
def test_comprobar_bisiesto_numero_cien():
    resultado=comprobar_bisesto(100)
    assert resultado==False
    
def test_comprobar_bisiesto_numero_0():
    resultado=comprobar_bisesto(0)
    assert resultado==True
def test_comprobar_bisiesto_numero_0():
    resultado=comprobar_bisesto(0)
    assert resultado==True
    
    


