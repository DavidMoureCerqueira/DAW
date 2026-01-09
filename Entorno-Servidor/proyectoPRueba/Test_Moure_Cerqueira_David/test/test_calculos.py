# Para hacer test, importamos

from app.calculos import sumar
from app.calculos import dividir
from app.ejercicio_funciones import comproba_par
# para test con excepciones
import pytest


# def test_sumar_dos_enteros():
#     resultado = sumar(6, 3)

# Palabra reservada para hacer aserciones.

    # assert resultado == 9

    # Se ejecutan los text con pytest .\.venv\Scripts\python.exe -m pytest
    # Se le puede pasar una ruta de un fichero concreto e incluso un test concreto utilizando ruta::Nombrefuncion
    # Para mas detalle: .\.venv\Scripts\python.exe -m pytest -v


# def test_sumar_dos_negativos():
#     resultado = sumar(-2, -4)
#     assert resultado == -6

# # test con excepciones


# def test_dividir_con_excepeciones():
#     with pytest.raises(ZeroDivisionError):
#         # Este bloque espera la excepcion
#         dividir(4, 0)





