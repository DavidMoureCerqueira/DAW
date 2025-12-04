
const nombreInput = document.getElementById('nome');
const fechaInput = document.getElementById('fecha');
const apelidosInput = document.getElementById('apelidos');
const telefonoInput = document.getElementById('telefono');
const emailInput = document.getElementById('email');
const enderezoInput = document.getElementById('enderezo');
const comentariosInput = document.getElementById('comentarios');
const formulario = document.getElementById('formulario-contactos');
const posicionContactos = document.getElementById('listaxe-contactos');

let arrayContactos = []

function formatearFecha(fecha) {
    const options = {

        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }
    return fecha.toLocaleDateString('es-ES', options)
}

function engadirContacto() {
    let nombre = nombreInput.value
    let fechaObjt = fechaInput.valueAsDate
    let apellidos = apelidosInput.value
    let telefono = telefonoInput.value
    let email = emailInput.value
    let enderezo = enderezoInput.value
    let comentarios = comentariosInput.value
    let fechaStr = 'No especificada';
    if (!nombre) {
        console.log('No ha introducido un nombre')
        return false;
    }

    if (fechaObjt) {
        fechaStr = formatearFecha(fechaObjt)
    }
    if (arrayContactos.some((contacto) => contacto.nombre == nombre)) {
        console.log("Ya hay un contacto con ese nombre")
        return false;

    }
    let contacto = {
        nombre: nombre,
        fechaObj:fechaObjt,
        fecha: fechaStr,
        apellidos: apellidos,
        telefono: telefono,
        email: email,
        enderezo: enderezo,
        comentarios: comentarios
    }
    arrayContactos.push(contacto);
    formulario.reset();
    nombreInput.focus();
    renderizarContactos()

}
function renderizarContactos() {
    arrayContactos.sort((a, b) => a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase()))
    let HTMLAInsertar = '';
    arrayContactos.forEach(contacto => {
        HTMLAInsertar += `<div>${contacto.nombre}  ${contacto.apellidos}`
        HTMLAInsertar += ` Fecha de Nacimiento: ${contacto.fecha}`
        HTMLAInsertar += ` Teléfono: ${contacto.telefono}`
        HTMLAInsertar += ` Email: ${contacto.email}`
        HTMLAInsertar += ` Dirección: ${contacto.enderezo}`
        HTMLAInsertar += ` Comentarios: ${contacto.comentarios}`
        HTMLAInsertar += "</div> <hr>"
    });
    posicionContactos.innerHTML = HTMLAInsertar

}
function buscarContacto() {

    let posicionNombre = encontrarIndexContactoPorNombre();
    if (posicionNombre != -1) {
        let contacto = arrayContactos[posicionNombre];
        fechaInput.valueAsDate=contacto.fechaObj;
        apelidosInput.value=contacto.apellidos;
        telefonoInput.value=contacto.telefono;
        emailInput.value=contacto.email;
        enderezoInput.value=contacto.enderezo;
        comentariosInput.value=contacto.comentarios;
        

    } else {
        console.log('No se ha encontrado el contacto buscado', nombreInput.value)
    }
}
function modificarContacto() {
    let posicionContacto=encontrarIndexContactoPorNombre();
    if (posicionContacto!=-1){
        // console.log(fechaInput.value)
        // arrayContactos[posicionContacto].fechaObj=fechaInput.valueAsDate
        // arrayContactos[posicionContacto].fecha=fechaInput.value
        // arrayContactos[posicionContacto].apellidos=apelidosInput.value
        // arrayContactos[posicionContacto].telefono=telefonoInput.value
        // arrayContactos[posicionContacto].email=emailInput.value
        // arrayContactos[posicionContacto].enderezo=enderezoInput.value
        // arrayContactos[posicionContacto].comentarios=comentariosInput.value
         let contacto=arrayContactos[posicionContacto]
         console.log(fechaInput.value)
         if(fechaInput.value){
            console.log('entro')
            contacto.fechaObj=fechaInput.valueAsDate
        }
        contacto.fecha=(fechaInput.value) ? fechaInput.value : 'No especificada'
        contacto.apellidos=apelidosInput.value 
        contacto.telefono=telefonoInput.value
        contacto.email=emailInput.value
        contacto.enderezo=enderezoInput.value
        contacto.comentarios=comentariosInput.value
        arrayContactos.push(contacto)
        eliminarContacto()
        renderizarContactos()
        formulario.reset();
    }else {
        console.log('No se ha encontrado el contacto buscado', nombreInput.value)
    }

}
function eliminarContacto() {
    let posicionNombre=encontrarIndexContactoPorNombre();
    if(posicionNombre!=-1){
        arrayContactos.splice(posicionNombre,1)
        formulario.reset();
    }else{
        console.log('No se ha encontrado el contacto buscado', nombreInput.value)
    }
    renderizarContactos()

}

function encontrarIndexContactoPorNombre(){
    let nombreBuscado = nombreInput.value;
    return arrayContactos.findIndex((contacto) => contacto.nombre == nombreBuscado);

}
