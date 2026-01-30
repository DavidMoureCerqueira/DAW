// Importamos a clase Artigo
import Artigo from './artigo.js';

const ws = new WebSocket("ws://localhost:8088")
const usuarioIPT = document.getElementById("input-usuario")
const ofertaIPT = document.getElementById("input-oferta")
const btnPuja = document.getElementById("btn-poxar")
let articuloRaw = {}
let articulo = null
ws.onopen = (ev) => {
    console.log("Conectado")
}
ws.onmessage = ((mensaje) => {
    let dataParsed = JSON.parse(mensaje.data)
    console.log(dataParsed.tipo)
    console.log(dataParsed.artigo)
    articuloRaw = dataParsed.artigo
    switch (dataParsed.tipo) {
        case "ESTADO_INICIAL":
            console.log("Opcion tipo")
            articulo = convertirArticulo(articuloRaw)
            console.log(articulo)
            articulo.renderizar()
            break;
        case "ACTUALIZACION":
            console.log("qwses")
            articulo.actualizarDesdeJSON(articuloRaw)
            console.log(articulo)
            articulo.renderizar()
            break;
        case "TICK":

            articulo.tempo = dataParsed.tempo

            articulo.renderizar()
            break;

        case "FIN":
            console.log("La puja a terminado")
            const stringGanador = `<p><strong>Ganador: ${dataParsed.gañador}</strong></p>`
            document.getElementById("poxador-actual").innerHTML = stringGanador

        default:
            break;

    }
})



btnPuja.addEventListener("click", () => {
    const usuario = new Usuario(usuarioIPT.value, ofertaIPT.value)
    enviarPuja(usuario)

})


class Usuario {
    constructor(nombre, puja, id = new Date().valueOf()) {
        this._id = id
        this._nombre = nombre
        this._puja = puja

    }

}

function convertirArticulo(articuloRaw) {
    let articulo = new Artigo(articuloRaw.id, articuloRaw.nome, articuloRaw.prezoActual, articuloRaw.poxadorActual)
    articulo.tempo = articuloRaw.tempoRestante
    return articulo
}

function enviarPuja(usuario) {
    let cantidad = usuario._puja


    ws.send(JSON.stringify({ tipo: "POXA", valor: usuario._puja, usuario: usuario._nombre }))

}