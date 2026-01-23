const ws = new WebSocket("ws://localhost:8082")
ws.addEventListener("open", () => {
    console.log("Conectado al servidor!")

    ws.send("Hola, Servidor!!")
});

ws.addEventListener("message", ({ data }) => {
    try {
        dataParsed = JSON.parse(data)

        renderizarData(dataParsed)
    } catch (error) {
        console.log("El servidor envio: ", data)
    }
})




let usuario
class Usuario {
    constructor(id, nombre, puja = 0) {
        this._id = id
        this._nombre = nombre
        this._puja = puja
    }
    comprobarPuja(puja) {

        return (this._puja < puja) ? true : false
    }
    subirPuja(puja) {

        if (this.comprobarPuja(puja)) {
            this._puja = puja
            console.log("Puja actualizada a:", puja)
            enviarMensaje(JSON.stringify(usuario))
        } else {

            console.log("Puja no actualizada")
        }

    }
}
function enviarMensaje(mensaje) {
    console.log("METODO: Mensaje enviado al servidor:", mensaje)
    ws.send(mensaje)
}



const objeto = document.getElementById("objeto")
const contador = document.getElementById("contador")
const pujaMarcador = document.getElementById("puja")
const divNombre = document.getElementById("divNombre")
const inputNombre = document.getElementById("ipt-nombre")
const inputPuja = document.getElementById("ipt-puja")
const divMostrador = document.querySelector(".container-mostrador")
const puja=document.getElementById("puja")




function renderizarData(dataParsed) {

    objeto.innerHTML =/*html*/`
        Subasta de: <strong> ${dataParsed._nombre}</strong>
    `
    let tiempoRestante = dataParsed._cuentaAtras
    contador.innerHTML = `${dataParsed._cuentaAtras} s`
    contador.classList.add("cuenta-atras")
    puja.innerHTML=`Puja: ${dataParsed._pujaActual} por: ${dataParsed._usuario._nombre}`
    if (tiempoRestante <= 20) {
        contador.classList.add("parpadear")
    } else {
        contador.classList.remove("parpadear")

    }

    if (dataParsed._terminada == true) {
        pujaMarcador.innerHTML = `${dataParsed._usuario._nombre} <br>${dataParsed._pujaActual} €`

        divMostrador.innerHTML =/*html*/
            `<h2>La subasta ha terminado </h2>
        <br>
        <p> El ganador del ${dataParsed._nombre} ha sido: ${dataParsed._usuario._nombre} por un valor de <strong>${dataParsed._pujaActual}</strong> euros</p>
        `
    }
}

















inputNombre.addEventListener("keypress", (ev) => {
    if (ev.key == "Enter") {
        console.log("Tu nombre es:", inputNombre.value)
        divNombre.classList.add("oculto")
        let id = new Date().valueOf()
        usuario = new Usuario(id, inputNombre.value)
        console.log("Usuario creado: ", usuario)
        enviarMensaje(JSON.stringify(usuario))

    }
})
inputPuja.addEventListener("keypress", (ev) => {
    if (ev.key == "Enter") {
        if (usuario instanceof Usuario) {
            console.log("Tu puja es:", inputPuja.value)
            usuario.subirPuja(+inputPuja.value)

        } else {
            contador.innerHTML = "Necesitas tener un usuario para pujar!!!"
        }

    }
})




