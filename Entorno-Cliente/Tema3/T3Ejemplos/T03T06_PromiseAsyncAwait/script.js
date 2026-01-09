const btnCargar = document.getElementById('cargarUsuarios')
const mensaje = document.getElementById("mensaxe")
const listaUsuarios = document.getElementById("listaUsuarios")
const detallesUsuario = document.getElementById("detallesUsuario")



const URL = 'https://jsonplaceholder.typicode.com/users'



// async function obtenerUsuarios() {

//     try {
//         const respuesta = await fetch(URL)
//         if (!respuesta.ok) throw new Error("Error al cargar usuarios")
//         return respuesta.json()
//     } catch (error) {
//         mensaje.innerHTML = "Hubo un error" + error.message
//     }
//     finally {
//         mensaje.innerHTML = ""
//     }

// }

async function obtenerUsuarios() {
    try {
        mensaje.textContent = "Cargando Usuarios"
        const tiempoEspera = Math.floor(Math.random() * 7) + 1;
        if (tiempoEspera > 4) {
            throw new Error('Error: La carga tardo demasiado')
        } else {

            const respuesta = await fetch(URL)
            // En caso de que sea un error 400 o asi para que salga por el catch
            if (!respuesta.ok) throw new Error("Error al cargar usuarios")

            const usuarios= await respuesta.json()
        return usuarios
        }
    } catch (error) {
        throw error
        // mensaje.innerHTML = "Hubo un error " + error.message
    }
    finally {
        mensaje.innerHTML = ""
    }
}




function mostrarUsuarios(usuarios) {
    usuarios.forEach(usuario => {

        const li = document.createElement('li')
        li.innerHTML = usuario.name
        li.onclick = () => {
            obtenerDetallesUsuario(usuario.id)
                .then(usuario => mostrarDetalleUsuario(usuario))
                .catch(error => console.log(error))
        }
        listaUsuarios.appendChild(li)
    });
}

function mostrarDetalleUsuario(usuario) {
    detallesUsuario.innerHTML = `
        <h2>${usuario.name}</h2>
        <p><strong>Usuario:</strong>${usuario.username}</p>
        <p><strong>Telefono:</strong>${usuario.phone}</p>
        <p><strong>Calle:</strong>${usuario.address.street}</p>
        <p><strong>Empresa:</strong>${usuario.company.name}</p>
    `
}

async function obtenerDetallesUsuario(id) {
    try {
        const respuesta = await fetch(`${URL}/${id}`)
        if (!respuesta.ok) throw new Error("Error al obtener el detalle del usuario")

        return respuesta.json()
    } catch (error) {
        mensaje.textContent = "Algo salió mal" + error.message
    }
}


// btnCargar.onclick = () => {
//     listaUsuarios.innerHTML = "";
//     detallesUsuario.innerHTML = "";
//     btnCargar.disabled = true;
//     mensaje.innerHTML = "Cargando usuarios..."
//     obtenerUsuarios()
//         .then(usuarios => {
//             mostrarUsuarios(usuarios)

//         })
//         .catch((error) => {

//             mensaje.innerHTML += "Lamentamos los ocurrido" + error;
//         })
//         .finally(() => {
//             btnCargar.disabled = false
//         })
// }
btnCargar.onclick = async () => {
    listaUsuarios.innerHTML = "";
    detallesUsuario.innerHTML = "";
    btnCargar.disabled = true;
    mensaje.innerHTML = "Cargando usuarios..."
    try{

        const usuarios= await obtenerUsuarios()
        mostrarUsuarios(usuarios)
    }catch(error){
        mensaje.innerHTML = "Hubo un error " + error.message
    }
    finally{

        btnCargar.disabled=false
    }
}