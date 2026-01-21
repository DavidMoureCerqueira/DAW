// tmporizador, si tarda mas 5 segundos que de error
// Leer del text y coger lo json a los que acceder
const listarUsuarios = document.getElementById('listaUsuarios')
const detallesUsuario = document.getElementById('detallesUsuario')
const mensaxe = document.getElementById('mensaxe')

const btnCargar = document.getElementById('cargarUsuarios')
const URL = 'https://jsonplaceholder.typicode.com/users'

// btnCargar.addEventListener('click',()=>{
//     listarUsuarios.innerHTML='';
//     detallesUsuario.innerHTML='';
//     btnCargar.disabled=true
//     obtenerUsuarios()
//     .then(mostrarUsuarios)
//     .catch(error=>{
//         mensaxe.textContent=error.message

//     })
//     .finally(()=>{
//         btnCargar.disabled=false
//     })

// })

// async function obtenerUsuarios(){
//     return new Promise((resolve,reject)=>{
//         fetch('https://jsonplaceholder.typicode.com/users');
//     }).then((datos)=>{
//         let datosJson=datos.json()
//         resolve(()=>{

//             console.log("El Json se ha leido exitosamente") ;
//             return datosJson;
//         })
//         reject(console.log("Url incorrecta imposible leer"))
//     })
// }

// Promise: Funcion que devuelve una Promise para cargar usuarios
// function obtenerUsuarios() {
//     mensaxe.textContent = 'Cargando usuarios...';

//     // Fech devuelve promesa asi que se maneja como tal y no es necesario crear otra.
//     // devuelve un tipo de clase response
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(respuesta => {
//             // Si no esta correcto la respuesta lanzamos un error (como si fuera un reject)
//             if (!respuesta.ok) throw new Error('Error al cargar usuarios');
//             // resolve
//             return respuesta.json()
//         });
// }
// Mozilla.org fetch es la documentacion que siguió.

// Simulamos un retardo aleatorio entre 1 y 7 segundos
// const tempoEspera=Math.floor(Math.random()*7)+1;
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// if (tempoEspera>4){
//  reject(new Error("Error: La carga tardo demasiado"))
// }else{
// fetch(URL)
// .then(response=>{
// if(!response.ok) throw new Errpr("Error al cargar usuarios")
// return response.json()
// })
// .then(resolve)
// .catch(reject)
// }
// },tempoEspera *1000)
// })



function mostrarUsuarios(usuarios) {
    console.log(usuarios)
    listarUsuarios.innerHTML = "";
    usuarios.forEach(usuario => {
        const li = document.createElement('li')
        li.textContent = usuario.name;
        li.onclick = () => obtenerDetallesUsuario(usuario.id)
        listarUsuarios.appendChild(li)
    });
    mensaxe.textContent = ""


}

// Usamos async
async function obtenerDetallesUsuario(id) {
    mensaxe.textContent = "Cargando detalles...";
    detallesUsuario.textContent="Cargando detalles del usuario " + id + '....'
    try{
        const resposta= await fetch('https://jsonplaceholder.typicode.com/users/'+id);
        if (!resposta.ok) throw new Error('Error al cargar detalles');
        const usuario=await resposta.json();
        mostrarDetalles(usuario)
        mensaxe.textContent=""
    }catch(erro){
        mensaxe.textContent=erro.message;
        detallesUsuario.innerHTML=""
    }

}

function mostrarDetalles(usuario){
    detallesUsuario.innerHTML=`
    <h2>${usuario.name}</h2>
    <p><strong>Email:</strong>${usuario.email}</p>
    <p><strong>Telefono:</strong>${usuario.phone}</p>
    <p><strong>Ciudad:</strong>${usuario.address.city}</p>
    <p><strong>Empresa:</strong>${usuario.company.name}</p>
    `
}


// Se puede hacer async la funcion que se genera al clickar
btnCargar.onclick = () => {
    listarUsuarios.innerHTML = '';
    detallesUsuario.innerHTML = '';
    btnCargar.disabled = true;
    obtenerUsuarios()
        .then(usuarios => {
            console.log('hola')
            mostrarUsuarios(usuarios)

        })
        .catch(erro => {
            mensaxe.textContent = erro.message;
        })
        .finally(() => {
            btnCargar.disabled = false;
        })
}


 async function obtenerUsuarios() {
    mensaxe.textContent = 'Cargando usuarios...';

    // Fech devuelve promesa asi que se maneja como tal y no es necesario crear otra.
    // devuelve un tipo de clase response
    try{

        const respuesta= await fetch('https://jsonplaceholder.typicode.com/users')

        if(!respuesta.ok) throw new Error("No se ha podido leer los usuarios")

            return respuesta.json()
    }catch(error){
        console.log('asdasd')
        mensaxe.innerHTML=error.messaxe
    }
}