
console.log("Combinando Arrays");
const compra1 = ["Pan", "Leche", "Fruta"];
const compra2 = ["Patatas", "Chocolate"];

const compraTotal = [...compra1, ...compra2];

const copiaCompra = [...compraTotal];

copiaCompra.push("Cebolla");
console.log(compraTotal);
console.table(compraTotal);


console.log(copiaCompra);
console.table(copiaCompra)

//Objetos

const persona1 = {
    id: "1",
    nombre: "David",
    primerApellido: "Moure",
    segundoApellido: "Cerqueira"
};
const persona2 = {
    id: "2",
    nombre: "Yago",
    primerApellido: "Puente",
    segundoApellido: "Souto"
};

const personaCombinada = { ...persona1, ...persona2 };
const personaCopiada = { ...persona1 };
personaCopiada.id=1000;

console.log(personaCombinada);
console.table(personaCombinada);

console.log(personaCopiada);
console.table(personaCopiada);