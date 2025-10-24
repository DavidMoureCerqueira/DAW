let preguntaPosicion=document.getElementById('pregunta');
let respuestaPosicion=document.getElementById('respuesta');
let listadoPreguntasPosicion=document.querySelector('.listadoPreguntas');
let listadoPreguntas=[]

function preguntarABob(){
    

    let pregunta=preguntaPosicion.value;
    console.log(pregunta)
    if(pregunta.endsWith('?')&&pregunta.toUpperCase()==pregunta){
        respuesta="Calm down, I know what I'm doing!"
    }
    else if (pregunta.endsWith('?')){
        respuesta='Sure'
        
    }
    else if(!pregunta){
        respuesta='Fine. Be that way!';
    }
    else if (pregunta.toUpperCase()==pregunta ){
        respuesta='Whoa, chill out!'
       
    }else{
        respuesta='Whatever.'
    }
    respuestaPosicion.innerText=respuesta
    preguntaPosicion.value='';
    
    listadoPreguntas.push(pregunta);
    escribirPreguntas();
}

function escribirPreguntas(){
    let insertarHTML=''
    listadoPreguntasPosicion.innerText='';
    for (let pregunta of listadoPreguntas){
         insertarHTML+=`<li class='listadoPregunta'>${pregunta}<button type='button' id=${pregunta} onclick='eliminarPregunta(id)'>✖️</button><button type='button' id=${pregunta} onclick='modificarPregunta(id)'>✏️</button></li>` 
    }
    listadoPreguntasPosicion.insertAdjacentHTML("beforeend",insertarHTML)
    
}

function eliminarPregunta(id){
    let listadoEliminado=listadoPreguntas.filter((pregunta)=>pregunta!=id)
    listadoPreguntas=listadoEliminado;
    escribirPreguntas()
}

function modificarPregunta(id){
    eliminarPregunta(id)
    preguntaPosicion.value=id
}