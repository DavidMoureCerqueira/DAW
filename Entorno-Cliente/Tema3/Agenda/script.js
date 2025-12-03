


let posicionError = document.getElementById('error');

let posicionEventos = document.getElementById('listaEventos');
let posicionFecha = document.getElementById('fecha');
let posicionNombre = document.getElementById('nombre');

let listadoEventos = [];
let db

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

    if (listadoEventos.some((evento) => evento.nombre == nombre)) {
        posicionError.innerText = "ERROR! Ya hay un evento con ese nombre"
        return false;
    }

    // if (listadoEventos.some((evento) => evento.fechaStr == formatearFecha(fechaEvento))) {
    //     posicionError.innerText = "ERROR! Ya hay un evento con esa fecha"
    //     return false;
    // }


    /*------Creacion objeto------------ */
    let evento = {
        id: fechaActual.valueOf(),
        fechaStr: formatearFecha(fechaEvento),
        fechaObj: fechaEvento,
        nombre: nombre
    }

    listadoEventos.push(evento);

    const transaccion = db.transaction(['Eventos'], 'readwrite')
    const almacenar = transaccion.objectStore('Eventos')
    
    const solicitudAlmacenar = almacenar.add(evento)
    solicitudAlmacenar.onsuccess = () => {
        renderizarEventos(listadoEventos)
    }
    solicitudAlmacenar.onerror = () => {
        console.error('Error en la lectura de la base de datos')
        alert('Error en la lectura de la base de datos')
        return false
    }



    posicionFecha.valueAsDate = null;
    posicionNombre.value = '';
    posicionNombre.focus();
    renderizarEventos(listadoEventos)


}

function renderizarEventos(eventos) {

    eventos.sort((a, b) => a.fechaObj.valueOf() - b.fechaObj.valueOf())

    let htmlAInsertar = ''
    eventos.forEach(evento => {
        htmlAInsertar += `<li class='evento' id='${evento.id}' ><div>${evento.fechaStr}</div> <div>${evento.nombre}</div>`
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
           
            break;

        default:
             renderizarEventos(listadoEventos)
            return false;
            break;
    }
const rangoFiltro=IDBKeyRange.bound(hoy,fechaObjetivo,false,true)
try{

    const tx=db.transaction(['Eventos'],'readonly')
    const store=tx.objectStore('Eventos')
    const index=store.index('fechaObjIndice')
    const solicitud=index.openCursor(rangoFiltro)
}

solicitud.onsuccess=()=>{
    const cursor=solicitud.result
    if(cursor){
        // eventosFiltrados.push(cursor.value)
        //cursor.continue()
    }
}

    let eventosAImprimir = listadoEventos.filter((evento) => {
        if (evento.fechaObj.valueOf() > hoy.valueOf() && evento.fechaObj.valueOf() < fechaObjetivo.valueOf()) {
            return evento
        }

    })
    renderizarEventos(eventosAImprimir)
}

function eliminarEvento(idString) {

    if(!db){
        alert('La base de datos esta cerrada')
        return false
    }
    if(!idString || isNaN(idString)){
        alert('No ha introducido un carácter válido o esta vacío')
    }
    let id=Number(idString)
    const transaccion=db.transaction(['Eventos'],'readwrite')
    const almacenEventos=transaccion.objectStore('Eventos')
    const solicitudEliminar=almacenEventos.delete(id)
    solicitudEliminar.onsuccess=()=>{
        
        listadoEventos = listadoEventos.filter((evento) => evento.id != id);
        renderizarEventos(listadoEventos);
    }
    solicitudEliminar.onerror=()=>{
        alert('Ha habido un error en la eliminación.')
    }



}
function modificarEvento(idString) {

    //Utilizar un paso intermedio para poder hacer la conversion cambiando el texto al boton etc...

    if(!db){
        alert('La base de datos está cerrada')
        return false
    }
    if(!idString || isNaN(idString)){
        alert('No ha introducido un carácter válido o está vacío')
        return false
    }
    let id=Number(idString)

    const transaccion=db.transaction(['Eventos'],'readwrite')
    const almacen=transaccion.objectStore('Eventos')
    const solicitudRecogerID=almacen.get(id)
    solicitudRecogerID.onsuccess=()=>{
        
        let evento = listadoEventos.find((evento) => evento.id == id);
        posicionFecha.valueAsDate = evento.fechaObj;
        posicionNombre.value = evento.nombre
        eliminarEvento(id);
    }
    solicitudRecogerID.onerror=()=>{
        alert('No ha sido posible modificar el evento')
    }




}

function crearBaseDatos() {
    let solicitud = indexedDB.open('Agenda', 1)

    solicitud.onerror = () => {
        console.log('No se puede abrir la base de datos')
        alert('No se puede abrir la base de datos')
    }
    solicitud.onsuccess = () => {
        db = solicitud.result
        const transaccion=db.transaction(['Eventos'],'readonly')
        const almacenDatos=transaccion.objectStore('Eventos')
        const solicitudLectura=almacenDatos.getAll()
        solicitudLectura.onsuccess=()=>{
            listadoEventos=solicitudLectura.result
            renderizarEventos(listadoEventos)
        }
        solicitudLectura.onerror=()=>{
            console.log('No ha sido posible leer la base de datos')
        }

        console.log('APERTURA', db)
    }
    solicitud.onupgradeneeded = () => {
        db = solicitud.result
        if (!db.objectStoreNames.contains("Eventos")) {

            const almacenEventos = db.createObjectStore('Eventos', { keyPath: 'id', autoIncrement: true })
            almacenEventos.createIndex('fechaObjIndice', 'fechaObj', { unique: false })
        }
    }
}

function obtenerListado() {
    const transaccion = db.transaction(['Eventos'], 'readwrite')
    const almacenar = transaccion.objectStore('Eventos')
    const solicitud = almacenar.getAll()
    solicitud.onsuccess = () => {

        return solicitud.result
    }
    solicitud.onerror = () => {
        console.error('Error en la lectura de la base de datos')
        alert('Error en la lectura de la base de datos')
        return false
    }

}

document.addEventListener('DOMContentLoaded', () => {
    crearBaseDatos();
})