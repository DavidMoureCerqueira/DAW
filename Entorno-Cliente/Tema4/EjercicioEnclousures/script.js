const btnAñadir=document.getElementById("btn-gardar")
const btnEliminar=document.getElementById("btn-cancelar")
const resultado=document.getElementById("resultado")
// function crearContador(){
//     let contador=0
//     return ()=>{ return ++contador}
// }
// let contadorGuardar=crearContador()
// let contadorCancelar=crearContador()

// btnAñadir.addEventListener("click",()=>{resultado.innerHTML+="El boton de añadir se ha pulsado " + contadorGuardar()+ " veces <br>"})
// btnEliminar.addEventListener("click",()=>{resultado.innerHTML+="El boton de eliminar se ha pulsado " + contadorCancelar()+ " veces <br>"})

// COMO LO HIZO EL
// function crearContadorBoton(boton){
//     let contador=0;   
//         boton.addEventListener("click",()=>{
//             // resultado.innerHTML+=contadorGuardar()+ "<br>"
//             resultado.innerHTML+="El boton "+ boton.textContent + " se ha pulsado "+ ++contador+ "<br>"
//         })
// }
// crearContadorBoton(btnAñadir)
// crearContadorBoton(btnEliminar)


//Otra solucion
// function crearContador(){
//     let contador=0
//     return ()=>{ return ++contador}
// }
// let contadorGuardar=crearContador()
// let contadorCancelar=crearContador()

// btnAñadir.addEventListener("click",()=>{resultado.innerHTML+="El boton de añadir se ha pulsado " + contadorGuardar()+ " veces <br>"})
// btnEliminar.addEventListener("click",()=>{resultado.innerHTML+="El boton de eliminar se ha pulsado " + contadorCancelar()+ " veces <br>"})

function crearContador(){
    let contador=0
    return  (boton)=>{resultado.innerHTML+=`<p>El boton ${boton.textContent} se pulsó ${++contador} veces</p>`}
}
const crearContadorBoton=crearContador()
btnAñadir.addEventListener("click",(e)=>{
    crearContadorBoton(e.target)
})

