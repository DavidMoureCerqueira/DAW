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