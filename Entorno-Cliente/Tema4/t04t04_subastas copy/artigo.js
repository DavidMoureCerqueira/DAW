/**
 * Clase que representa o Artigo dende o punto de vista do cliente.
 */
export default class Artigo {
    constructor(id, nome, prezoActual, poxadorActual) {
        this.id = id;
        this.nome = nome;
        this.prezoActual = prezoActual;
        this.poxadorActual = poxadorActual;
        this.tempo = 0;
    }

    /**
     * Actualiza as propiedades do obxecto cos datos JSON do servidor.
     */
    actualizarDesdeJSON(datos) {
        this.prezoActual = datos.prezoActual;
        this.poxadorActual = datos.poxadorActual;
    }

    /**
     * Renderiza a información do obxecto no DOM.
     */
    renderizar(idArtigoNome = 'nome-artigo', idPrezoActual = 'prezo-actual', idPoxadorActual = 'poxador-actual', idCronometro = 'cronometro') {
        document.getElementById(idArtigoNome).textContent = this.nome;
        document.getElementById(idPrezoActual).textContent = this.prezoActual;
        document.getElementById(idPoxadorActual).textContent = this.poxadorActual;

        const cronoElemento = document.getElementById(idCronometro);
        cronoElemento.textContent = this.tempo;

        // Efecto visual de présa
        if (this.tempo < 10) {
            cronoElemento.classList.add('alerta');
        }
    }
}