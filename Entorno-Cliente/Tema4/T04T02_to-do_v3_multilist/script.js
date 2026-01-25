//Declaracion de objetos
class Lista {

    constructor(nombreLista, tareasLista = []) {

        this._tareasLista = tareasLista
        this._nombreLista = nombreLista
    }

    renderizarTareasNota(nota) {
        let tareasLista = document.createElement("ul")
        tareasLista.classList.add("lista-tarefas")

        this._tareasLista.forEach((tarea) => {
            const tareaLi = document.createElement("li")
            const inputEstado = document.createElement("input")
            inputEstado.setAttribute("type", "checkbox")
            if (tarea._estado) {
                console.log("prueba")
                inputEstado.toggleAttribute("checked")
                tareaLi.classList.toggle("completada")
            }
            const spanNombre = document.createElement("span")
            spanNombre.textContent = tarea._nombre
            inputEstado.addEventListener("click", () => {
                console.log(tarea)
                tarea.alternarTarea()
                tareaLi.classList.toggle("completada")
                guardarListasLocalStorage()
            })
            const btnEliminar = document.createElement("button")
            btnEliminar.textContent = "✖️"
            btnEliminar.addEventListener("click", () => {
                this.eliminarTarea(tarea._id)
                tareaLi.remove()
                guardarListasLocalStorage()
            })
            tareaLi.appendChild(inputEstado)
            tareaLi.appendChild(spanNombre)
            tareaLi.appendChild(btnEliminar)

            tareasLista.appendChild(tareaLi)
        })
        // return tareasLista
        nota.appendChild(tareasLista)
        guardarListasLocalStorage()

    }
    añadirTarea(inputAñadirTarea) {
        console.log("Entrando en añadir tarea")
        let nombre = inputAñadirTarea.value
        const tarea = new Tarea(nombre)

        this._tareasLista.push(tarea)
        console.log(`Tareas dentro de la lista: ${this._nombreLista}: ${this._tareasLista}`)


    }
    eliminarTarea(id) {
        console.log("EliminarTarea con id:", id)
        this._tareasLista = this._tareasLista.filter((tarea) => tarea._id != id)
    }
}

class GestorLista {

    constructor() {
        this._listadoListas = leerListasLocaLStorage() || []
    }
    renderizarListas() {
        console.log("Renderizando listas almacenadas...")
        contenedorListas.innerHTML = ""
        this._listadoListas.forEach((lista) => {
            let nota = document.createElement("li")
            nota.classList.add("nota")
            let titulo = document.createElement("h3")
            titulo.textContent = lista._nombreLista
            let btnEliminar = document.createElement("button")
            btnEliminar.classList.add(".btn-eliminar-nota")
            btnEliminar.textContent = "Eliminar lista"
            btnEliminar.addEventListener("click", () => {
                this.eliminarLista(lista._nombreLista)
                this.renderizarListas()
                guardarListasLocalStorage()
            })
            let divAñadirTarea = document.createElement("div")
            divAñadirTarea.classList.add("form-engadir-tarefa")
            let inputAñadirTarea = document.createElement("input")
            inputAñadirTarea.setAttribute("type", "text")
            let btnAñadirTarea = document.createElement("button")

            btnAñadirTarea.addEventListener("click", () => {
                lista.añadirTarea(inputAñadirTarea)
                this.renderizarListas()

            })

            // let tareasLista=lista.renderizarTareasNota()
            btnAñadirTarea.textContent = "+"
            divAñadirTarea.appendChild(inputAñadirTarea)
            divAñadirTarea.appendChild(btnAñadirTarea)
            nota.appendChild(titulo)
            nota.appendChild(btnEliminar)
            console.log(lista)
            lista.renderizarTareasNota(nota)
            // nota.appendChild(tareasLista)
            nota.appendChild(divAñadirTarea)



            contenedorListas.appendChild(nota)

        })

        guardarListasLocalStorage()

    }
    eliminarLista(nombre) {
        this._listadoListas = this._listadoListas.filter((lista) => lista._nombreLista != nombre)
    }

}

class Tarea {
    constructor(nombre, id = `tarea${new Date().valueOf()}`, estado = false) {
        this._id = id
        this._nombre = nombre
        this._estado = estado
    }
    alternarTarea() {

        this._estado = (this._estado) ? false : true
    }
}

const btnNuevaLista = document.getElementById("btn-nova-lista")
const contenedorListas = document.getElementById("contedor-listas")
const gestor = new GestorLista()


function crearLista() {

    let nombreLista = prompt("Introduce el nombre de la lista")
    gestor._listadoListas.push(new Lista(nombreLista))
    gestor.renderizarListas()
}



btnNuevaLista.addEventListener("click", () => {
    crearLista()
    guardarListasLocalStorage()
})





function leerListasLocaLStorage() {
    const rawListas = localStorage.getItem("listas")
    const listaClean = transformarRawAObjetos(JSON.parse(rawListas))

    return listaClean
}
function transformarRawAObjetos(rawListas) {
    console.log(rawListas)

    if (rawListas.lenght == 0) {
        return []
    }
    const cleanListas = rawListas.map((lista) => {
        console.log(lista)
        lista = new Lista(lista._nombreLista, lista._tareasLista)
        lista._tareasLista = lista._tareasLista.map(tarea => {
            tarea = new Tarea(tarea._nombre, tarea._id, tarea._estado)
            return tarea
        });


        return lista
    })
    return cleanListas

}



function guardarListasLocalStorage() {
    localStorage.setItem("listas", JSON.stringify(gestor._listadoListas))
}

document.addEventListener("DOMContentLoaded", () => {
    gestor.renderizarListas()
})