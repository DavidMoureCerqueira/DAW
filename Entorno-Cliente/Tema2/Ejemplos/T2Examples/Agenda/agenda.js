
//VARIABLES DEL DOM
const posicionLista = document.querySelector("#listaEventos")
//const posicionError = document.querySelector("#error")
const posicionError = document.getElementById("error")
const posicionEventos = document.querySelector(".listaEventos")

    let fechaEventoInput = document.querySelector("#fecha");

    // let nombreEventoInput = document.getElementById("nombre");
    let nombreEventoInput = document.querySelector("#nombre");

let eventos = []


//Opciones fecha
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}


function crearEvento() {

    let fechaEvento = new Date(fechaEventoInput.value);

    let nombreEvento = nombreEventoInput.value;

    let fechaActual = new Date();


    // Validaciones
    if (isNaN(fechaEvento.getDay()) || isNaN(fechaEvento.getMonth()) || isNaN(fechaEvento.getFullYear())) {

        posicionError.innerHTML = "La fecha no esta completa y por lo tanto no es válida"
        return false;
    }


    if (fechaActual > fechaEvento) {
        posicionError.innerHTML = "La fecha del evento es anterior a la actual"
        console.log("Solo fechas validas")
        return false
    }

    /*Crear objeto*/
    let evento = {
        id: fechaEvento,
        nombre: nombreEvento
    };


    /*Añadir array*/
    eventos.push(evento);
    pintarEventos(eventos);
    console.log(evento.nombre)


}

function pintarEventos(eventos) {
eventos.sort((a,b)=>a.id-b.id)
    posicionEventos.innerText = '';
    for (let evento of eventos) {


        posicionEventos.insertAdjacentHTML('beforeend', `<li class='evento'> <div>${(evento.id).toLocaleDateString('gl-ES', options)}</div>  <div>${evento.nombre}</div> <button type='button' id='${evento.id}' onClick="modificarEvento(id)">✏️</button><button type='button' id='${evento.id}' onClick="eliminarEvento(id)">✖️</button></li>`)
    }

}

const todos = () => pintarEventos(eventos);

function proximaSemana() {
    let eventosProximaSemana = [];
    let fechaActual = new Date();

    /*Temporal*/
    for (let evento of eventos) {

        /*Dias*/

        let fechaEventoSinHoras = new Date(evento.id);
        let fechaActualSinHoras = new Date(fechaActual)
        fechaActualSinHoras.setHours(0, 0, 0, 0);
        fechaEventoSinHoras.setHours(0, 0, 0, 0);

        let diferenciaDias = (fechaEventoSinHoras - fechaActualSinHoras) / (1000 * 60 * 60 * 24)





        if (diferenciaDias >= 7 && diferenciaDias <= 14) {

            eventosProximaSemana.push(evento)
        }
    }
    pintarEventos(eventosProximaSemana);
}
function proximoMes() {
    let eventosProximoMes = [];
    let fechaActual = new Date();
    for (let evento of eventos) {
        //Meses
        let mesFecha = evento.id.getMonth();
        let mesActual = fechaActual.getMonth();
        let diferenciaMes = mesFecha - mesActual

        //Años
        let añoFecha = evento.id.getFullYear();
        let añoActual = fechaActual.getFullYear();
        let diferenciaAños = añoFecha - añoActual;

        if ((diferenciaMes == 1 && diferenciaAños == 0) || (diferenciaAños == 1 && diferenciaMes == -11)) {
            eventosProximoMes.push(evento);
        }
    }
    pintarEventos(eventosProximoMes)

}
function proximoAño() {
    let eventosProximoAño = [];
    let fechaActual = new Date();
    for (let evento of eventos) {
        let añoFecha = evento.id.getFullYear();
        let añoActual = fechaActual.getFullYear();
        let diferenciaAños = añoFecha - añoActual;

        if (diferenciaAños == 1) {
            eventosProximoAño.push(evento);
        }
    }
    pintarEventos(eventosProximoAño)
}

function eliminarEvento(id){
    let eventoSinEliminado=eventos.filter((evento)=>evento.id!=id);
    eventos=eventoSinEliminado
    pintarEventos(eventos)
    
}

function modificarEvento(id){
    let evento={}
    for (let eventoFor of eventos){
        if(eventoFor.id==id){
            evento=eventoFor
        }
    }
    eliminarEvento(id);
    fechaEventoInput.value=id;
    nombreEventoInput.value='hola'

}



