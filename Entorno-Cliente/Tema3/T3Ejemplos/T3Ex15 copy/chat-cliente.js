
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMensaje('Intentando conectarse al servidor localhost:8082')
})
// Créase unha nova conexión ao servidor a través dun WebSocket
const socketCliente = new WebSocket("ws://localhost:8082");
// Esta liña execútase cada vez que se produce o evento de conexión a un servidor.
socketCliente.addEventListener("open", () => {
console.log("Conectado ao servidor.");
// Enviamos unha mensaxe ao servidor.

estado.classList.toggle('desconectado')
estado.classList.toggle('conectado')
estado.value='conectado'
socketCliente.send("Ola, Servidor!");
});
// Nesta función recibimos mensaxes do servidor.
socketCliente.addEventListener("message", (mensaxe) => {
    mostrarMensaje(mensaxe.data)
console.log("O servidor enviou a seguinte mensaxe: "+mensaxe.data);
});

socketCliente.onclose=(evento)=>{
    if (evento.wasClean){
        alert(`[Close] conexión cerrada limpiamente, codigo=${evento.code} motivo ${evento.reason}` )
    }else{
        alert(`[Close] La conexión cesó inesperadamente`)

    }
}
//Cuando no esta disponible
socketCliente.onerror= ()=>{
console.log("El servidor no esta disponible")
};

const estado=document.getElementById('estado')
const mensajeInput=document.getElementById('input-mensaxe')
const log=document.getElementById('log-mensaxes')
const btnEnviar=document.getElementById('btn-enviar')
const btnConexion=document.getElementById('btn-conexion')



function enviarMensaje(){
let mensaje=mensajeInput.value.trim()
socketCliente.send(mensaje);

}

function xestionarConexion(){

}
function mostrarMensaje(text){
    let div=document.createElement('div')
    div.innerHTML=text
    let br=document.createElement('br')
    log.appendChild(div)
    log.appendChild(br)

}


