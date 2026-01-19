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
televisor.conectar()
televisor.mostrarDatos()
DispositivoModerno.mostrarTotal()

// HERENCIA

class Termostato extends DispositivoModerno {
    constructor(nombre, fabricante, temperatura) {
        super(nombre, fabricante)
        this._temperatura = temperatura

    }
    // GETTER
    get temperatura() {
        return this._temperatura
    }
    // SETTER
    set temperatura(nuevaTemperatura) {
        if (nuevaTemperatura < 5 || nuevaTemperatura > 35) {
            console.error("Temperatura fuera del rango de seguridad")
        } else {

            this._temperatura = nuevaTemperatura
            console.log(`Ajustando temperatura a ${nuevaTemperatura} ºC`)
        }
    }

}
let termostato1 = new Termostato("Celsius", "Johnson", 25)

console.log(termostato1)
termostato1.temperatura = 25
console.log(termostato1)
console.log("La temperatura es de: " + termostato1.temperatura + " ºC")

try {
    termostato1.mostrarTotal()
} catch (error) {
    console.log("ERROR")
}


class Sensor extends DispositivoModerno {
    // Ejemplo de como utilizar sobrecarga de metodos
    constructor(arg1, arg2) {
        super("sensorGenerico", "fabricanteEstandar")
        if (arguments.length == 0) {
            this._tipo = "temperatura"
            this._unidad = "ºC"
        } else if (arguments.length == 1 && typeof arg1 == "string") {
            this._nombre = arg1
            this._tipo = arg1
            this._unidad = "ºC"
        } else if (typeof arg1 == "object") {
            this._nombre = arg1.nombre
            this._tipo = arg1.tipo
            this._unidad = arg1.unidad || "ºC"
            this._fabricante = arg1.fabricante
        }

    }

    leer() {
        console.log(`Nombre: ${this._nombre} --- Unidad: ${this._unidad} --- Tipo: ${this._tipo} --- Fabricante: ${this._fabricante}`)
    }

}

let sensorBasico = new Sensor()
let sensorMovimiento = new Sensor("Movimiento")
let sensorHumo = new Sensor({
    nombre: "Sensor salón",
    tipo: "Humo",
    unidad: "ºC",
    fabricante: "Samsung"
})

sensorBasico.leer()
sensorMovimiento.leer()
sensorHumo.leer()

// PATRON DE DISEÑO --> FACTORIA DE MÉTODOS
// metodos que se encargan de crear objetos en función a diferentes tipos de parámetros
class SensorPro {
    constructor(nombre, tipo, unidad) {
        this._nombre = nombre
        this._tipo = tipo
        this._unidad = unidad
    }

    // Creamos una funcion statica para crear objetos
    static crearSensorAgua(nombre) {
        return new SensorPro(nombre, "inundación", "binario")
    }
    static crearDesdeJSON(json) {
        // AHORA ES UN OBJETO, lo hemos pasado de un JSON en texto a un objeto
        let datos = JSON.parse(json)
        return new SensorPro(datos.nombre, datos.tipo, datos.unidad)
    }
}

let sensorPro1 = SensorPro.crearSensorAgua("Aseo")
let sensorPro2 = SensorPro.crearDesdeJSON(`
    { 
    "nombre": "sensor JSON", 
    "tipo": "JSON", 
    "unidad": "string"
     }`)
console.log(sensorPro1)
console.log(sensorPro2)