const info = document.getElementById('info')
let db;
const persona = {
    id: 2,
    nombre: 'Alfredo'
}
const persona2 = {
    id: 3,
    nombre: 'Paco'
}
const persona3 = {
    id: 4,
    nombre: 'Maria'
}

document.getElementById('crear-base').addEventListener('click', () => {
    let solicitud = indexedDB.open('VideoJuego', 1)

    //Hay dos formas de hacer con el evento.target.result y con solicitud.result
    solicitud.onsuccess = (evento) => {
        db = evento.target.result
        
        console.log('APERTURA', db)
        info.innerHTML = "Base de datos abierta correctamente"

        engadirDatos(persona)
        engadirDatos(persona2)
        engadirDatos(persona3)
    }
    solicitud.onupgradeneeded = () => {
        db = solicitud.result;
        if (!db.objectStoreNames.contains('nombreIndice')) {
            // Creamos la fila id
            const almacenNombre = db.createObjectStore('nombreIndice', { keyPath: 'id' })
            // Y asociamos nombre a id
            almacenNombre.createIndex('nombreIndice', 'nombre', { unique: false });
            console.log('CREACIÓN', db)
            info.innerHTML = 'Almacén videojuegos creado en BD'
            almacenNombre.add({ id: 1, nombre: 'David' })
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

const engadirDatos = (datos) => {
    const transaccion = db.transaction(['nombreIndice'], 'readwrite');
    const almacenDatos = transaccion.objectStore('nombreIndice')
    almacenDatos.add(datos)
}

