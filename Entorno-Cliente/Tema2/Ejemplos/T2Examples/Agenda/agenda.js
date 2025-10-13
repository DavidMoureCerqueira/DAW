//VARIABLES DEL DOM
const posicionLista = document.querySelector("#listaEventos")
//const posicionError = document.querySelector("#error")
const posicionError = document.getElementById("error")

function crearEvento() {
    console.log("hola")

    let fechaEventoInput = document.querySelector("#fecha");
    // let nombreEventoInput = document.getElementById("nombre");
    let nombreEventoInput = document.querySelector("#nombre");
    let fechaEvento = new Date(fechaEventoInput.value);
    let nombreEvento = nombreEventoInput.value;
    let fechaActual = new Date();
    if (isNaN(fechaEvento.getDay()) && isNaN(fechaEvento.getMonth()) && isNaN(fechaEvento.getFullYear())){
        console.log("El formato de la fecha no es valida")
    }
    
    if (fechaActual > fechaEvento) {
        posicionError.innerHTML = "La fecha del evento es anterior a la actual"
        console.log("Solo fechas validas")
        return false
    }
    function pintarEventos(){
        
    }
    console.log(nombreEvento);
}

