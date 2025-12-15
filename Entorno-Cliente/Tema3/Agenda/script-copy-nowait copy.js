const errorOutput = document.getElementById('error');
const nombreInput = document.getElementById('nombre')
const fechaInput = document.getElementById('fecha')
const listadoEventos = document.getElementById('listaEventos')
const botonPrincipal = document.getElementById('añadir-evento')
let db;


function crearEvento() {

    if (botonPrincipal.textContent === 'Actualizar Evento') {
        botonPrincipal.innerText = 'Añadir evento'
        let id=Number(nombreInput.getAttribute('data-id'))

        cambiarEvento(id)

    } else {


        let nombreStr = nombreInput.value.trim();
        let fechaObj = fechaInput.valueAsDate
        let fechaHoy = new Date()
        if (!nombreStr || !fechaObj) {
            pintarError('Ambos campos deben estar completos')
            return false;
        }
        if (fechaObj < fechaHoy) {
            pintarError('La fecha tiene que ser posterior a hoy')
        }
        fechaHoy.toLocaleDateString('gl-ES')
        let evento = {
            id: fechaObj.valueOf(),
            nombre: nombreStr,
            fechaObj: fechaObj,
            fechaStr: fechaFormateada(fechaObj)
        }
        const transaccion = db.transaction(['Eventos'], 'readwrite')
        const almacenEventos = transaccion.objectStore('Eventos')
        const solicitudAdd = almacenEventos.add(evento)
        solicitudAdd.onsuccess = () => {
            console.log('Evento añadido')
            nombreInput.value = ''
            fechaInput.value = ''
            nombreInput.focus()

            cargarEventos()
        }
        solicitudAdd.onerror = () => {
            console.log('No ha sido posible añadir el evento')
            pintarError('No ha sido posible añadir el evento')
        }
    }
}

function cargarEventos() {
    const transaccion = db.transaction(['Eventos'], 'readonly')
    const almacenEventos = transaccion.objectStore('Eventos')
    const solicitud = almacenEventos.getAll()
    solicitud.onsuccess = () => {
        renderizarEventos(solicitud.result)
    }
    solicitud.onerror = () => {
        console.log('Ha habido un error guardando leyendo los eventos')
    }
}
function renderizarEventos(eventos) {
    listadoEventos.replaceChildren('')
    eventos.forEach(evento => {
        let idEvento = evento.id
        let li = document.createElement('li')
        li.classList.add('evento')
        let spanFechaStr = document.createElement('span')
        spanFechaStr.textContent = evento.fechaStr;
        let spanNombre = document.createElement('span')
        spanNombre.textContent = evento.nombre;
        let contenedorBtn = document.createElement('div')
        contenedorBtn.classList.add('botones-evento')
        let btnModificar = document.createElement('button')
        btnModificar.textContent = '✏️'
        let btnEliminar = document.createElement('button')
        btnEliminar.textContent = '❌'
        li.appendChild(spanNombre)
        li.appendChild(spanFechaStr)
        li.appendChild(contenedorBtn)
        btnModificar.addEventListener('click', (ev) => {
            ev.preventDefault()
            modificarEvento(idEvento)
        })
        btnEliminar.addEventListener('click', () => eliminarEvento(idEvento))
        contenedorBtn.appendChild(btnModificar)
        contenedorBtn.appendChild(btnEliminar)
        listadoEventos.append(li)
    });
}

function modificarEvento(id) {
    // if(!id){
    //     console.log('Error se ha recibido ID')
    //     return false;
    // }
    const transaccion = db.transaction(['Eventos'], 'readwrite')
    const almacen = transaccion.objectStore('Eventos')
    const solicitud = almacen.get(id)

    solicitud.onsuccess = () => {

        let evento = solicitud.result
        console.log('Evento localizado con exito')
        console.log(evento)
        nombreInput.value = evento.nombre
        fechaInput.valueAsDate = evento.fechaObj
        nombreInput.focus()
        botonPrincipal.innerText = 'Actualizar Evento'
        nombreInput.setAttribute('data-id', evento.id)



    }
    solicitud.onerror = () => {
        console.log('Ha habido un problema leyendo la base de datos')
    }
}

function eliminarEvento(id) {

    if (!id) {
        console.log('Error se ha recibido ID')
        return false;
    }
    const transaccion = db.transaction(['Eventos'], 'readwrite')
    const almacen = transaccion.objectStore('Eventos')
    const solicitud = almacen.delete(id)
    solicitud.onsuccess = () => {
        console.log('Evento eliminado con exito')
        cargarEventos()
    }
    solicitud.onerror = () => {
        console.log('Ha habido un problema leyendo la base de datos')
    }
}

function cambiarEvento(id){

    const transaccion=db.transaction(['Eventos'],'readwrite')
    const almacen=transaccion.objectStore('Eventos')
    
    let nombre=nombreInput.value.trim()
    let fechaObj=fechaInput.valueAsDate
    let evento={
        id:id,
        nombre:nombre,
         fechaObj: fechaObj,
            fechaStr: fechaFormateada(fechaObj)
    }
    const solicitud=almacen.put(evento)
    solicitud.onsuccess=()=>{
        console.log('Evento modificado satisfactoriamente')
        cargarEventos()
    }
    solicitud.onerror=()=>{
        console.log('No ha sido posible modificar el evento')
    }
    

}

function filtrarPor(tipo) {
    let hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    let fechaObjetivo = new Date();
    fechaObjetivo.setHours(0, 0, 0, 0);

    switch (tipo) {
        case 'semana':
            fechaObjetivo.setDate(hoy.getDate() + 7);

            break;

        case 'mes':
            fechaObjetivo.setMonth(hoy.getMonth() + 1);

            break;

        case 'año':
            fechaObjetivo.setFullYear(hoy.getFullYear() + 1);

            break;

        default:
             cargarEventos()
            return false;
            break;
    }
    let eventosFiltrados=[]
    const rangoFiltro=IDBKeyRange.bound(hoy,fechaObjetivo,true,true)

    const transaccion=db.transaction(['Eventos'],'readonly')
    const almacen=transaccion.objectStore('Eventos')
    const index=almacen.index('fechaObjIndice')
    const solicitud=index.openCursor(rangoFiltro)
    solicitud.onsuccess=()=>{
        let cursor=solicitud.result
        
        if(cursor){
            eventosFiltrados.push(cursor.value)
            console.log(eventosFiltrados)
            cursor.continue()
            renderizarEventos(eventosFiltrados)
        }else{
            console.log('Ya no hay más eventos')
        }
    }
    solicitud.onerror=()=>{
        console.log('Error recuperando eventos filtrados')
    }

}









function fechaFormateada(fecha) {
    options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }
    return fecha.toLocaleDateString('gl-ES', options)
}

function pintarError(text) {
    errorOutput.innerText = text

}
function crearBase() {
    let solicitudApertura = indexedDB.open('AgendaDB', 1)
    solicitudApertura.onerror = () => {
        console.log('No es posible abrir la base de datos')
    }
    solicitudApertura.onsuccess = () => {
        db = solicitudApertura.result
        cargarEventos()
        console.log('Base de datos abierta')
        console.log('Base comprobacion')

    }
    solicitudApertura.onupgradeneeded = () => {
        db = solicitudApertura.result
        if (!db.objectStoreNames.contains('Eventos')) {
            const almacenEventos = db.createObjectStore('Eventos', { keyPath: 'id' })
            almacenEventos.createIndex('fechaObjIndice','fechaObj',{unique:false})

        }
        console.log('Base de datos creada')
    }
}

document.addEventListener("DOMContentLoaded", () => crearBase())