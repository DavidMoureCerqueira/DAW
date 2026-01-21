const URL = 'https://jsonplaceholder.typicode.com/users'
const btnCarga = document.getElementById("cargarUsuarios")
const mensaje = document.getElementById("mensaxe")
const listadoUsuarios = document.getElementById("listaUsuarios")
const detallesUsuario = document.getElementById("detallesUsuario")


async function cargarUsuarios() {
    try {
        const tiempo = Math.floor((Math.random() * 3) + 1)
        console.log(`El tiempo de espera para la solicitud es de ${tiempo} segundos`)
        return await new Promise((resolve, reject) => {

            setTimeout(async () => {
                if (tiempo >= 2) {
                    const response = await fetch(URL)
                    if (!response.ok) {
                        throw new Error("Ha habido un problema en la lectura")
                    }
                    const datos = await response.json()
                    resolve(datos);
                } else {
                    reject("La peticion ha tardado demasiado")
                }
            }, tiempo * 1000)
        })

    } catch (error) {
        console.log("ERROR: Ha habido un problema en ejecucion de la lectura o transformacion")
        throw (error)
    }
}

function renderizarUsuarios(usuarios) {
    console.log("Renderizando Usuarios...")
    console.log(usuarios)
    mensaje.innerHTML = ""
    usuarios.forEach(usuario => {
        const li = document.createElement("li")
        li.textContent = usuario.name
        listadoUsuarios.appendChild(li)
        li.addEventListener("click", async () => {
            try {
                const usuarioIndividual = await obtenerDetallesUsuario(usuario.id)

                renderizarDatosUsuario(usuarioIndividual)

            } catch (error) {
                console.log("ERROR capturado:", error)
            }
        })
    });

}

function renderizarDatosUsuario(usuario) {
    detallesUsuario.innerHTML=""
    console.log("Renderizando datos de usuario")
    console.log(usuario)
    const titulo=document.createElement("h2")
    titulo.innerHTML=usuario.name
    const nombreUsuario=document.createElement("p")
    nombreUsuario.innerHTML=`<strong>Nombre Usuario:</strong> ${usuario.username}`
    const direccion=document.createElement("p")
    direccion.innerHTML=`<strong>Direccion:</strong> ${usuario.address.street}`
    const telefono=document.createElement("p")
    telefono.innerHTML=`<strong>Teléfono:</strong> ${usuario.phone}`
    const pagina=document.createElement("p")
    pagina.innerHTML=`<strong>Página:</strong> ${usuario.website}`

    detallesUsuario.appendChild(titulo)
    detallesUsuario.appendChild(nombreUsuario)
    detallesUsuario.appendChild(direccion)
    detallesUsuario.appendChild(telefono)
    detallesUsuario.appendChild(pagina)

}
async function obtenerDetallesUsuario(id) {
    console.log("Leyendo detalles de usuario con id:", id)
    try {

        const response = await fetch(`${URL}/${id}`)
        if (!response.ok) throw Error("Ha habido un error leyendo los datos del usurio", id)
        const datos = await response.json()
        return datos

    } catch (error) {
        console.log("Error:", error)

    }
}
btnCarga.addEventListener("click", async () => {
    try {
        listadoUsuarios.innerHTML = ""
        detallesUsuario.innerHTML=""
        mensaje.innerHTML = "Cargando usuarios..."
        btnCarga.disabled = true
        const usuarios = await cargarUsuarios()
        renderizarUsuarios(usuarios)
    } catch (error) {

        mensaje.innerHTML = "<p> No ha sido posible obtener los usuarios</p>"
        console.log("Error:", error)
    } finally {
        btnCarga.disabled = false
    }
})