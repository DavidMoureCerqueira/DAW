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
    console.log(dataParsed.artigo)
    articuloRaw = dataParsed.artigo
    switch (dataParsed.tipo) {
        case "ESTADO_INICIAL":
            console.log("Opcion tipo")
            articulo = new Artigo(articuloRaw.id, articuloRaw.nome, articuloRaw.prezoActual, articuloRaw.poxadorActual)
            articulo.tempo = articuloRaw.tempoRestante
            articulo.renderizar()
        case "ACTUALIZACION":
            console.log("Opcion actualización")
            console.log(articuloRaw)
        
        default:
            break;
        
    }
})



btnPuja.addEventListener("click", () => {
    const usuario = new Usuario(usuarioIPT.value,ofertaIPT.value)
    enviarPuja(usuario)

})


class Usuario{
    constructor(nombre,puja,id=new Date().valueOf()){
        this._id=id
        this._nombre=nombre
        this._puja=puja

    }

}

function enviarPuja(usuario){
    let cantidad=usuario._puja
    console.log(cantidad)
    console.log(JSON.stringify({tipo:"POXA", valor:usuario._puja}))
    
    ws.send(JSON.stringify({tipo:"POXA", valor:usuario._puja}))

}