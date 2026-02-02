const btnAñadirLista = document.getElementById("btn-nova-lista")
const iptNuevaLista = document.getElementById("ipt-nombre-lista")
const contenedorListas = document.getElementById("contedor-listas")

class Gestor {
    constructor() {
        this._listas = this.leerSessionStorage() || []
    }

    añadirLista(lista) {
        this._listas.push(lista)
    }
    eliminarLista(id) {
        console.log(this._listas)
        this._listas = this._listas.filter((lista) => lista._id != id)
        console.log(this._listas)
    }
    encontrarListaPorId(idLista) {
        return this._listas.find((lista) => lista._id == idLista)

    }
    guardarSessionStorage() {
        sessionStorage.setItem("listas", JSON.stringify(this._listas))
    }
    leerSessionStorage() {
        const listasRaw = sessionStorage.getItem("listas")
        const listasClean = transformarSessionStorage(JSON.parse(listasRaw))
        console.log(listasClean)
        return listasClean
    }
}

class Lista {
    constructor(nombre, tareas = [], id = new Date().valueOf()) {
        this._id = id
        this._nombre = nombre
        this._tareas = tareas
    }
    añadirTarea(tarea) {
        this._tareas.push(tarea)
        console.log(this._tareas)

    }
    eliminarTarea(id) {
        this._tareas = this._tareas.filter((tarea) => tarea._id != id)

    }
    encontrarTareasPorId(id) {
        return this._tareas.find((tarea) => tarea._id == id)
    }

}


class Tarea {
    constructor(nombre, id = new Date().valueOf(), completada = false) {
        this._id = id
        this._nombre = nombre
        this._completada = completada
    }
    alternarCompletada() {
        this._completada = this._completada ? false : true
    }

}

const gestor = new Gestor()


function transformarSessionStorage(listas) {
    if (listas == null || listas.length == 0) {
        return []
    }
    listas = listas.map((lista) => {
        lista._tareas = lista._tareas.map((tarea) => {
            tarea = new Tarea(tarea._nombre, tarea._id, Number(tarea._completada))
            return tarea
        })
        lista = new Lista(lista._nombre, lista._tareas, Number(lista._id))
        return lista
    })
    return listas;
}


function renderizarListas() {
    contenedorListas.innerHTML = ""
    gestor._listas.forEach(lista => {
        const notaLi = document.createElement("li")
        notaLi.classList.add("nota")
        notaLi.dataset.id = lista._id
        const titulo = document.createElement("h3")
        titulo.textContent = lista._nombre
        const btnEliminar = document.createElement("button")
        btnEliminar.classList.add("btn-eliminar-nota")
        btnEliminar.textContent = "✖️ Eliminar Lista"
        const divInput = document.createElement("div")
        divInput.classList.add("form-engadir-tarefa")
        const input = document.createElement("input")
        input.type = "text"
        const btnAñadir = document.createElement("button")
        btnAñadir.type = "button"
        btnAñadir.textContent = "+"
        btnAñadir.classList.add("btn-añadir-tarea")
        divInput.appendChild(input)
        divInput.appendChild(btnAñadir)
        const tareas = renderizarTareas(lista)

        notaLi.appendChild(titulo)
        notaLi.appendChild(btnEliminar)
        notaLi.appendChild(tareas)

        notaLi.appendChild(divInput)
        contenedorListas.appendChild(notaLi)
    });
}

function renderizarTareas(lista) {
    const tareasUl = document.createElement("ul")
    tareasUl.classList.add("lista-tarefas")
    lista._tareas.forEach(tarea => {
        const tareaLi = document.createElement("li")
        tareaLi.dataset.id = tarea._id
        const check = document.createElement("input")
        check.type = "checkbox"
        console.log(tarea._completada)
        if (tarea._completada) {
            console.log("entrar")
            check.checked = true
            tareaLi.classList.add("completada")
        }
        const spanNombre = document.createElement("span")
        spanNombre.textContent = tarea._nombre
        const btnEliminar = document.createElement("button")
        btnEliminar.classList.add("btn-eliminar-tarefa")
        btnEliminar.textContent = "✖️"

        tareaLi.appendChild(check)
        tareaLi.appendChild(spanNombre)
        tareaLi.appendChild(btnEliminar)
        tareasUl.appendChild(tareaLi)
    });

    return tareasUl

}
function guardarYRenderizar(){
    gestor.guardarSessionStorage()
    renderizarListas()
}
document.addEventListener("DOMContentLoaded", () => {
    renderizarListas()

})


document.addEventListener("click", (ev) => {
    if (ev.target.id == "btn-nova-lista") {
        const nombreLista = iptNuevaLista.value;
        if (!gestor._listas.some((lista) => lista._nombre == nombreLista) && nombreLista) {
            gestor.añadirLista(new Lista(nombreLista))
            guardarYRenderizar()
        } else {
            console.log("El nombre de la tarea ya existe o esta vacío")
        }
    }
    else if (ev.target.classList.contains("btn-eliminar-nota")) {
        console.log("clickado")
        const idEliminar = ev.target.closest("li").dataset.id
        gestor.eliminarLista(idEliminar)
        guardarYRenderizar()
    }
    else if  (ev.target.classList.contains("btn-eliminar-tarefa")) {
        const idLista = ev.target.closest(".nota").dataset.id
        const idTarefa = ev.target.closest("li").dataset.id
        const lista = gestor.encontrarListaPorId(idLista)
        if (lista != null) {
            lista.eliminarTarea(idTarefa)
            guardarYRenderizar()
        }
    }
    else if  (ev.target.type === "checkbox") {

        const tareaLi = ev.target.closest("li")
        const notaLi = ev.target.closest(".nota")
        const lista = gestor.encontrarListaPorId(notaLi.dataset.id)
        const tarea = lista.encontrarTareasPorId(ev.target.closest("li").dataset.id)
        tarea.alternarCompletada()
        guardarYRenderizar()
    }
    else if  (ev.target.classList.contains("btn-añadir-tarea")) {
        console.log("entradoasdsdfgf")
        const nota = ev.target.closest(".nota")
        const divInput = ev.target.closest("div")
        const input = divInput.querySelector("input")
        let nombreTarea = input.value
        const listaID = nota.dataset.id
        const lista = gestor.encontrarListaPorId(listaID)
        lista.añadirTarea(new Tarea(nombreTarea))
        guardarYRenderizar()
    }
})

