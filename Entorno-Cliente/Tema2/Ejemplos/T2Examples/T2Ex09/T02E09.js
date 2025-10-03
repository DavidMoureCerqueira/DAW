//Bucle while basico

let contador=1;

while (contador<=5) {
    console.log("Iteración número:", contador);
    contador++;
}
console.log("Version true")
contador=1;
while (true) {
    console.log("Iteración número:", contador);
    contador++;
    if (contador>5) {
        break;
    }
}

let numero=prompt("Introduce un numero positivo:")
while (isNaN(numero)||numero<=0){
    numero=prompt("Valor incorrecto. Introduce un numero positivo");
}

console.log("Numero valido", numero)