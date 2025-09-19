'''
Exercicio 3. Escribe un script que pida ao usuario un ano e indique se é bisesto ou non. Coidado que a condición de ser bisesto non só é ser divisible entre 4. 

O algoritmo debe estar implantado dentro dunha función denominada: comprobar_bisesto(ano: int) -> boolean.

Condición de ser bisesto:

Obrigatorio ten que ser divisible entre 4

Se o é, se é divisible por 100 ten que ser tamén por 400

Se é bisesto mostrarase por pantalla Bisesto e senón Non bisesto. En caso de se introduza un valor negativo, mostrarase por pantalla Erro.'''


def comprobar_bisiesto(año:int):
    if(año%4==0 and año%100!=0 or año%100==0 and año%400==0):
        return True
    else:
        return False
    
año=int(input("Introduzca un año.\n"))
if(comprobar_bisiesto(año)):
    print(f"{año} es bisiesto")
else:
    print(f"{año} no es bisiesto")
