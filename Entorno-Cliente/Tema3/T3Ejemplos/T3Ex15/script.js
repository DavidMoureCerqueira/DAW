
// Créase unha nova conexión ao servidor a través dun WebSocket
const socketCliente = new WebSocket("ws://localhost:8082");
// Esta liña execútase cada vez que se produce o evento de conexión a un servidor.
socketCliente.addEventListener("open", () => {
console.log("Conectado ao servidor.");
// Enviamos unha mensaxe ao servidor.
socketCliente.send("Ola, Servidor!");
});
// Nesta función recibimos mensaxes do servidor.
socketCliente.addEventListener("message", (mensaxe) => {
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