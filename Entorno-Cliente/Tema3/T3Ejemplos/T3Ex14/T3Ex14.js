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
            almacenNombre.createIndex('nombreIndice', 'nombre',{unique:false})
            almacenNombre.createIndex('categoriaIndice', 'categoria', { unique: false });
            console.log('CREACIÓN', db)
            mostrarMensaje('Almacén videojuegos creado en BD')

        } else {
            console.log("Almacen videojuegos ya existe")
            mostrarMensaje("Almacen videojuegos ya existe")
        }
    }
    // Es como un eventListener('onerror')
    // Antes va 
    solicitud.onerror = () => {
        console.error('No se puedo abrir la base de datos')
    }
})

insertar.addEventListener('click', () =>insertarJuego() )   
 
function insertarJuego(){
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
            listarVideojuegos()
            // iniciarTemporizadorCerrado()
        }
        reqInserccion.onerror = () => {
            console.log("Ha habido un error guardando el videojuego", nombre)
            mostrarMensaje("error guardando videojuego")
        }

    }

function mostrarMensaje(mensaje) {
    info.innerHTML += mensaje + '<br>'
}

const listar=document.getElementById('listar')

listar.addEventListener('click',()=>listarVideojuegos())

function listarVideojuegos(campo){
    if(!db){
        console.log('No es posible acceder a la base de datos')
        mostrarMensaje('No es posible acceder a la base de datos')
        return false
    }
    const transaccion=db.transaction(['videojuegos'],'readonly')
    const almacenVideojuegos=transaccion.objectStore('videojuegos')
    let cursor;
    if(campo==="nombre"){
        let indice=almacenVideojuegos.index("nombreIndice")
        cursor=indice.openCursor()
    }else if(campo==="categoria"){
        let indice=almacenVideojuegos.index("categoriaIndice")
        cursor=indice.openCursor()
        
    }else{
        cursor=almacenVideojuegos.openCursor()
    }





    

    resetearListado()
    cursor.onsuccess=()=>{
        let lectura=cursor.result
        if(lectura){
            mostrarListado(`${lectura.value.id}  ${lectura.value.nombre}  ${lectura.value.categoria}`),
            console.log(lectura.value.id, lectura.value.nombre, lectura.value.categoria),
            lectura.continue()
        }else{
            console.log('Acabó la lectura')
        }
    }
    cursor.onerror=()=>{
        console.log('Ha habido un error en la lectura')
        mostrarMensaje('Ha habido un error en la lectura')
    }

}
function mostrarListado(text){
    document.getElementById('listado').innerHTML+=text+'<br>'
}
function resetearListado(){
    document.getElementById('listado').innerHTML=''
}

document.getElementById('buscarID').addEventListener('click',()=> buscarID())


function buscarID(){
    if(!db){
        console.log('No es posible acceder a la base de datos')
        mostrarBuscado('No es posible acceder a la base de datos')
        return false
    }
    const transaccion=db.transaction(['videojuegos'], 'readonly')
    const almacenDatos=transaccion.objectStore('videojuegos')
    let id=document.getElementById('leerID').value
    
    if(id){
        id=Number(id)
        let solicitudVideojuego=almacenDatos.get(id)
        solicitudVideojuego.onsuccess=()=>{
            if(solicitudVideojuego.result){
                
                let videojuego=solicitudVideojuego.result
                nombreInput.value=videojuego.nombre
                categoriaInput.value=videojuego.categoria
                console.log(videojuego)
                mostrarBuscado(videojuego.id+ " " +videojuego.nombre + " " + videojuego.categoria)
                return videojuego
            }else{
                mostrarBuscado('No existe un videojuego con ese id')
                return null
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

}


function mostrarBuscado(text){
    document.getElementById('buscado').innerText=text
}

document.getElementById('actualizar').addEventListener('click',()=>actualizarRegistro())

function actualizarRegistro(){
      if(!db){
        console.log('No es posible acceder a la base de datos')
        mostrarBuscado('No es posible acceder a la base de datos')
        return false
    }
  const transaccion=db.transaction(['videojuegos'], 'readwrite')
    const almacenDatos=transaccion.objectStore('videojuegos')
    let id=document.getElementById('leerID').value
    if(id){

        const solicitud=almacenDatos.get(Number(id))
        solicitud.onsuccess=()=>{
            if(solicitud.result){
                let videojuego=solicitud.result

                videojuego.nombre=nombreInput.value
                videojuego.categoria=categoriaInput.value
                const solicitudModificacion=almacenDatos.put(videojuego)
                solicitudModificacion.onsuccess=()=>{
                    if(solicitudModificacion.result){
                        resetearListado()
                        listarVideojuegos()
                        mostrarMensaje(`Videojuego con ID=${id} modificado con existo`)
                    }
                }
                solicitudModificacion.onError=()=>{
                    console.log('No se ha insertar la modificacion')
                }
            }
        }
        solicitud.onerror=()=>{
            console.log('No se ha podido obtener el id para la modificacion')

        }
    }

}

function borrarRegistro(){
    let id=Number(document.getElementById('leerID').value.trim())

    //Comprobar que sea un  numero!!!! y castear despues!

    //Comprobar tambien que exista!!!

    
    if(!id){
        console.log('No ha introducido ningun id');
        mostrarMensaje('No ha introducido ningun id');
        return false;
    }
    if(!db){
        console.log('No esta abierta la base de datos');
        mostrarMensaje('No esta abierta la base de datos');
        return false;
    }   

    const transaccion=db.transaction(['videojuegos'],'readwrite')
    const almacen=transaccion.objectStore('videojuegos')
    const requestEliminacion=almacen.delete(id)
    requestEliminacion.onsuccess=()=>{
        mostrarMensaje(`El videojuego con ID=${id} ha sido eliminado con exito`)
        console.log(`El videojuego con ID=${id} ha sido eliminado con exito`)
        listarVideojuegos()
    }
    requestEliminacion.onerror=()=>{
        console.log('No ha sido posible eliminar el id')
        mostrarListado('No ha sido posible eliminar el id, no se ha encontrado')
    }



}
document.getElementById('porNombre').addEventListener('click', ()=>listarVideojuegos('nombre'))
document.getElementById('porCategoria').addEventListener('click', ()=>listarVideojuegos('categoria'))

document.getElementById('borrar').addEventListener('click', ()=>borrarRegistro())















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



