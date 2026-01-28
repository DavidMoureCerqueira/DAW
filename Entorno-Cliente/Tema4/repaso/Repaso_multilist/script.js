const iptNombreLista = document.getElementById("ipt-nombre-lista")
const btnNuevaLista = document.getElementById("btn-nova-lista")
const contenedorListas = document.getElementById("contedor-listas")

class Gestor {
    constructor() {
        this._listaListas = this.leerLocalStorage() || []
    }
    eliminarLista(nombreLista) {
        this._listaListas = this._listaListas.filter((lista) => lista._nombre != nombreLista)

    }
    añadirLista(lista) {
        this._listaListas.push(lista)
    }
    guardarEnLocalStorage() {
        localStorage.setItem("Listas", JSON.stringify(this._listaListas))
    }
    leerLocalStorage() {
        const listas = localStorage.getItem("Listas")
        if (listas == null) {
            return []
        }
        return transformarLocalStorage(listas)
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
        this._tareas = this._tareas.filter((tarea) => tarea._id != id)
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
                document.dispatchEvent(new CustomEvent("guardar-listas"))
            })
            const check = document.createElement("input")
            check.setAttribute("type", "checkbox")

            check.addEventListener("click", () => {
                liTarea.classList.toggle("completada")
                console.log(tarea)
                tarea.alternarTarea()
                console.log(tarea)
                document.dispatchEvent(new CustomEvent("guardar-listas"))
            })
            console.log("Antes del if", tarea._nombre, tarea._completada)
            if (tarea._completada) {
                console.log("Prueba")
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
    // renderizarListas()

    document.dispatchEvent(new CustomEvent("guardar-listas"))
    document.dispatchEvent(new CustomEvent("renderizar-listas"))

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
            document.dispatchEvent(new CustomEvent("guardar-listas"))
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
            // renderizarListas()
            console.log("pulsado añadir tarea, emitiendo eventos...")
            document.dispatchEvent(new CustomEvent("guardar-listas"))
            document.dispatchEvent(new CustomEvent("renderizar-listas"))
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


document.addEventListener("DOMContentLoaded",
    renderizarListas()
)

document.addEventListener("renderizar-listas", () => {
    console.log("Evento Capturado")
    renderizarListas()
})
document.addEventListener("guardar-listas", () => {
    console.log("Guardando...")
    gestor.guardarEnLocalStorage()
})

function transformarLocalStorage(listas) {

    let listasObject = JSON.parse(listas)
    console.log(listasObject)
    if (listasObject.length >= 0) {
        listasObject = listasObject.map((lista) => {
            lista._tareas = lista._tareas.map((tarea) => {
                console.log(tarea._completada)
                tarea = new Tarea(tarea._nombre, tarea._id, tarea._completada)
                console.log(tarea)
                return tarea
            })
            lista = new ListaTareas(lista._nombre, lista._tareas)
            return lista
        })
    }

    return listasObject


}
