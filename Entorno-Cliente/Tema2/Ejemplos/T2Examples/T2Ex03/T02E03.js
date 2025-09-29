//Salida de datos
console.log("Mensaje de log");
console.info("Informacion adicional");
console.warn("Advertencia");
console.error("Error simulado");


const compra = ['Patatas', 'Pescado', 'Pan', 'Lechuga', 'Almendras'];

console.table(compra);

console.group("COMEZO DO GRUPO");
console.log("Primeira mensaxe do grupo");
console.log("Segunda mensaxe do grupo");
console.groupEnd();



//Consola navegador

window.alert("Bienvenido a esta aplicacion")

//Manipulando DOM

const divSalida = document.getElementById("salida");
divSalida.innerHTML = "<p> <strong>Amigo </strong>Hola</p>";
// divSalida.textContent="<p> <strong>Amigo </strong>Hola</p>";    //No renderiza las etiquetas
// divSalida.innerText="<p> <strong>Amigo </strong>Hola</p>";      //No renderiza las etiquetas

divSalida.insertAdjacentHTML("beforebegin", "<div>Antes de la etiquta</div>");
divSalida.insertAdjacentHTML("afterbegin", "<div>Justo despues de abrir la etiqueta</div>");
divSalida.insertAdjacentHTML("beforeend", "<div>Justo antes de cerrar la etiqueta</div>");
divSalida.insertAdjacentHTML("afterend", "<div>Justo despues de cerrar la etiqueta</div>");


//Entrada de datos

const contestacion = window.confirm("Quieres continuar en la pagina?");

if (contestacion) {
    console.log("Has confirmado que quieres seguir en la pagina");
    divSalida.insertAdjacentHTML("beforeend", "<div>Gracias por quedarte</div>");
} else {
    console.log("El usuario cancelo");
    divSalida.insertAdjacentHTML("afterend", "<div>El usuario nos ha fallado</div>")
}

const nombre = window.prompt("Introduce tu nombre", "Ejemplo:Nombre")
if(nombre!=null && nombre.trim()!=''){
    console.log("El usuario se llama: ", nombre)
    divSalida.insertAdjacentHTML("beforeend", `<p>Un saludo: ${nombre}</p>`);
}else{
    console.log("El usuario cancelo el prompt")
    divSalida.insertAdjacentHTML("beforeend", `<p>Un saludo: Sin nombre</p>`);
}
