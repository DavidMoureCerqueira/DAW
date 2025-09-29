

var nombre_global = "Soy global con var";
let nombre_global_let = "Soy global con let";
const nombre_global_const = "Soy global con const";

function ambitoFuncion() {
    var nombre_funcion = "Soy funcion con var";
    let nombre_funcion_let = "Soy funcion con let";
    const nombre_funcion_const = "Soy funcion con const";

    console.log("Dentro de la funcion");
    console.log(nombre_global);
    console.log(nombre_global_let);
    console.log(nombre_global_const);
    console.log(nombre_funcion);
    console.log(nombre_funcion_let);
    console.log(nombre_funcion_const);

    if (true) {
        var nombre_bloque = "Soy bloque con var";
        let nombre_bloque_let = "Soy bloque con let";
        const nombre_bloque_const = "Soy bloque con const";
        console.log("Dentro del bloque if");
        console.log(nombre_bloque);
        console.log(nombre_bloque_let);
        console.log(nombre_bloque_const);
    }

    console.log("Fuera del bloque pero en la funcion");
    console.log(nombre_bloque);
    // Si se crean en el bloque mueren en el bloque tanto let como const, pero var si que funciona fuera
    // salvo var que se declara a nivel de subfuncion
    // console.log(nombre_bloque_let); 
    // console.log(nombre_bloque_const);
}
// Nivel global, estamos fuera de la funcion
console.log("Fuera de la funcion");
console.log(nombre_global);
console.log(nombre_global_let);
console.log(nombre_global_const);

// No existen fuera de la funcion
// console.log(nombre_funcion);
// console.log(nombre_funcion_let);
// console.log(nombre_funcion_const);

ambitoFuncion()

