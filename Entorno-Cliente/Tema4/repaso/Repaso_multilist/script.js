const iptNombreLista = document.getElementById("ipt-nombre-lista")
const btnNuevaLista = document.getElementById("btn-nova-lista")
const contenedorListas = document.getElementById("contedor-listas")

class Gestor {
    constructor() {
        this._listaListas = []
    }
    eliminarLista(nombreLista) {
        this._listaListas = this._listaListas.filter((lista) => lista._nombre != nombreLista)
    }
    añadirLista(lista) {
        this._listaListas.push(lista)
    }
    guardarEnLocalStorage(){
        localStorage.setItem("Listas", this._listaListas)
    }
    leerLocalStorage(){
        const listas=localStorage.getItem("Listas")
        // this._listaListas=transformarLocalStorage(listas)
    }
}

class ListaTareas {
    constructor(nombre, tareas = []) {
        this._nombre = nombre
        this._tareas = tareas
    }
    añadirTarea(tarea) {

        this._tareas.push(tarea)
    }
    eliminarTarea(id) {
        // this._listaTarea = this._listaTarea.filter((tarea) => tarea._id != id)
        console.log("Eliminando tarea con id:", id)
    }
    renderizarTareas() {
        const ulTareas = document.createElement("ul")
        ulTareas.classList.add("lista-tarefas")
        this._tareas.forEach((tarea) => {
            const liTarea = document.createElement("li")
            const spanNombre = document.createElement("span")
            spanNombre.textContent = tarea._nombre
            const btnEliminarTarea = document.createElement("button")
            btnEliminarTarea.textContent = "❌"
            btnEliminarTarea.classList.add("btn-eliminar-tarefa")
            btnEliminarTarea.addEventListener("click", () => {
                this.eliminarTarea(tarea._id)
                liTarea.remove()
            })
            const check = document.createElement("input")
            check.setAttribute("type", "checkbox")

            check.addEventListener("click", () => {
                liTarea.classList.toggle("completada")
                console.log(tarea)
                tarea.alternarTarea()
                console.log(tarea)
            })
            if (tarea._completada) {
                liTarea.classList.add("completada")
                check.setAttribute("checked", "")
            }

            liTarea.appendChild(check)
            liTarea.appendChild(spanNombre)
            liTarea.appendChild(btnEliminarTarea)
            ulTareas.appendChild(liTarea)
        })
        return ulTareas
    }
}

class Tarea {
    constructor(nombre, id = new Date().valueOf(), completada = false) {
        this._id = id
        this._nombre = nombre
        this._completada = completada
    }

    alternarTarea() {
        this._completada = (this._completada) ? false : true
    }
}

const gestor = new Gestor()
btnNuevaLista.addEventListener("click", () => {
    let nombreLista = iptNombreLista.value
    if (nombreLista == "") {
        console.log("Nombre no valido")
        return false
    }
    if (gestor._listaListas.some((lista) => lista._nombre == nombreLista)) {
        console.log("Ya existe una lista con ese nombre")
        return false
    }
    console.log(gestor._listaListas)
    gestor.añadirLista(new ListaTareas(nombreLista))
    renderizarListas()

})




function renderizarListas() {
    contenedorListas.innerHTML = ""
    console.log(gestor._listaListas)
    gestor._listaListas.forEach((lista) => {
        const divLista = document.createElement("div")
        divLista.classList.add("nota")
        const titulo = document.createElement("h3")
        titulo.textContent = lista._nombre
        const divBtnEliminar = document.createElement("div")
        const btnEliminar = document.createElement("button")
        btnEliminar.classList.add("btn-eliminar-nota")
        btnEliminar.textContent = "❌ Eliminar lista"
        btnEliminar.addEventListener("click", () => {
            gestor.eliminarLista(lista._nombre)
            divLista.remove()
        })
        divBtnEliminar.appendChild(btnEliminar)
        const divInput = document.createElement("div")
        divInput.classList.add("form-engadir-tarefa")
        const inputTarea = document.createElement("input")
        inputTarea.type = "text"
        const btnAñadirTarea = document.createElement("button")
        btnAñadirTarea.textContent = "+"
        btnAñadirTarea.addEventListener("click", () => {
            let tarea = new Tarea(inputTarea.value)
            lista.añadirTarea(tarea)
            renderizarListas()
        })
        divInput.appendChild(inputTarea)
        divInput.appendChild(btnAñadirTarea)
        divLista.appendChild(titulo)
        divLista.appendChild(divBtnEliminar)
        let listaTareasElement = lista.renderizarTareas(divLista)
        divLista.appendChild(listaTareasElement)

        divLista.appendChild(divInput)
        contenedorListas.appendChild(divLista)


    })
}


// document.addEventListener("DOMContentLoaded",
//     renderizarListas()
// )


