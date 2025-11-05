var contactos = []; // Este array vai conter os obxectos de tipo contacto da nosa axenda

// Gardamos as referencias a todos os campos do formulario e os propios formulario e listaxe
var nome = document.getElementById('nome');
var apelidos = document.getElementById('apelidos');
var telefono = document.getElementById('telefono');
var email = document.getElementById('email');
var enderezo = document.getElementById('enderezo');
var comentarios = document.getElementById('comentarios');
var formulario = document.getElementById('formulario-contactos');
var listaxe = document.getElementById('listaxe-contactos');

// Función para engadir un contacto
function engadirContacto() {

    // Recollemos os datos do formulario nun novo obxecto
    let contacto = {
        nome: nome.value,
        apelidos: apelidos.value,
        telefono: telefono.value,
        email: email.value,
        enderezo: enderezo.value,
        comentarios: comentarios.value
    };

    // Engadir o contacto ao array e ordenalo por nome
    contactos.push(contacto);
    contactos.sort((a, b) => a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())); // Esta chamada ordena os elementos do array por nome sen distinguir maiúsculas de minúsculas e considerando o locale (es ou gl) para ter en conta acentos, eñes etc.

    // Actualizamos a listaxe de contactos
    actualizarListaxe();

    // Limpar o formulario
    formulario.reset();
}

// Esta función permite actualizar a listaxe de contactos a cada volta que hai un cambio nos datos
function actualizarListaxe() {
    listaxe.innerHTML = ''; // Limpar a listaxe antes de actualizala

    // Para cada contacto do array facemos o seguinte
    contactos.forEach(contacto => {
        let divContacto = document.createElement('div'); // Creamos un novo elemento de tipo div
        divContacto.classList.add('contacto'); // Asignámoslle ao div a clase 'contacto'
        divContacto.innerText = contacto.nome +' '+ contacto.apelidos +" - Tlf.: "+ contacto.telefono +" - E-mail: "+ contacto.email +" - Enderezo: "+ contacto.enderezo; // Introducimos no div os datos do contacto no formato indicado polo enunciado
        listaxe.appendChild(divContacto); // Incorporamos o div á listaxe coma elemento fillo
    });
}

// Esta función procura contactos por nome, enchendo os datos do formulario co contacto atopado
function buscarContacto() {
    let nomeProcurado = nome.value.toLowerCase(); // Recuperamos o nome do formulario e pasámolo a minúsculas

    // Procuramos a primeira ocorrencia do nome introducido no array (devólvenos un obxecto)
    let contacto = contactos.find(c => c.nome.toLowerCase() === nomeProcurado); 

    // Se houbo resultado, enchemos o formulario
    if (contacto) {
        // Autocompletar o formulario cos datos do contacto atopado
        apelidos.value = contacto.apelidos;
        telefono.value = contacto.telefono;
        email.value = contacto.email;
        enderezo.value = contacto.enderezo;
        comentarios.value = contacto.comentarios;
    } else {
        console.log('Contacto non atopado.');
    }
}

// Esta función elimina da axenda o contacto cuxo nome coincida co introducido no formulario (sen distinguir maiúsculas nin minúsculas)
function eliminarContacto() {
    let nomeProcurado = nome.value.toLowerCase(); // Recuperamos o nome do formulario e pasámolo a minúsculas

    // Procuramos a posición no array do contacto cuxo nome coincida co introducido
    let indice = contactos.findIndex(c => c.nome.toLowerCase() === nomeProcurado);

    // Se se atopou algún contacto coincidente
    if (indice !== -1) {
        contactos.splice(indice, 1); // Eliminamos o obxecto da posición correspondente no array
        actualizarListaxe(); // Actualizamos a listaxe
        formulario.reset(); // Limpiamos o formulario
    } else {
        console.log('Contacto non atopado para eliminar.');
    }
}

// Esta función modifica/actualiza un contacto partindo do seu nome (para procuralo no array) e do resto de datos introducidos no formulario
function modificarContacto() {
    let nomeProcurado = nome.value.toLowerCase(); // Recuperamos o nome do formulario e pasámolo a minúsculas

    // Procuramos a primeira ocorrencia do nome introducido no array (devólvenos un obxecto)
    let contacto = contactos.find(c => c.nome.toLowerCase() === nomeProcurado);

    // Se a busca deu resultado, actualizamos o obxecto cos datos do formulario
    if (contacto) {
        contacto.apelidos = apelidos.value;
        contacto.telefono = telefono.value;
        contacto.email = email.value;
        contacto.enderezo = enderezo.value;
        contacto.comentarios = comentarios.value;

        actualizarListaxe(); // Actualizamos a listaxe de contactos
        formulario.reset(); // Limpiamos o formulario
    } else {
        console.log('Contacto non atopado para modificar.');
    }
}
