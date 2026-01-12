"use strict"
try {

    x = 10 //ReferenceError
} catch (error) {
    console.warn(error)
}

try {
    let persona = {
        nombre: 'David',
        edad: 29
    }
    // Freeze permite modificar pero no añadir nuevas propiedades
    let persona2 = Object.freeze(persona) 
    persona.apellido="Moure"
    persona2.apellido="Moure"
    console.log(persona)

    // persona2.apellido="Moure"
} catch (error) {
    console.warn(error)
}


// En lugar del objeto window devuelve undefined
function contexto(){
    console.log(this)
}
contexto()

try{
    // Da error de sintaxis si se utilizan dos parametros con el mismo nombre
    
    function saludar(nombre, nombre){
        console.log("Hola", nombre)
    }
    saludar("David", "Paco")
}catch(error){
    console.warn(error)
}