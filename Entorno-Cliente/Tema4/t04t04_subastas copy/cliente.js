// Importamos a clase Artigo
import Artigo from './artigo.js';

const ws = new WebSocket('ws://localhost:8088')
let artigo = {}
ws.onopen = () => {
    console.log("Conectado")
}
ws.onmessage = (message) => {
    console.log(message.data)
    const mensaje = JSON.parse(message.data)
    console.log(mensaje.tipo)
    switch (mensaje.tipo) {
        case "ESTADO_INICIAL":
            console.log(mensaje.artigo)
            artigo = new Artigo(mensaje.artigo.id, mensaje.artigo.nome, mensaje.artigo.prezoActual, mensaje.artigo.poxadorActual)
            artigo.tempo = mensaje.artigo.tempoRestante
            artigo.renderizar()
            break;
        case "ACTUALIZACION":
            console.log(mensaje.artigo)
            artigo.actualizarDesdeJSON(mensaje.artigo)
            artigo.renderizar()
            break;
        case "TICK":
            console.log(mensaje.tempo)
            artigo.tempo = mensaje.tempo
            artigo.renderizar()
            console.log("tick")
            break;
        case "FIN":
            document.getElementById("mensaxes").innerHTML=`La subasta ha terminado!!! <br> El ganador es:<strong>${mensaje.gañador}</strong>`
            break;

        default:
            break;
    }
}
document.getElementById("btn-poxar").addEventListener("click", () => {
    const nombre = document.getElementById("input-usuario").value
    const poxa = Number(document.getElementById("input-oferta").value)

    let mensaje = { tipo: "POXA", valor: poxa, usuario: nombre }
    console.log(JSON.stringify(mensaje))
    ws.send(JSON.stringify(mensaje))
})