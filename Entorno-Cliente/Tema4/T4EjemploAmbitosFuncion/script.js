var global = "global";
console.log(global); // global
// Acceso a variable en ámbito fillo -> ERROR
// console.log(local1a); // ReferenceError
// Acceso a funcións fillas -> OK
funNivel1a();
// funNivel1b();
// Acceso a función neta -> ERROR
// funNivel2a(); // ReferenceError
function funNivel1a() {
    var local1a = "nivel1a";
    console.log(local1a); // nivel1a
    // Acceso a funcións fillas -> OK
    funNivel2a();
    funNivel2b();
    function funNivel2a() {
        var local2a = "nivel2a";
        console.log(local2a); // nivel2a
    }
    function funNivel2b() {
        var local2b = "nivel2b";
        console.log(local2b); // nivel2b
        // Acceso a variable en ámbito pai -> OK
        console.log(local1a); // nivel1a
        // Acceso a variable en ámbito irmán do pai -> ERROR
        // console.log(local1b); // ReferenceError
        // Acceso a variable en ámbito avó -> OK
        console.log(global); // global
        // Acceso a función irmá -> OK
        funNivel2a(); // nivel2a
    }
}



// ENCLOUSURES
console.log("ENCLOUSURES")
console.log("Los enclousures lo que hacen es que la primera vez ejecutan el codigo y DEVUELVEN EL RETURN DE LA FUNCION, por lo que al ejecutar la variable que se devuelve, se ejecuta solo la función devuelta")


var incrementar = (function () {
    var contador = 0;

    return function () { return ++contador; }
})();
incrementar();
incrementar();
console.log(incrementar()); // contador = 3 (só accesible a través da función)



const incrementar2 = (() => {
    var contador = 0;
    return () => {
        return ++contador
    }
})()
incrementar2();
incrementar2();
console.log(incrementar2());




// Esta función devolve outra función encargada de incrementar o contador.
function crearContador() {
    var contador = 0;
    return function () {
        contador++;
        return contador;
    }
}
// Ao gardar o resultado de executar a función "crearContador" nunha variable
// estamos a crear un closure que conterá a función devolta e máis o ámbito da
// función "crearContador" (iso é o que permite que non se "perda" a variable
// contador)
var incrementar = crearContador();
incrementar();
incrementar();
incrementar();