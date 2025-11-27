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
        // iniciarTemporizadorCerrado()

    }
    solicitud.onupgradeneeded = () => {
        db = solicitud.result;
        if (!db.objectStoreNames.contains('videojuegos')) {
            // Creamos la fila id
            const almacenNombre = db.createObjectStore('videojuegos', { keyPath: 'id', autoIncrement:true })

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

        let videojuego = {
            nombre: nombre,
            categoria: categoria
        }
        let txInsercion=db.transaction(["videojuegos"],"readwrite")
        let almacenInsercion=txInsercion.objectStore("videojuegos")
        let reqInserccion = almacenInsercion.add(videojuego)
        reqInserccion.onsuccess = () => {
            console.log("Videojuego insertado:", videojuego)
            mostrarMensaje("videojuego guardado")
            // iniciarTemporizadorCerrado()
        }
        reqInserccion.onerror = () => {
            console.log("Ha habido un error guardando el videojuego", nombre)
            mostrarMensaje("error guardando videojuego")
        }

    })   
 


function mostrarMensaje(mensaje) {
    info.innerHTML += mensaje + '<br>'
}

const listar=document.getElementById('listar')

listar.addEventListener('click',()=>{
    if(!db){
        console.log('No es posible acceder a la base de datos')
        mostrarMensaje('No es posible acceder a la base de datos')
        return false
    }
    const transaccion=db.transaction(['videojuegos'],'readonly')
    const almacenVideojuegos=transaccion.objectStore('videojuegos')
    const solicitudLectura=almacenVideojuegos.openCursor()
    solicitudLectura.onsuccess=()=>{
        let lectura=solicitudLectura.result
        if(lectura){
            mostrarListado(`${lectura.value.id}  ${lectura.value.nombre}  ${lectura.value.categoria}`),
            console.log(lectura.value.id, lectura.value.nombre, lectura.value.categoria),
            lectura.continue()
        }else{
            console.log('Acabó la lectura')
        }
    }
    solicitudLectura.onerror=()=>{
        console.log('Ha habido un error en la lectura')
        mostrarMensaje('Ha habido un error en la lectura')
    }

})
function mostrarListado(text){
    document.getElementById('listado').innerHTML+=text+'<br>'
}

document.getElementById('buscarID').addEventListener('click',()=>{
    if(!db){
        console.log('No es posible acceder a la base de datos')
        mostrarBuscado('No es posible acceder a la base de datos')
        return false
    }
    const transaccion=db.transaction(['videojuegos'], 'readonly')
    const almacenDatos=transaccion.objectStore('videojuegos')
    let id=document.getElementById('leerID').value
    
    if(id){

        let solicitudVideojuego=almacenDatos.get(Number(id))
        solicitudVideojuego.onsucess=()=>{
            if(solicitudVideojuego.result){
                
                let videojuego=solicitudVideojuego.result
                console.log(videojuego)
                mostrarBuscado(videojuego.nombre)
            }else{
                mostrarBuscado('No existe un videojuego con ese id')
            }
        }
        solicitudVideojuego.onerror=()=>{
            mostrarMensaje('Error leyendo por ID')
            console.log('Error leyendo por ID')
        }
    }else{
        mostrarMensaje('No ha introducido un ID')
        console.log('No ha introducido un ID')
    }

})



function mostrarBuscado(text){
    document.getElementById('buscado').innerText=text
}



















// function iniciarTemporizadorCerrado() {
//     if (temporizador){
//         clearInterval(temporizador)
//     }
//     let tiempoRestante = 10
//      temporizador = setInterval(() => {
//         console.log(`La base de datos se cerrará en ${tiempoRestante} segundos...`)
        
//         tiempoRestante--;
//         if (tiempoRestante < 0) {
//             clearInterval(temporizador)
//             if(db){
                
//                 db.close()
//                 db = null
//                 mostrarMensaje("Base de datos cerrada despues de 10 segundos de inactividad")
//                 console.log("Base de datos cerrada")
//             }
//         }
//     }, 1000);
// }



