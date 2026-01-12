const avo = document.getElementById("avo")
const pai = document.getElementById("pai")
const fillo = document.getElementById("fillo")




// BUBBLING:

avo.addEventListener('click', () => { console.log("🔵🔼BUBBLING: El abuelo recibió el click") }, false);
pai.addEventListener('click', (event) => {
    console.log("🔵🛑BUBBLING: El padre recibió  el click")
    console.warn("Parando el evento en el nivel PAI...")
    event.stopPropagation()
    // Existe tambien .stopInmediatePropagation() --> Afecta a todos los event listeners que pueda tener NO ENTRA

}, false);





fillo.addEventListener('click', () => { console.log("🔵🔼BUBBLING: El hijo recibió el click") }, false);


// En caso de querer eliminar el eventlistener del padre NO SE PUEDE ELIMINAR SI UTILIZA FUNCION FLECHA O FUNCION ANONIMA

// pai.removeEventListener("click", manejadorPadre(e), false)


//CAPTURING:

avo.addEventListener('click', () => { console.log("🟢🔽CAPTURING: abuelo") }, true);
pai.addEventListener('click', () => { console.log("🟢🔽CAPTURING: padre") }, true);
fillo.addEventListener('click', () => { console.log("🟢🔽CAPTURING: hijo") }, true);


// LISTA DINÄMICA:

const listaDinamica = document.getElementById("lista-dinamica");

const elementosAñadir = 20;
let contador = elementosAñadir
for (let index = 1; index <= elementosAñadir; index++) {
    const li = document.createElement('li')
    li.innerHTML += `
    <p>Elemento número ${index}</p>
    <button class='btn-engadir'>Añadir</button>
    <button class='btn-eliminar'>Eliminar</button>
    `
    listaDinamica.appendChild(li);



}

// Delegación de eventos:
// Se utiliza target y eso se crea una variable donde se almacena

listaDinamica.addEventListener("click", (event) => {
    const elementoClickado = event.target
    if (elementoClickado.classList.contains("btn-engadir")) {
        contador++
        const li=document.createElement("li")
        const liActual = elementoClickado.closest("li")

        li.innerHTML += `
    <p>Elemento número ${contador}</p>
    <button class='btn-engadir'>Añadir</button>
    <button class='btn-eliminar'>Eliminar</button>
    `
    
    liActual.insertAdjacentElement("afterend",li)
    }
    
    
    if (elementoClickado.classList.contains("btn-eliminar")) {
        const liActual=elementoClickado.closest("li")
        liActual.remove()
    }

})


