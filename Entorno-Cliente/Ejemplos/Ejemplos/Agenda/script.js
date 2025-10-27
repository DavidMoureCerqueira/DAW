


let posicionError = document.getElementById('error');

let posicionEventos = document.getElementById('listaEventos');
let posicionFecha = document.getElementById('fecha');
let posicionNombre = document.getElementById('nombre');

let listadoEventos = [];

function formatearFecha(fecha) {
    options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    return fecha.toLocaleDateString('es-ES', options)

}

function crearEvento() {


    let fechaEvento = posicionFecha.valueAsDate;
    let nombre = posicionNombre.value.trim();
    let fechaActual = new Date()


    /*---------------Validaciones------------*/

    if (!fechaEvento) {
        posicionError.innerText = "ERROR! La fecha no tiene un valor correcto"
        return false;
    }

    if (!nombre) {
        posicionError.innerText = "ERROR! El nombre no tiene un valor correcto"
        return false;
    }
    
    if (fechaEvento < fechaActual) {
        posicionError.innerText = "ERROR! La fecha introducida es anterior a la actual"
        return false;
    }

    if(listadoEventos.some((evento)=>evento.nombre==nombre)){
        posicionError.innerText = "ERROR! Ya hay un evento con ese nombre"
        return false;
    }
    
    if(listadoEventos.some((evento)=>evento.fechaStr==formatearFecha(fechaEvento))){
        posicionError.innerText = "ERROR! Ya hay un evento con esa fecha"
        return false;
    }


    /*------Creacion objeto------------ */
    let evento = {
        id: fechaActual.valueOf(),
        fechaStr: formatearFecha(fechaEvento),
        fechaObj: fechaEvento,
        nombre: nombre
    }

    listadoEventos.push(evento);


    posicionFecha.valueAsDate=null;
    posicionNombre.value='';
    posicionNombre.focus();
    renderizarEventos(listadoEventos)
}

function renderizarEventos(eventos) {

    eventos.sort((a, b) => a.fechaObj.valueOf() - b.fechaObj.valueOf())

    let htmlAInsertar = ''
    eventos.forEach(evento => {
        htmlAInsertar += `<li class='evento'><div>${evento.fechaStr}</div> <div>${evento.nombre}</div>`
        htmlAInsertar += `<div class='botones-evento'> <button type='button' id='${evento.id}' onclick='modificarEvento(id)'>✏️</button>`
        htmlAInsertar += `<button type='button' id='${evento.id}' onclick='eliminarEvento(id)'>✖️</button></div>`
        htmlAInsertar += '</li>'
    });

    posicionEventos.innerHTML = htmlAInsertar;

}

function filtrarPor(tipo) {
    let hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    let fechaObjetivo = new Date();
    fechaObjetivo.setHours(0, 0, 0, 0);

    switch (tipo) {
        case 'semana':
            fechaObjetivo = fechaObjetivo.setDate(hoy.getDate() + 7);
    
            break;

        case 'mes':
            fechaObjetivo = fechaObjetivo.setMonth(hoy.getMonth() + 1);

            break;

        case 'año':
            fechaObjetivo = fechaObjetivo.setFullYear(hoy.getFullYear() + 1);

            break;

        case 'todo':
            renderizarEventos(listadoEventos)
            return false;
            break;

        default:
            break;
    }
    let eventosAImprimir = listadoEventos.filter((evento) => {
        if(evento.fechaObj.valueOf() > hoy.valueOf() && evento.fechaObj.valueOf() < fechaObjetivo.valueOf()){
            return evento
        }

    })
    renderizarEventos(eventosAImprimir)
}

function eliminarEvento(id) {

    listadoEventos=listadoEventos.filter((evento)=>evento.id!=id);
    renderizarEventos(listadoEventos);
    

}
function modificarEvento(id) {
    let evento=listadoEventos.find((evento)=>evento.id==id);
    posicionFecha.valueAsDate=evento.fechaObj;
    posicionNombre.value=evento.nombre
    eliminarEvento(id);

}