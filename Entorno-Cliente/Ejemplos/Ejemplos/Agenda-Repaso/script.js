
const fechaInput = document.getElementById('fecha');
const nombreInput = document.getElementById('nombre');
const posicionError = document.getElementById('error')
const listaEventos = document.getElementById('listaEventos')
let arrayEventos = []

function formatearFecha(fecha) {

    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }
    return fecha.toLocaleDateString('es-ES', options);

}
function crearEvento() {
    let hoy = new Date();
    let fechaObjeto = fechaInput.valueAsDate;
    let nombre = nombreInput.value;


    if (!fechaObjeto) {
        posicionError.innerText = 'La fecha introducida no está completa'
        return false;
    }
    if (fechaObjeto.valueOf() < hoy.valueOf()) {
        posicionError.innerText = 'La fecha introducida no puede ser anterior a hoy'
        return false;
    }
    if (!nombre) {
        posicionError.innerText = 'El campo nombre no puede estar vacío';
        return false;
    }
    let fechaStr = formatearFecha(fechaObjeto)

    let evento = {
        id: fechaObjeto.valueOf(),
        fechaObj: fechaObjeto,
        fechaStr: fechaStr,
        nombre: nombre
    }
    arrayEventos.push(evento)
    renderizarEventos(arrayEventos)
    reiniciarEventos()
}
function reiniciarEventos() {
    nombreInput.value = ''
    fechaInput.value = '';
    fechaInput.focus()

}
function renderizarEventos(eventos) {
    eventos.sort((a, b) => a.id - b.id);
    let HTMLAInsertar = '';
    eventos.forEach(evento => {
        HTMLAInsertar += `<li class='evento'>${evento.fechaStr} <span>${evento.nombre}</span>`
        HTMLAInsertar += "<div class='botones-evento'>"
        HTMLAInsertar += `<button type='button' id='${evento.id}' onclick='modificarEvento(id)'>✏️</button>`
        HTMLAInsertar += `<button type='button' id='${evento.id}' onclick='eliminarEvento(id)'>✖️</button>`
        HTMLAInsertar += "</div> </li>"
    });
    listaEventos.innerHTML = HTMLAInsertar
}
function filtrarPor(rango) {
    let hoy=new Date();
    hoy.setHours(0,0,0,0);
    let fechaLimite=new Date(hoy)
    let arrayFiltrado=[]

    switch (rango) {
        case 'semana':
        fechaLimite.setDate(hoy.getDate()+7);  
            break;
        case 'mes':
        fechaLimite.setMonth(hoy.getMonth()+1)
            break;
        case 'año':
        fechaLimite.setYear(hoy.getFullYear()+1)   
            break;
        case 'todo':
            renderizarEventos(arrayEventos);
            return false;
        default:
            posicionError.innerText='No se puede filtrar por ese rango'
            break;
        }
        arrayFiltrado=arrayEventos.filter((evento)=>evento.fechaObj.valueOf()>=hoy.valueOf()&& evento.fechaObj.valueOf()<=fechaLimite.valueOf())
        renderizarEventos(arrayFiltrado)
}
function eliminarEvento(id) {
    let posicionArray=arrayEventos.findIndex((evento)=>evento.id==id);
    arrayEventos.splice(posicionArray,1);
    renderizarEventos(arrayEventos);

}

function modificarEvento(id) {
    let evento=arrayEventos.find((evento)=>evento.id==id);
    if(evento){
        fechaInput.valueAsDate=evento.fechaObj;
        nombreInput.value=evento.nombre;
        eliminarEvento(evento.id);
    }

}