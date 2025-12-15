// tmporizador, si tarda mas 5 segundos que de error
// Leer del text y coger lo json a los que acceder
const listarUsuarios=document.getElementById('listaUsuarios')
const detallesUsuario=document.getElementById('detallesUsuario')
const mensaje=document.getElementById('mensaxe')

const btnCargar=document.getElementById('cargarUsuarios')
let datosUsuarios=[]
btnCargar.addEventListener('click',()=>{
    listarUsuarios.innerHTML='',
    detallesUsuario.innerHTML=''
    btnCargar.disabled=true
    obtenerUsuarios()
    .then(mostrarUsuarios)
    .catch(error=>{
        mensaje.textContent=error.message

    })
    .finally(()=>{
        btnCargar.disabled=false
    })
    
})

function mostrarUsuarios(){

}
function obtenerUsuarios(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/users');
    }).then((datos)=>{
        let datosJson=datos.json()
        resolve(()=>{

            console.log("Ha Json leido exitosamente") ;
            return datosJson;
        })
        reject(console.log("Url incorrecta imposible leer"))
    })
}


