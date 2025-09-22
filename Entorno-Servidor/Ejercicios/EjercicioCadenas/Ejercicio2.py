'''Exercicio 2. Escribe un script que determine se unha cadea de texto introducida por teclado é un palíndromo. 
Un palíndromo é unha palabra ou frase que se le da mesma maneira de esquerda a dereita que de dereita a esquerda, ignorando espazos e maiúsculas. 
Se é palíndromo mostrará por pantalla É palíndromo e se non o é Non é palíndromo.'''

cadena=str(input("Introduce una palabra\n"))

if cadena==cadena[::-1]:
    print(f'{cadena} es palindromo')
else:
    print(f'{cadena} no es palindromo')
   
# Contando que haya mayusculas 
# if cadena.lower()==cadena.lower()[::-1]:
#     print(f'{cadena} es palindromo')
# else:
#     print(f'{cadena} no es palindromo')