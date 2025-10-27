// VARIABLES GLOBAIS
let posicionTablero = document.getElementById('taboleiro');
let posicionMensaje=document.getElementById('mensaxe');
let posicionContadorJugadas=document.getElementById('contador-xogadas');
// Arrays de emoticonos 
let emoticonosBase = ['🌟', '🌜', '🌤️', '⛈️', '🏀', '🚿', '🥗', '🦀'];

// Variables de estado do xogo
let estadoTaboleiro = []; // Almacena o estado (virada, atopada, etc.)
let cartasViradas = []; // Almacena os índices das cartas viradas actualmente
let bloqueoTaboleiro = false;
let paresAtopados = 0;
let xogadas = 0;


// FUNCIONES

// Función para embarallar un array (algoritmo de Fisher-Yates)
function embarallarArray(array) {
    let indiceActual = array.length;
    let valorTemporal;
    let indiceAleatorio;

    while (indiceActual !== 0) {
        indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual--;

        valorTemporal = array[indiceActual];
        array[indiceActual] = array[indiceAleatorio];
        array[indiceAleatorio] = valorTemporal;
    }

    return array;
}

// Función para inicializar e xerar o estado do taboleiro
function iniciarXogo() {
    let emoticonosInicial = [...emoticonosBase, ...emoticonosBase];
    let emoticonos = embarallarArray(emoticonosInicial);

    emoticonos.forEach((emoticono, index) => {

        estadoTaboleiro.push({
            id: index,
            volteada: false,
            encontrada: false,
            carta: emoticono
        })

    });
    console.log(estadoTaboleiro)
    renderizarTaboleiro();

}

// Función para renderizar todo o taboleiro usando innerHTML
function renderizarTaboleiro() {
   
    let HTMLInsertar = '';
    estadoTaboleiro.forEach(carta => {
       
        if(carta.volteada && !carta.encontrada){

            HTMLInsertar += "<div class='carta volteada'>"
            HTMLInsertar += `<button type='button'  id=${carta.id} onclick='voltearCarta(id)'>${carta.carta}</button></div>`
        } 
        // else if(!carta.volteada && carta.encontrada){

        //     HTMLInsertar += "<div class='carta encontrada'>"
        //     HTMLInsertar += `<button type='button'  id=${carta.id} onclick='voltearCarta(id)'>${carta.carta}</button></div>`
        // } 
        else if(carta.volteada && carta.encontrada){
            
            HTMLInsertar += "<div class='carta volteada encontrada'>"
            HTMLInsertar += `<button type='button'  id=${carta.id} onclick='voltearCarta(id)'>${carta.carta}</button></div>`
        }
        else{
            HTMLInsertar += "<div class='carta '>";
            HTMLInsertar += `<button type='button'  id=${carta.id} onclick='voltearCarta(id)'>?</button></div>`
        }
         

    });

    posicionTablero.innerHTML=HTMLInsertar;


}

// Lóxica para voltear as cartas
function voltearCarta(indice) {
    if (cartasViradas.length<=2){
        let cartaVirada=estadoTaboleiro.find((carta)=>carta.id==indice);
        cartaVirada.volteada=true;
        cartasViradas.push(cartaVirada);
        renderizarTaboleiro()
    }
    if (cartasViradas.length==2){

        actualizarJugadas()
        setTimeout(comprobarParella(),900);

        
    }
}

// Función para comprobar se as cartas volteadas son unha parella
function comprobarParella() {
    
    if(cartasViradas[0].carta==cartasViradas[1].carta && cartasVirada[0].id !=cartasViradas[1].id){
        cartasViradas[0].encontrada=true;
        cartasViradas[1].encontrada=true;
        paresAtopados++;

    }
    
    cartasViradas.forEach(carta => {
        if(carta.volteada && !carta.encontrada){
    
            carta.volteada=false;
        }
    });
    cartasViradas=[]
    posicionMensaje.innerText=`Has encontrado ${paresAtopados}`
    renderizarTaboleiro()
}

function actualizarJugadas(){
    xogadas++;
    let HTMLInsertar=`Xogadas: ${xogadas}`;
    posicionContadorJugadas.innerText=HTMLInsertar;

    
}

// Inicia o xogo
iniciarXogo();