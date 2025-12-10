// const { clear } = require("console")

document.addEventListener('DOMContentLoaded', () => {
    mostrarMensajeInformacion('Intentando conectarse al servidor localhost:8082')
    conectar()
})
// Créase unha nova conexión ao servidor a través dun WebSocket
let socketCliente
let idInterval
iniciarTemporizador()
// Esta liña execútase cada vez que se produce o evento de conexión a un servidor.
function conectar() {
     if (socketCliente &&  socketCliente.readyState === WebSocket.OPEN ){
        mostrarMensajeInformacion('Ya existe una conexión con el servidor')
        clearInterval(idInterval)
            idInterval=null;
        return
    }
    socketCliente = new WebSocket("ws://localhost:8082");
    mostrarMensajeInformacion("Intentando conectar con el servidor")

    socketCliente.addEventListener("open", () => {
        console.log("Conectado ao servidor.");
        mostrarMensajeInformacion("Conectado con el servidor")
        btnEnviar.removeAttribute('disabled')
        // Enviamos unha mensaxe ao servidor.

        estado.classList.toggle('desconectado')
        estado.classList.toggle('conectado')
        estado.innerHTML = 'CONECTADO'
        socketCliente.send("Ola, Servidor!");
        // if(idInterval){
        //     clearInterval(idInterval)
        //     idInterval=null;
        // }
        
    });
    // Nesta función recibimos mensaxes do servidor.
    socketCliente.addEventListener("message", (mensaxe) => {
        mostrarMensajeServidor(mensaxe.data)
        console.log("O servidor enviou a seguinte mensaxe: <br>" + mensaxe.data);
    });

    socketCliente.onclose = (evento) => {
        
            // alert(`[Close] conexión cerrada limpiamente, codigo=${evento.code} motivo ${evento.reason}`)
            estado.classList.toggle('desconectado')
            estado.classList.toggle('conectado')
            btnEnviar.toggleAttribute('disabled')
            estado.innerHTML="DESCONECTADO"
            mostrarMensajeInformacion(`[Close] conexión cerrada limpiamente, codigo=${evento.code} motivo ${evento.reason}`)
        
            if(evento.code==1005){
                clearTimeout(idInterval)
                console.log('Temporizador limpiado')
            }else{
                iniciarTemporizador()
            }
            // alert(`[Close] La conexión cesó inesperadamente`)


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

mensajeInput.addEventListener('keypress', ev=>{
    if(socketCliente && socketCliente.readyState === WebSocket.OPEN)
    if (ev.key=="Enter"){
        enviarMensaxe()
    }
})



function enviarMensaxe() {
    let mensaje = mensajeInput.value.trim()
    if(socketCliente && socketCliente.readyState===WebSocket.OPEN && mensaje)
    socketCliente.send(mensaje);
    mostrarMensajeCliente('El cliente ha dicho:<br> ' +  mensaje)
    mensajeInput.value=''

}

function xestionarConexion() {
    if(socketCliente.readyState !==WebSocket.CONNECTING){
        if (socketCliente.readyState === WebSocket.OPEN) {   
            socketCliente.close()
            btnConexion.innerHTML = 'Abrir Conexión'
        }
        else {
            btnConexion.innerHTML = 'Pechar Conexión'
            conectar()
        }
    }
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

function iniciarTemporizador(){

    idInterval=setInterval(()=>{
        conectar()
    },5000)
}




