const info = document.getElementById('info')
const nombreInput = document.getElementById('nombre-input')
const categoriaInput = document.getElementById('categoria-input')
const insertar = document.getElementById('insertar')
let db;
let temporizador


document.getElementById('crear-base').addEventListener('click', () => {
    let solicitud = indexedDB.open('videojuegosDB', 1)

    //Hay dos formas de hacer con el evento.target.result y con solicitud.result
    solicitud.onsuccess = (evento) => {
        db = evento.target.result

        console.log('APERTURA', db)
        mostrarMensaje("Base de datos abierta correctamente")
        iniciarTemporizadorCerrado()

    }
    solicitud.onupgradeneeded = () => {
        db = solicitud.result;
        if (!db.objectStoreNames.contains('videojuegos')) {
            // Creamos la fila id
            const almacenNombre = db.createObjectStore('videojuegos', { keyPath: 'id' })
   
            // almacenNombre.createIndex('nombreIndice', 'nombre', { unique: false });
            console.log('CREACIÓN', db)
            mostrarMensaje('Almacén videojuegos creado en BD')

        } else {
            console.log("Almacen videojuegos ya existe")
            info.innerHTML("Almacen videojuegos ya existe")
        }
    }
    // Es como un eventListener('onerror')
    // Antes va 
    solicitud.onerror = () => {
        console.error('No se puedo abrir la base de datos')
    }
})
//insertar
insertar.addEventListener('click', () => {
    if (!db) {
        mostrarMensaje("Error al abrir la base de datos")
        alert("Error al abrir la base de datos")
    }
    let nombre = nombreInput.value.trim()
    let categoria = categoriaInput.value.trim()
    if (!nombre || !categoria) {
        mostrarMensaje("Por favor, introuce ambos campos antes de insertar.")
        return false
    }


    let txLectura = db.transaction(["videojuegos"], "readonly")
    let almacen = txLectura.objectStore("videojuegos")
    let reqContar = almacen.count()
    reqContar.onsuccess = () => {
        let nuevoID = reqContar.result + 1
        let txInsercion = db.transaction("videojuegos", "readwrite")
        let almacenInsercion = txInsercion.objectStore("videojuegos")
        let videojuego = {
            id: nuevoID,
            nombre: nombre,
            categoria: categoria
        }
        let reqInserccion=almacenInsercion.add(videojuego)
        reqInserccion.onsuccess=()=>{
            console.log("Videojuego", nombre," insertado")
            mostrarMensaje("videojuego guardado")
            iniciarTemporizadorCerrado()
        }
        reqInserccion.onerror=()=>{
            console.log("Ha habido un error guardando el videojuego",nombre)
            mostrarMensaje("error guardando videojuego")
        }
    }

})
const engadirDatos = (datos) => {
    const transaccion = db.transaction(['nombreIndice'], 'readwrite');
    const almacenDatos = transaccion.objectStore('nombreIndice')
    almacenDatos.add(datos)
}

function mostrarMensaje(mensaje) {
    info.innerHTML += mensaje+'<br>'
}

function iniciarTemporizadorCerrado(){
    temporizador=10
    let idInterval=setInterval(() => {
        mostrarMensaje(temporizador)
        temporizador--;
        if(temporizador<0){
            mostrarMensaje("Base de datos cerrada")
            db.close()
            db=null
            clearInterval(idInterval)
        }
    }, 1000);
}
