Al usar js en el head del main usar defer o async

Si no ponemos nada en el script de inserción del js: → La web intenta descargar todo al mismo tiempo, para evitarlo usamos:
**Primero html y despues js → defer**

<script sr=”javascript.js” defer></script>

**Descarga en paralelo pero si acaba antes el js lo ejecuta antes que el html → async**

Fundamentos de sintaxis:
js es Case sensitive
el ; no es necesario pero si recomendable
js ignora espacios y saltos de linea

//comentarios
/\* comentarios multilinea

dividir funciones, logica, variables

utilizar una descripcion de la funcion
/\*\*
_lo que hace
@param{number } a el primer numero
@param{number } b el segundo numero
@returns {number} la suma de a y b
_/
los IDE definen los tipos de las variable sen tiempo de ejecucion
cambia el tipo de la variable de manera dinamica

# Variables

**Declaracion**

_var_--> Tiene ambito global si se declara fuera de las funciones, y ambito local a la funcion dependiendo de donde se declare. --> Si se define una variable despues de usarla no da error son hoisted <<elevadas>>
No ofrece proteccion ante redeclaraciones accidentales

_let_ --> Es la que vamos a usar
Tiene ambito de bloque (si lo declaro en un bucle muere al acabar el bucle), igual con las funciones
let nombre;


_const_ --> No se puede redefinir y tiene un ambito de bloque
Los objetos y arrays pueden modificar internamente el valor de la const

El Tipado es dinamico, permitiendo cambiarlo en cualquier momento

Se utiliza el backtick para permitirnos utilizar las variables como si fuera un printf y ${variable} dolar antes de la variable

console.log(`algo ${nombre} y ${empleo}`)
console.log("algo "+ nombre +" y " +empleo)

# Tipos elementales

**String** --> Los saltos de linea, tabulaciones y \ es con \ invertida por delante
**Number**
let puntos= 24;
let media=74.25;
**BigInt**
let x=0997199254740991n;
**Boolean**

**Symbol** --> Se usan en objetos para ciertas propiedades de objetos que no interfieran con las de fuera

**undefined**

# Compuestos:
**arrays**

let modulos=["lo", "que", "sea"]
let modulos=new Array("lo", "que", "sea")

**objetos**
let estudiante={
    nombre:"Allen",
    apellido:"Carr",
    edad:50
}

**Funciones**

**null**

Identificar tippos --> **typeof**

Array.isArray()

innerHTML --> Introduce codigo o texto al html y hay que decirle en donde
document.getElementById("")

textContent --> ignora el html (etiquetas) y el css

innerText --> ignora la etiqueta html pero respeta el css

insertAdjacentText("","")--> no renderiza las etiquetas html. Utiliza dos parametros
primer parametro --> beforebegin, afterbegin, beforeend, afterend

beforebegin--> Antes de la etiqueta
afterbegin --> Despues de la etiqeuta de inicio
beforeend--> antes de que acabe la etiqueta
afterbegin--> Despues de que acabe el elemnto

insertAdjacentHTML("","")--> Es como el anterior con los mismos parametros pero renderizando las etiquetas

window tiene un metodo para hacer preguntas si y no window.confirm("pregunta")

ojo con ++x y x++

== compara el valor solo 3=='3' -->true
=== compara valor y tipo 3==='3' --> false


# Operado por propagacion o spread --> 

Se utiliza para hacer combinaciones de arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinado = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

Copia de arrays: permite realizar unha copia __«por valor»__ dun array.
let arr = [1, 2, 3];
let copia = [...arr]; // [1, 2, 3]

Combinar ou estender obxectos: permite unir dous ou máis obxectos, combinando as
propiedades de nome distinto e __sobreescribindo__ as compartidas en orde de lectura.
let obx1 = { a: 1, b: 2 };
let obx2 = { a: 5, c: 3, d: 4 };
let combinado = { ...obx1, ...obx2 }; // { a: 5, b: 2, c: 3, d: 4 }

Copia de obxectos: permite realizar unha copia __«por valor»__ dun obxecto.
Utiliza diferente direcciones de memoria
let obx = { a: 1, b: 2 };
let copia = { ...obx }; // { a: 1, b: 2 }

# Funcion flecha
Como operador de resto (rest operator): permite convertir nun array o conxunto de
parámetros pasados a unha función.
function suma(...numeros) {
 return numeros.reduce((total, actual) => total + actual, 0);
}

Va sumando seguido y empezando en el indice 0,
Funciona asi por culpa del reduce (Dentro deberia ir el nombre de la funcion con sus parametros pero se puede omitir)=> lo que hace y donde empieza
suma(1, 2, 3, 4); // 10


● Desestruturar arrays: permite asignar nome ás distintas partes dun array por
eliminación, coma se de variables se tratase.
let [a, b, ...resto] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(resto); // [3, 4, 5]

