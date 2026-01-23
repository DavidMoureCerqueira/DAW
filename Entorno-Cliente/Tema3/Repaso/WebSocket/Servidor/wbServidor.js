
let usuarios = []
let idIntervalo
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });
class Usuario {
    constructor(id, nombre, puja = 0) {
        this._id = id
        this._nombre = nombre
        this._puja = puja
    }
    static crearUsuario(usuario) {
        return new Usuario(usuario._id, usuario._nombre, usuario._puja)
    }
    comprobarPuja(puja) {

        return (this._puja < puja) ? true : false
    }
    subirPuja(puja) {


        if (this.comprobarPuja(puja)) {
            this._puja = puja
            console.log("Puja actualizada a:", puja)
        } else {
            console.log("Puja no actualizada")
        }

    }
}


class Objeto {
    constructor(nombre) {
        this._nombre = nombre
        this._pujaActual = 0
        this._usuario = {}
        this._cuentaAtras = 60
        this._terminada = false

    }
    set usuarioGanadorSetter(usuario) {
        console.log(usuario)
        this._usuario = usuario
    }
    set cuentaAtrasSetter(tiempo) {
        this._cuentaAtras = tiempo
        if (this._cuentaAtras < 0) {
            this._terminada = true
        }
    }
    get cuentaAtrasGetter() {
        return this._cuentaAtras
    }
    set pujaActualSetter(puja) {
        this._pujaActual = puja
    }
    incrementarTiempoIntervalo() {
        this._cuentaAtras += 15
    }
}


function iniciarIntervalo() {

    if (idIntervalo) {
        clearInterval(idIntervalo)
    }
    idIntervalo = setInterval(() => {

        // console.log(jarron)
        enviarAtodos(JSON.stringify(jarron))
        jarron.cuentaAtrasSetter = jarron.cuentaAtrasGetter -= 1
        if (jarron.cuentaAtrasGetter <= 0) {
            clearInterval(idIntervalo)
        }
    }, 1000)
}
function enviarAtodos(mensaje) {

    wss.clients.forEach(client => {
        if (client.readyState == WebSocket.OPEN) {
            client.send(mensaje)
        }
    })
}

const jarron = new Objeto("Jarron Medieval")



console.log("Servidor iniciado")

wss.on("connection", ws => {
    console.log("Se conecto un cliente!")
    // if(wss.clients.size>=2){

        iniciarIntervalo()
    // }


    ws.on("message", mensaje => {
        try {
            let data = mensaje.toString().trim()
            let dataParsed = JSON.parse(data)
            console.log("Data recibida", dataParsed)
            if (usuarios.some((usuarioArr) => usuarioArr._id == dataParsed._id)) {
                console.log("Entro en la validacion de la puja")

                const usuarioPuja = usuarios.find((usuarioArr) => usuarioArr._id == dataParsed._id)
                usuarioPuja.subirPuja(Number.parseFloat(dataParsed._puja))
                jarron.usuarioGanadorSetter = Usuario.crearUsuario(usuarioPuja)
                jarron.pujaActualSetter = usuarioPuja._puja
                if (jarron.cuentaAtrasGetter <= 20) {

                    jarron.incrementarTiempoIntervalo()
                }

            } else {

                let usuario = Usuario.crearUsuario(dataParsed)
                console.log("Usuario Creado:", usuario)
                usuarios.push(usuario)
            }
            console.log(usuarios)
            // ws.send("Hola cliente")
        } catch (error) {
            console.log("Mensaje recibido")

        }
    });
    ws.on("close", () =>
        console.log("El cliente se desconectó."))
})

