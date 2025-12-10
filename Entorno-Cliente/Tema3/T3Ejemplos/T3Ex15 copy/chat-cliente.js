
document.addEventListener('DOMContentLoaded', () => {
    mostrarMensajeInformacion('Intentando conectarse al servidor localhost:8082')
    conectar()
})
// Créase unha nova conexión ao servidor a través dun WebSocket
let socketCliente
// Esta liña execútase cada vez que se produce o evento de conexión a un servidor.
function conectar() {
    socketCliente = new WebSocket("ws://localhost:8082");
    socketCliente.addEventListener("open", () => {
        console.log("Conectado ao servidor.");
        mostrarMensajeInformacion("Conectado con el servidor")
        btnEnviar.removeAttribute('disabled')
        // Enviamos unha mensaxe ao servidor.

        estado.classList.toggle('desconectado')
        estado.classList.toggle('conectado')
        estado.innerHTML = 'CONECTADO'
        socketCliente.send("Ola, Servidor!");
    });
    // Nesta función recibimos mensaxes do servidor.
    socketCliente.addEventListener("message", (mensaxe) => {
        mostrarMensajeServidor("O servidor enviou a seguinte mensaxe: <br>" + mensaxe.data)
        console.log("O servidor enviou a seguinte mensaxe: <br>" + mensaxe.data);
    });

    socketCliente.onclose = (evento) => {
        if (evento.wasClean) {
            alert(`[Close] conexión cerrada limpiamente, codigo=${evento.code} motivo ${evento.reason}`)
            mostrarMensajeInformacion(`[Close] conexión cerrada limpiamente, codigo=${evento.code} motivo ${evento.reason}`)
        } else {
            alert(`[Close] La conexión cesó inesperadamente`)

        }
    }
    //Cuando no esta disponible
    socketCliente.onerror = () => {
        console.log("El servidor no esta disponible")
        mostrarMensajeInformacion("El servidor no esta disponible")
    };
}

const estado = document.getElementById('estado')
const mensajeInput = document.getElementById('input-mensaxe')
const log = document.getElementById('log-mensaxes')
const btnEnviar = document.getElementById('btn-enviar')
const btnConexion = document.getElementById('btn-conexion')



function enviarMensaxe() {
    let mensaje = mensajeInput.value.trim()
    socketCliente.send(mensaje);
    mostrarMensajeCliente('El cliente ha dicho:<br> ' +  mensaje)

}

function xestionarConexion() {
    if (socketCliente.readyState === WebSocket.OPEN) {

        socketCliente.close()
        btnConexion.innerHTML = 'Abrir Conexión'
    }
    else {
        btnConexion.innerHTML = 'Pechar Conexión'
        conectar()
    }
    btnEnviar.toggleAttribute('disabled')

}


function mostrarMensajeServidor(text){
 let div = document.createElement('div')
    div.innerHTML = text
    div.classList.add("servidor")
    let br = document.createElement('br')
    log.appendChild(div)
    log.appendChild(br)
}
function mostrarMensajeCliente(text){
 let div = document.createElement('div')
    div.innerHTML = text
    div.classList.add("cliente")
    let br = document.createElement('br')
    log.appendChild(div)
    log.appendChild(br)
}
function mostrarMensajeInformacion(text){
 let div = document.createElement('div')
 div.classList.add("informacion")
    div.innerHTML = text
    let br = document.createElement('br')
    log.appendChild(div)
    log.appendChild(br)
}






