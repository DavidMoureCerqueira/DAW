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

    // generar ID manualmente
    let txLectura = db.transaction(["videojuegos"], "readonly")
    let almacen = txLectura.objectStore("videojuegos")
    let reqContar = almacen.count()

    reqContar.onsuccess = () => {
        let nuevoID = reqContar.result + 1

        let txInsercion = db.transaction(["videojuegos"], "readwrite")
        let almacenInsercion = txInsercion.objectStore("videojuegos")

        let videojuego = {
            id: nuevoID,
            nombre: nombre,
            categoria: categoria
        }

        let reqInserccion = almacenInsercion.add(videojuego)
        reqInserccion.onsuccess = () => {
            console.log("Videojuego insertado:", videojuego)
            mostrarMensaje("videojuego guardado")
            iniciarTemporizadorCerrado()
        }
        reqInserccion.onerror = () => {
            console.log("Ha habido un error guardando el videojuego", nombre)
            mostrarMensaje("error guardando videojuego")
        }

    }
    reqContar.onerror = () => {
        console.log('No ha sido posible leer la base de datos')
    }
})
const engadirDatos = (datos) => {
    const transaccion = db.transaction(['nombreIndice'], 'readwrite');
    const almacenDatos = transaccion.objectStore('nombreIndice')
    almacenDatos.add(datos)
}

function mostrarMensaje(mensaje) {
    info.innerHTML += mensaje + '<br>'
}

function iniciarTemporizadorCerrado() {
    if (temporizador){
        clearInterval(temporizador)
    }
    let tiempoRestante = 10
     temporizador = setInterval(() => {
        console.log(`La base de datos se cerrará en ${tiempoRestante} segundos...`)
        
        tiempoRestante--;
        if (tiempoRestante < 0) {
            clearInterval(temporizador)
            if(db){
                
                db.close()
                db = null
                mostrarMensaje("Base de datos cerrada despues de 10 segundos de inactividad")
                console.log("Base de datos cerrada")
            }
        }
    }, 1000);
}
