let edades = [40, 17, 85, 40, 3, 24]
let letras = ["beta", "gamma", "alpha", "delta", "epsilon", "gamma", "omega"]
console.log("Array original de edades:" + edades)
console.log("Array original de edades:" + letras)

console.log(letras.includes("del")) //Busca el elemento entero
console.log(letras.includes("delta"))

console.log("indice: " + letras.indexOf('gamma'))
console.log("indice: " + letras.indexOf('gamma', 2)) //A partir de la posición 2, el elemento 3 (0,1,2)
console.log("indice: " + letras.lastIndexOf('gamma')) //El ultimo
console.log(letras.toString())
console.log(letras.join("-"))


console.log(letras.sort())
console.log(edades.sort())
console.log(edades.sort((a, b) => { return a - b })) //Menor a mayor los function podria ponersele nombre
console.log(edades.sort((a, b) => { return b - a })) //Mayor a menor o tambien con funcion de flecha


let claves = letras.keys()
for (let clave of claves) {
    console.log(clave)
}


