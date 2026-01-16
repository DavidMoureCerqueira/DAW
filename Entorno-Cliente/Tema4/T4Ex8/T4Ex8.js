let bombilla = {
    id: 1,
    marca: "Philips",
    intensidad: 80,
    encendida: false,
    // conmutarBombilla: function () {
    //     (this.encendida) ? this.encendida=false : this.encendida=true
    // }
    conmutarBombilla() {
        this.encendida = !this.encendida
        console.log(`La bombilla está ${(this.encendida) ? "encendida" : "apagada"}`)
    }
}
bombilla.conmutarBombilla()
bombilla.conmutarBombilla()
console.log(bombilla)


// Crear clase al estilo antiguo

function DispositivoViejo(nombre, consumo) {
    this.nombre = nombre
    this.consumo = consumo
    this.mostrarInfo = function () { console.log(`Dispositivo ${this.nombre} consume ${this.consumo}`) }
}

const radioRetro = new DispositivoViejo("Radio-Sony", 20)

radioRetro.mostrarInfo()

// Metodo moderno
// AL CREAR METODOS NO SE UTILIZA FUNCTION
class DispositivoModerno {
    // variable estatica de la clase
    static contadorDispositivos = 0

    constructor(nombre, fabricante) {
        this.nombre = nombre
        this.fabricante = fabricante
        this.conectado = false
        // Se accede dentro de la función aun como si estuvieses fuera, por medio del nombre de la funcion.nombrestatico
        DispositivoModerno.contadorDispositivos++
    }
    conectar() {
        this.conectado = true
        console.log(`${this.nombre} fabricada por  ${this.fabricante} está conectada`)
    }
    mostrarDatos() {
        console.log(`${this.nombre} fabricado por ${this.fabricante} esta ${this.conectado ? "conectado" : "desconectado"}`)
    }
    static mostrarTotal() {
        console.log(`El total de dispositivos creados es de ${DispositivoModerno.contadorDispositivos}`)
    }
}
let tostador = new DispositivoModerno("Tostadora", "Tudor")
let secador = new DispositivoModerno("Secador", "Philips")
let televisor = new DispositivoModerno("Televisor", "Cecotec")

tostador.conectar()
tostador.mostrarDatos()
secador.mostrarDatos()
televisor.mostrarDatos()
DispositivoModerno.mostrarTotal()

// HERENCIA

class Termostato extends DispositivoModerno {
    constructor(nombre, fabricante, temperatura) {
        super(nombre, fabricante)
        this.temperatura = temperatura

    }
    obtenerTemperatura() {
        return this.temperatura
    }
    establecerTemperatura(temperatura) {
        this.temperatura = temperatura
    }

}
let termostato1 = new Termostato("Celsius", "Johnson", 25)

console.log(termostato1)
termostato1.establecerTemperatura(299)
console.log(termostato1)
console.log("La temperatura es de: " + termostato1.obtenerTemperatura() + " grados")