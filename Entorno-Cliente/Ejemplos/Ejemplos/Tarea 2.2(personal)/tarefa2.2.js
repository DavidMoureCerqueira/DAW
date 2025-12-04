//Declarar variables globales
//DatosFormulario
const nombreIntroducido = document.getElementById('nome');
const apellidosIntroducido = document.getElementById('apelidos');
const telefonoIntroducido = document.getElementById('telefono');
const emailIntroducido = document.getElementById('email');
const direccionIntroducido = document.getElementById('enderezo');
const comentarioIntroducido = document.getElementById('comentarios');

//Posiciones
const listadoContactos = document.getElementById("listaxe-contactos");

let arrayContactos = [];

function engadirContacto() {
    let nombre = nombreIntroducido.value;

    if (!nombre) {
        console.log('No ha introducido un nombre')
    }

    let contacto = {
        nombre: nombre,
        apellidos: apellidosIntroducido.value,
        telefono: telefonoIntroducido.value,
        email: emailIntroducido.value,
        direccion: direccionIntroducido.value,
        comentario: comentarioIntroducido.value
    }
    if (arrayContactos.some((contacto) => contacto.nombre == nombre)) {
        console.log('El usuario ya existe');
    } else {
        arrayContactos.push(contacto);
    }
    reiniciarCampos()
    renderizarContactos()
}
function renderizarContactos() {
    let HTMLAInsertar = '';
    arrayContactos.forEach(contacto => {
        HTMLAInsertar += `<div> ${contacto.nombre} ${contacto.apellidos} `;
        HTMLAInsertar += `- Teléfono: ${contacto.telefono} `;
        HTMLAInsertar += `- Email: ${contacto.email} `;
        HTMLAInsertar += `- Dirección: ${contacto.direccion} `;
        HTMLAInsertar += `</div><hr>`;
    });
    listadoContactos.innerHTML = HTMLAInsertar;

}
function buscarContacto() {
    let contactoBuscadoIndex = utilidadEncontrarContacto()
    if (contactoBuscadoIndex != -1) {
        let contactoBuscado = arrayContactos[contactoBuscadoIndex]
        apellidosIntroducido.value = contactoBuscado.apellidos
        telefonoIntroducido.value = contactoBuscado.telefono
        emailIntroducido.value = contactoBuscado.email
        direccionIntroducido.value = contactoBuscado.direccion
        comentarioIntroducido.value = contactoBuscado.comentario
    } else {
        console.log('El usuario no se ha encontrado')
    }
}
function modificarContacto() {

    let contactoBuscadoIndex = utilidadEncontrarContacto();
    if (contactoBuscadoIndex != -1) {
        arrayContactos[contactoBuscadoIndex].apellidos = apellidosIntroducido.value
        arrayContactos[contactoBuscadoIndex].telefono = telefonoIntroducido.value
        arrayContactos[contactoBuscadoIndex].email = emailIntroducido.value
        arrayContactos[contactoBuscadoIndex].direccion = direccionIntroducido.value
        arrayContactos[contactoBuscadoIndex].comentario = comentarioIntroducido.value;
    } else {
        console.log('El contacto no ha sido encontrado')
    }
    renderizarContactos();



}
function eliminarContacto() {
    let contactoBuscadoIndex = utilidadEncontrarContacto()
    if (contactoBuscadoIndex != -1) {
        arrayContactos.splice(contactoBuscadoIndex,1)
    }else{
        console.log('El contacto no ha sido encontrado')
    }
    renderizarContactos()

}


function utilidadEncontrarContacto() {
    let nombreBuscado = nombreIntroducido.value;
    let contactoBuscadoIndex = arrayContactos.findIndex((contacto) => contacto.nombre === nombreBuscado)
    return contactoBuscadoIndex;
}

function reiniciarCampos() {
    nombreIntroducido.value = '';
    apellidosIntroducido.value = '';
    telefonoIntroducido.value = '';
    emailIntroducido.value = '';
    direccionIntroducido.value = '';
    comentarioIntroducido.value = '';
    nombreIntroducido.focus();
}