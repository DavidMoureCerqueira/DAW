


let posicionTarea = document.getElementById("entrada-tarefa");
let posicionListadoTareas = document.getElementById("lista-tarefas");

let tareasLS = []
renderizarTarefa()
console.log(tareasLS)



function engadirTarefa() {
    let tarea = posicionTarea.value.trim();


    //validaciones

    if (!tarea) {
        alert("No has introducido una tarea");
        return false;
    }
    if (!tareasLS.every((tareaEvento) => tareaEvento.nombre.toLowerCase() != tarea)) {
        alert("La tarea ya esta almacenada");
        return false;
    }
    let tareaObj = {

        nombre: tarea,
        terminada: false
    }
    //Creación Objeto
    tareasLS.push(tareaObj)
    localStorage.setItem(tareaObj.nombre, tareaObj.terminada)

    renderizarTarefa();

}

function arrayLocalStorage() {
    let arrayStorage = []
    for (let index = 0; index < localStorage.length; index++) {
        let clave = localStorage.key(index);
        let valor = localStorage.getItem(clave);
        arrayStorage.push({
            nombre: clave,
            terminada: (valor==="true")
        })
    }
    return arrayStorage;
}


function completarTarefa(nombre) {
    console.log(nombre)
    let tareaCompletada = null
    for (let tarea of tareasLS) {
        if (tarea.nombre == nombre) {
            tareaCompletada = tarea;
            break;
        }
    }
//  localStorage.setItem(textoTarefa,!(estadoActualStr==='true)) Para cambiar si es true que lo ponga false!!!!
    if (tareaCompletada.terminada == false) {

        tareaCompletada.terminada = true;
        localStorage.setItem(tareaCompletada.nombre,tareaCompletada.terminada)
    } else {
        tareaCompletada.terminada = false;
        localStorage.setItem(tareaCompletada.nombre,tareaCompletada.terminada)
    }

    renderizarTarefa()

}

function eliminarTarefa(nombre) {

    tareasLS = tareasLS.filter((tarea) => tarea.nombre != nombre);
    localStorage.removeItem(nombre)
    renderizarTarefa();
}

function renderizarTarefa() {
    //Ordenar TODO
    posicionListadoTareas.innerHTML = '';

    tareasLS.sort((a, b) => a.nombre.toLowerCase().charCodeAt(0) - b.nombre[0].toLowerCase().charCodeAt(0))
    let contenidoHTML = '';

    tareasLS.forEach(tarea => {
        contenidoHTML += "<li  ";
        if (tarea.terminada) {
            contenidoHTML += "class='elemento-tarefa completada'"
        } else {
            contenidoHTML += "class='elemento-tarefa'"
        }
        contenidoHTML += `> ${tarea.nombre}`
        contenidoHTML += "<div class='contedor-btns'>"
        contenidoHTML += `<button class='btn-completar' type='button' id=${tarea.nombre} onclick=completarTarefa(id)>✔</button>`
        contenidoHTML += `<button class='btn-eliminar' type='button' id=${tarea.nombre} onclick=eliminarTarefa(id)>✖</button>`

        contenidoHTML += '</div></li>'

    });
    posicionListadoTareas.innerHTML = contenidoHTML;

    posicionTarea.value = '';
    posicionTarea.focus();

}
document.getElementById('entrada-tarefa').addEventListener('keypress', (tecla)=>{
    if(tecla.key=='Enter'){
        engadirTarefa()
    }
})
document.addEventListener('DOMContentLoaded', () => {
    tareasLS = arrayLocalStorage()
    renderizarTarefa();
})
