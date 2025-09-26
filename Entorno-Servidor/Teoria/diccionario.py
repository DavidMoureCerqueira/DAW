

# Diccionario es una lista pero con elementos de cualquier tipo.

eng2gal = dict()

print(type(eng2gal)) #Tipo dict


#Se inicializa con las llaves:

eng2gal={}

print(type(eng2gal)) #Tipo dict

#Se le puede poner clave y valor:

eng2gal={'clave1':"True", 'clave2':3} #Puede tener valores de cualquier tipo, incluso mas diccionarios dentro

#Se accede a los elementos con corchetes:
#Añadir
eng2gal['one']='un'
eng2gal['two']='dos'
# Obtener

print(eng2gal['one'])


eng2gal={0:"Uno", '1':'Dos',2:'Tres'} #Son mutables y el indice pueden ser cualqueira no solo un numero

dict={"cero":"uno", "uno":"dos", "dos":"tres"}

print(dict['cero'])
print(dict.get('cero', 'No existe'))  #Permite un segundo parametro que nos lo envia cuando la clave no exite, si no se pone nada y no encuentra lo que busca, devuelve por defecto un none


# metodos:
len(dict) #Devuelve el numero de claves en el primer nivel (por si hubiera anidado)
# in(dict) --> 'cero' in dict --> true or false
print(dict.keys()) #Obtengo todas las claves
print(dict.values()) #Obtengo todas los valores
print(list(dict.values()))
print(type(dict.values())) #Devuelve un tipo dict_values o dict_keys por eso se pasa el constructor de lista

# diccionario1 = {'a': 1, 'b': 2}
# diccionario2 = {'b': 3, 'c': 4}

# dicionario1.update(dicionario2)

# print(dicionario1)  # Saida: {'a': 1, 'b': 3, 'c': 4}

#sobre escribe si tienen el mismo nombre

# dicionario = {'a': 1, 'b': 2, 'c': 3}
# valor_eliminado = mi_diccionario.pop('b')
# print("Valor eliminado:", valor_eliminado)  # Saida: 2
# print("Dicionario actualizado:", mi_diccionario)  # Salda: {'a': 1, 'c': 3}
# pop quita lo que le paemos que quite (lo retorna)

d = {"a": 1, "b": 2, "c": 3}

# Opción A: usando pop (devuelve el valor eliminado)
valor = d.pop("b")        # d = {"a": 1, "c": 3}, valor = 2

# Opción B: usando del (no devuelve nada)
del d["c"]                # d = {"a": 1}
#con del podemos elminar 

#ITERAR
#for clave in contadores, mejor hacerlo por claves

contadores = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for clave in contadores:
	print(clave, contadores[clave])
 
for key,value in contadores.item():
     print(key,value)
     
#Los diccionarios se utiliza para representar entidades

persoa = {
    "nome": "Ana",
    "idade": 30,
    "cidade": "Santiago"
}

#Como si fuese un objeto anidado de otro. Diccionario anidado en otro

estudante = {
    "nome": "Xoán",
    "idade": 22,
    "curso": "Enxeñaría Informática",
    "enderezo": {
        "rúa": "Rúa das Camelias",
        "cidade": "A Coruña",
        "código_postal": "15001"
    }
}
print(estudante["enderezo"]["cidade"]) #-> A Coruña

#Crear diccionarios en una linea:

# dic={nova_clave:novo_valor for elemento in iterable}
dic={elemento: len(elemento) for elemento in ["hola","que", "tal"]}
print(dic) #->se construye una clave valor que devolvera  el elemnto y su longitud "hola":4 "que": 3 "tal": 3


#Switch:
#Se utiliza con match y hace la misma funcionalidad, solo funciona de la version 3.10 para arriba.

# switch_dict = {
#     'a': "Opción A",
#     'b': "Opción B",
#     'c': "Opción C"
# }

# resultado = switch_dict(caso, default_case)--> resultado=switch_dict("x", "Caso por defecto")
# print(resultado) Asi se definia antes los switch
