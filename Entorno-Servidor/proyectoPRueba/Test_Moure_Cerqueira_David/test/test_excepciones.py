import pytest
from app.ejercicio_excepciones import celsius_to_farenheit


def test_celsius_to_farenheit_estandar():
    resultado = celsius_to_farenheit(25)
    assert resultado == 77


def test_celsius_to_farenheit_decimal():
    resultado = celsius_to_farenheit(25.5)
    assert resultado == 77.9


def test_celsius_to_farenheit_cero():
    resultado = celsius_to_farenheit(0)
    assert resultado == 32


def test_celsius_to_farenheit_negativo():
    with pytest.raises(ValueError):
        celsius_to_farenheit(-5)


def test_celsius_to_farenheit_letra():
    with pytest.raises(ValueError):
        celsius_to_farenheit('a')


def test_celsius_to_farenheit_numero_como_string():
    with pytest.raises(ValueError):
        celsius_to_farenheit('5')
