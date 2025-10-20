//Crear funcion con constructor //El último es el código


let saludar = new Function('nombre', "console.log('Hola '+ nombre)");
saludar("Juan");

let sumar = new Function('num1', 'num2', "return num1+num2")
console.log(sumar(2, 4));
console.log(sumar('2', '4'));

//Ejercicio calcular media de notas con new Function usando reduce
//Reduce recibe un valor al que quieres reducir y los diferentes valores  que tiene el array y el valor inicial de la variable a la que se reduce
let notas = [8, 9, 0, 4, 6, 7, 8]


let media = new Function(
    "notas",
    " let total=notas.reduce(function(t,nota){return t+nota},0); \n" +
    "return total/notas.length;"
);
console.log(media(notas));

//Hasta donde llega el ambito de una variable global
//No la coge el constructor new Function


// EJEMPLO--------------------------------------------------------------------------------------> EXAMEN 
//Da error porque el constructor no accede a variables globales
// let valorExterno = 10;

// let mostrarValor = new Function("console.log(valorExterno)")
// mostrarValor()

//mostrar con un constructor new function si un numero es par o impar

let esPar = new Function("numero", "if(numero%2==0){console.log('Es par')}else{console.log('Es impar')}");

esPar(5)
esPar(8)