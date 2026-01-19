
// No se pueden declarar con función flecha como método
const persona = {
    nombre: "David",
    edad: 29,
    saludar: function () {

        console.log(`${this.nombre} dice hola y tiene ${this.edad} años`)
    }
}
persona.saludar()
const otraPersona = {
    nombre: "Almendro",
    edad: 22
}
persona.saludar.call(otraPersona)

const datos = { nombre: "Lucas", edad: 21 };
// El apply funciona como call que se utiliza sobre un objeto y  una descomposicion de un objeto
persona.saludar.apply(datos)

// persona.saludar.apply(otraPersona,datos);  NECESITA QUE EL SALUDAR RECIBIESE PARAMETROS PARA QUE FUNCIONASE