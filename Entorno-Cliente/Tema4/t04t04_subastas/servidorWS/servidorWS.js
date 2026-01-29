// Variables e configuración do servidor
const porto = 8088;
// Servidor de Poxas en Tempo Real
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: porto });
// Estado inicial do artigo (Simulación de base de datos)
let artigoEnPoxa = {
    id: 1,
    nome: "Reloxo Antigo de Ouro",
    prezoActual: 100,
    poxadorActual: "Ninguén",
    tempoRestante: 60 // segundos
};

// No iniciar cronómetro al arrancar; esperar condiciones.
let cronometro = null;
let firstBidMade = false;

function iniciarContaAtras() {
    if (cronometro) return; // ya iniciado
    cronometro = setInterval(() => {
        if (artigoEnPoxa.tempoRestante > 0) {
            artigoEnPoxa.tempoRestante--;
            // Notificar o tempo a todos
            difundirEstado({ tipo: "TICK", tempo: artigoEnPoxa.tempoRestante });
        } else {
            clearInterval(cronometro);
            cronometro = null;
            difundirEstado({ tipo: "FIN", gañador: artigoEnPoxa.poxadorActual });
            console.log(`Poxa ${artigoEnPoxa.nome} finalizada`);
        }
    }, 1000);
}

function comprobarIniContaAtras() {
    // Iniciar solo si hay mínimo 2 clientes y ya se ha hecho la primera puja
    if (!cronometro && firstBidMade && wss.clients && wss.clients.size >= 2) {
        iniciarContaAtras();
        console.log('Cronómetro iniciado (condiciones cumplidas: >=2 clientes y primera puja).');
    }
}

wss.on('connection', (ws) => {

    console.log("Novo cliente conectado");

    // Enviar estado inicial ao conectarse
    ws.send(JSON.stringify({ tipo: "ESTADO_INICIAL", artigo: artigoEnPoxa }));

    // Comprobar al conectar si ya se puede iniciar (por ejemplo, si la primera puja ya ocurrió antes)
    comprobarIniContaAtras();

    ws.on('message', (mensaxe) => {
        const datos = JSON.parse(mensaxe);

        if (datos.tipo === "POXA") {
            // Lóxica de validación: A poxa debe ser superior á actual
            console.log(datos)
            console.log(artigoEnPoxa.prezoActual)
            if (datos.valor > artigoEnPoxa.prezoActual) {
                artigoEnPoxa.prezoActual = datos.valor;
                artigoEnPoxa.poxadorActual = datos.usuario;
                if (artigoEnPoxa.tempoRestante < 30) {
                    artigoEnPoxa.tempoRestante += 15; // Extender tempo se queda curto
                }
                // Marcar que ya hubo la primera puja si aún no estaba
                if (!firstBidMade) {
                    firstBidMade = true;
                    // Intentar iniciar el cronómetro (si ya hay 2+ clientes)
                    comprobarIniContaAtras();
                }
                // Avisar a todos do novo prezo (Broadcast)
                difundirEstado({ tipo: "ACTUALIZACION", artigo: artigoEnPoxa });
            }
        }
    });
});

function difundirEstado(obxectoJSON) {
    console.log("Difundir")
    wss.clients.forEach(cliente => {
        if (cliente.readyState === WebSocket.OPEN) {
            cliente.send(JSON.stringify(obxectoJSON));
        }
    });
}

console.log(`Servidor de poxas escoitando no porto ${porto}...`);