● Desestruturar obxectos: permite asignar nome ás distintas partes dun obxecto por
eliminación, coma se de variables se tratase.
let { x, y, ...resto } = { x: 1, y: 2, z: 3, a: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(resto); // { z: 3, a: 4 }


# EXAMEN

# Orden de comparacion
()
! ->not
** ->potencia
/ * %
+ -
Comparacion
< > <= >= 
== ===
logica 
|| &&


#Map y Set

Map->   Es muy parecido a un objeto ya que tambien se identifica por clave-valor, pero en un objeto las claves son strings, hasta las propias claves pueden ser objetos con Map, es como un diccionario de Python

Set->   Coleccion de elementos sin clave, cada valor solo puede aparecer una vez, como un conjunto de Python

#for

forin declaras un index for (index in personas)
forof declaras el objeto del tipo que recorrers for(persona in personas)


#Arrays

Se pueden crear con los valores
let array=[1,2,3,4,5]
let array=new Array()
let array=new Array(1,2,3,4,5)
Para acceder a los elementos array[indice]
El ultimo: array[array.length-1]

Recorrer
while
for
for in
for of

Eliminar:
array[indice]=null; --> Lo elimina pero sigue existiendo la posicion y por eso tiene la misma longitud
delete array[2] --> Hace como el anterior pero en vez de en esa posicion dar null da undefined
Lo recomendable es usar --> array.splice() -->extrae un sub-array formado por los elementos indicados

#Metodos de arrays
array.pop() -->elimina el ultimo y lo devuelve
array.push() --> Introduce al finla
array.shift() --> elimina el primer elemento y lo devuelve
array.unshift()--> añade al primer elemento
array.slice(posIni, posFin)--> Crea un array partiendo de un arraqy creado, no modifica el array original
array.splice() -->Elimina elementos que coincidan con el de un array y permite añadir nuevos
array.concat(): une dos o más arrays devolviendo el resultado tambien en forma de array.
array.includes(): determina se o array inclúe un valor concreto. busca el elemento entero
array.indexOf(): procura no array o elemento indicado e devolve a súa posición (ou -1 se non
o atopa). Pódese indicar, opcionalmente, unha posición de inicio da procura.
array.lastIndexOf(): procura no array o elemento indicado comezando polo final ou,
opcionalmente, nunha posición indicada ad hoc. Devolve a súa posición do elemento (ou -1
se non o atopa).
array.toString()
array.join() hace lo mismo que toString pero eliges con que lo une
array.sort() ordena el array --> No ordena numeros como numericos para que orden numericamento--> array.sort(function(a,b){return a-b}) de menor a mayor
array.sort(function(a,b){return b-a}) de mayor a menor a la function podria ponersele nombre o poner funcion de flecha si es un objeto habria que hacer a.id, b.id porque a y b son elementos del array
array.reverse() invierte el orden de los elementos de un array
array.keys() devuelve un objeto Array iterator
array.isArray() devuelve true o false si es array o no
array.some() comprueba si alguno de los elementos del array y le hace una prueba, para comprobar si la cumple devolver true or false 
letras.some(function(busca) {return busca.includes("m")}) podria ser con funcion de flecha
letras.every(function(busca) {return busca.lenght >4}) Solo da true si todas dan true, si una no da true, da false
let resultadoFind = letras.find(function (busca) { return busca.startsWith("d") }) //Devuelve el primer elemento que cumple la condicion
findIndex() como fin() pero devuelve el indice 
let resultadoFilter = letras.filter(function (busca) { return busca.length % 2 == 0 }) //DFiltra por una condicion
let resultadoFilterEliminar = letras.filter(function (busca) { return busca != "epsilon" }) //Fitlra por una condicion y crea un nuevo array sin ese que no coincide
array.map() crea una nuevo array que pasa cada elemento a una funcion para que lo transforme
let resultadoMap = letras.map(busca => {busca + '('+busca.length+')'})
forEach()
letras.forEach(function (busca) { return numLetras += busca.length })
console.log(numLetras)

reduce() reduce los valores del array a uno solo apliucando una funcion pasado como parametro a cada elemento de izquierda a derecha. El valor devuelto por la funcion se guarda en un acumulador, necesita la inicializacion de la variable suma

reduceRight() hace lo mismo pero de derecha a izquierda ejemplo en T2Ex23

# Funciones
window forma parte del BOW elemento del navegador

decodeURI(): decodifica, coma o seu nome indica, un URI (Uniform Resource Identifier)
fornecido coma string substituíndo as secuencias de escape UTF-8 (excepto as
correspondentes con: , / ? : @ & = + $ #) propias dos navegadores web polos
caracteres correspondentes

decodeURIComponent(): decodifica todo o ou parte dun URI fornecido coma string
substituíndo as secuencias de escape UTF-8 (incluida as correspondentes con: , / ? :
@ & = + $ #) propias dos navegadores web polos caracteres correspondentes..

eval(): avalía e executa o código proporcionado como string no caso de que sexa
código JS válido

isFinite(): determina se un valor é un número finito. Polo tanto, devolve false se o
valor é +Infinity, -Infinity ou NaN. En calquera outro caso devolve true.

isNaN(): determina se un valor non é un número legal devolvendo true/false.

//Number(): converte o valor dun obxecto a un número. Devolve NaN se non é válido.

 parseFloat(): determina se o primeiro caracter dunha string é un número (omitindo
espacios en branco ao principio). Nese caso colle caracteres até que atope un non
numérico e convérteo nun número decimal. Se non atopa ningún caracter numérico
devolve NaN.
