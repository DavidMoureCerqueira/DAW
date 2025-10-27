

let posicionTarea=document.getElementById('entrada-tarefa');
let posicionListadoTarea=document.getElementById('lista-tarefas');
let listadoTareas=[]
function engadirTarefa(){
    let nombreTarea=posicionTarea.value.trim();


    if(!nombreTarea){
        alert("Es necesario que la tarea tenga nombre")
        return false;
    }

    if(listadoTareas.some((tarea)=>tarea.nombre==nombreTarea)){
        alert("La tarea ya esta almacenada")    ;
    }

    let tarea={
        id:new Date().valueOf(),
        nombre:nombreTarea,
        completada:false
    }
    listadoTareas.push(tarea);
    renderizarTarefas();
    posicionTarea.value='';
    posicionTarea.focus();
}

function completarTarefa(id){
    let tarea=listadoTareas.find((tarea)=>tarea.id==id);
    if(tarea.completada==true)
    tarea.completada=false;
    else{
        tarea.completada=true;
    }
    renderizarTarefas()
}
function eliminarTarefa(id){
    listadoTareas=listadoTareas.filter((tarea)=>tarea.id!=id);
    renderizarTarefas();
}
function renderizarTarefas(){
    let paco='paco'
    paco.charCodeAt(0)
     listadoTareas.sort((a,b)=>a.nombre.charCodeAt(0)-b.nombre.charCodeAt(0))
    let cadenaHTMLAInsertar='';
    listadoTareas.forEach(tarea => {
        if(tarea.completada==true){
            cadenaHTMLAInsertar+="<li class='elemento-tarefa completada'>"; 
        }else{
            cadenaHTMLAInsertar+="<li class='elemento-tarefa'>"; 
        }
        cadenaHTMLAInsertar+=`${tarea.nombre}`;
        cadenaHTMLAInsertar+=`<div><button class='btn-completar' id=${tarea.id} onclick='completarTarefa(id)'>✔</button>`;
        cadenaHTMLAInsertar+=`<button class='btn-eliminar' id=${tarea.id} onclick='eliminarTarefa(id)'>✖</button></div>`;
        cadenaHTMLAInsertar+='</li>';

    });
    posicionListadoTarea.innerHTML=cadenaHTMLAInsertar;
}