const nombreInput=document.getElementById('nombre-input')
const crearInput=document.getElementById('crear-localstorage')
const enseñarInput=document.getElementById('enseñar-localstorage')
const elminarInput=document.getElementById('eliminar-localstorage')
const informacion = document.getElementById('informacion')

crearInput.addEventListener('click',()=>{
    let nombre=nombreInput.value;
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('sesionIniciada','True')

})
enseñarInput.addEventListener('click',enseñarNombre)

function enseñarNombre(){
    let insertar=''
    let localS=localStorage.getItem('nombre');
    if(localS){
        insertar+=`<p><strong>Nombre guardado:</strong> ${localStorage.getItem('nombre')}</p>`
    }else{
        insertar+='<p>No hay nombres guardados</p>'
    }
    informacion.innerHTML=insertar
}
elminarInput.addEventListener('click',()=>{
    localStorage.removeItem('nombre')
    enseñarNombre()
})



