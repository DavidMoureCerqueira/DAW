// Acordarse de que existe el completada

const listaTareas = document.getElementById("lista-tarefas")

const inputTarea = document.getElementById("entrada-tarefa")

// let listadoTareas=[]


function engadirTarefa() {
    const nombreTarea = inputTarea.value
    console.log("Realizando validaciones sobre la tarea")
    const listadoTareas = leerLocalStorage()
    if (!nombreTarea) {
        console.log("Es necesario introducir una tarea con nombre")
        return false;
    }

    if (listadoTareas.find((tarea) => tarea.nombre === nombreTarea)) {
        console.log("La tarea ya existe en el listado")
        inputTarea.value=""
        return false;
    }
    const tarea = {
        id: new Date().valueOf(),
        nombre: nombreTarea,
        completada: false
    }
    console.log("Objeto tarea creado")
    // listadoTareas.push(tarea)
    console.log("Objeto tarea añadido al array")
    inputTarea.value = ""
    inputTarea.focus()
    localStorage.setItem(tarea.id, JSON.stringify(tarea))

    renderizarTareas()


}

function renderizarTareas() {
    // listadoTareas=[...document.querySelectorAll(".elemento-tarefa")]
    const listadoTareas = leerLocalStorage()

    console.log("Renderizando tareas")
    listaTareas.innerHTML = ""
    listadoTareas.sort((a,b)=>a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase()))
    listadoTareas.forEach((tarea, index) => {

        const li = document.createElement("li")
        li.id = tarea.id
        li.classList.add("elemento-tarefa")
        const divNombre = document.createElement("div")
        divNombre.textContent = tarea.nombre
        if (tarea.completada == true) {
            divNombre.classList.add("completada")
        }
        const numeroTarea = document.createElement("span")
        numeroTarea.textContent = index + 1
        const divContenedorBotones = document.createElement("div")
        divContenedorBotones.classList.add("contenedor-btns")

        const btnCompletar = document.createElement("button")
        btnCompletar.classList.add("btn-completar")
        btnCompletar.textContent = "✔️"
        btnCompletar.addEventListener("click", () => {
            divNombre.classList.toggle("completada")
            tarea.completada = true
            localStorage.setItem(tarea.id,JSON.stringify(tarea))
        })

        const btnBorrar = document.createElement("button")
        btnBorrar.classList.add("btn-eliminar")
        btnBorrar.textContent = "✖️"
        btnBorrar.addEventListener("click", () => {
            li.remove()
            localStorage.removeItem(tarea.id)
            inputTarea.focus
        })
        divContenedorBotones.appendChild(btnCompletar)
        divContenedorBotones.appendChild(btnBorrar)
        li.appendChild(numeroTarea)
        li.appendChild(divNombre)
        li.appendChild(divContenedorBotones)

        listaTareas.appendChild(li)
    });
}

function leerLocalStorage() {
    let listado = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let tarea = localStorage.getItem(key)
        listado.push(JSON.parse(tarea))

    }
    console.log(listado)
    return listado;
}
inputTarea.addEventListener("keypress",(ev)=>{
    if(ev.key=="Enter"){
        engadirTarefa()
    }
})
document.addEventListener("DOMContentLoaded", () => {
    renderizarTareas()
})