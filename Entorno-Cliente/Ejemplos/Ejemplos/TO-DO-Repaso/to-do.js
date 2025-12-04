
const nombreInput=document.getElementById('entrada-tarefa');
const posicionLista=document.getElementById('lista-tarefas');

let listadoTareas=[];

function engadirTarefa(){

    let nombreTarea=nombreInput.value;

    let idTarea=new Date().valueOf();


    // Validaciones
    if(!nombreTarea){
        console.log('No ha introducido un nombre')
        return false;
    }
    let tarea={
        id:idTarea,
        nombre:nombreTarea,
        completada:false,
    }
    listadoTareas.push(tarea)
    renderizarTarefas()
    nombreInput.value='';
    nombreInput.focus();

}

function completarTarefa(id){
    let tarea=listadoTareas.find((tarea)=>tarea.id==id);
    (tarea.completada)? tarea.completada=false:tarea.completada=true;
    renderizarTarefas()

}

function eliminarTarefa(id){
    let tareaIndex=listadoTareas.findIndex((tarea)=>tarea.id==id);
    listadoTareas.splice(tareaIndex,1);
    renderizarTarefas();
}

function renderizarTarefas(){
    let HTMLAInsertar='';
    listadoTareas.forEach(tarea => {
        if(tarea.completada){
            HTMLAInsertar+="<div class='elemento-tarefa completada' id='tarea.id'>"
        }else{
            HTMLAInsertar+="<div class='elemento-tarefa' id='tarea.id'>"
        }
        HTMLAInsertar+=`<span>${tarea.nombre}</span>`
        HTMLAInsertar+="<div class='contedor-btns'>"
        HTMLAInsertar+=`<button class="btn-completar" id=${tarea.id} onclick='completarTarefa(id)'>✔</button>`
        HTMLAInsertar+=`<button class="btn-eliminar" id=${tarea.id} onclick='eliminarTarefa(id)'>✖</button></div> `
        HTMLAInsertar+='</div>'
    });
    
    posicionLista.innerHTML=HTMLAInsertar;

}