


let posicionTarea = document.getElementById("entrada-tarefa");
let posicionListadoTareas = document.getElementById("lista-tarefas");

let listadoTareas = []




function engadirTarefa() {
    let tarea = posicionTarea.value.trim();


    //validaciones

    if (!tarea) {
        alert("No has introducido una tarea");
        return false;
    }
    if (!listadoTareas.every((tareaEvento) => tareaEvento.nombreTarea.toLowerCase() != tarea)) {
        alert("La tarea ya esta almacenada");
        return false;
    }
    let tareaObj = {
        id: new Date().getTime(),
        nombreTarea: tarea,
        terminada: false
    }
    //Creación Objeto
    listadoTareas.push(tareaObj)


    renderizarTarefa(listadoTareas);

}

function completarTarefa(id) {
    console.log(id)
    let tareaCompletada = null
    for (let tarea of listadoTareas) {
        if (tarea.id == id) {
            tareaCompletada = tarea;
            break;
        }
    }
    // let tarea=listadoTareas.filter((tarea)=>tarea.id==id);
    if (tareaCompletada.terminada == false) {

        tareaCompletada.terminada = true;
    } else {
        tareaCompletada.terminada = false;
    }

    renderizarTarefa(listadoTareas)

}

function eliminarTarefa(id) {

    listadoTareas = listadoTareas.filter((tarea) => tarea.id != id);

    renderizarTarefa(listadoTareas);
}

function renderizarTarefa(listadoTareas) {
    //Ordenar TODO
    posicionListadoTareas.innerHTML = '';
    let paco = 'paco'

    listadoTareas.sort((a, b) => a.nombreTarea.toLowerCase().charCodeAt(0) - b.nombreTarea[0].toLowerCase().charCodeAt(0))
    let contenidoHTML = '';

    listadoTareas.forEach(tarea => {
        contenidoHTML += "<li  ";
        if (tarea.terminada) {
            contenidoHTML += "class='elemento-tarefa completada'"
        } else {
            contenidoHTML += "class='elemento-tarefa'"
        }
        contenidoHTML += `> ${tarea.nombreTarea}`
        contenidoHTML += "<div class='contedor-btns'>"
        contenidoHTML += `<button class='btn-completar' type='button' id=${tarea.id} onclick=completarTarefa(id)>✔</button>`
        contenidoHTML += `<button class='btn-eliminar' type='button' id=${tarea.id} onclick=eliminarTarefa(id)>✖</button>`

        contenidoHTML += '</div></li>'

    });
    posicionListadoTareas.innerHTML = contenidoHTML;

    posicionTarea.value = '';
    posicionTarea.focus();

}

