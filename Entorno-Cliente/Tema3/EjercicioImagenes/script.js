//1er-Apartado
const infoNavegador = document.getElementById('info-navegador')
const infoSo = document.getElementById('info-so')
const urlActual = document.getElementById('url-actual')
const infoXeo = document.getElementById('info-xeoloc')

let alto = innerHeight
let ancho = innerWidth
window.addEventListener('resize', () => escribirLocation())

function escribirLocation() {
    infoNavegador.textContent = ''
    infoNavegador.textContent += navigator.userAgent;
    infoNavegador.textContent += ` con un tamaño de ${innerHeight} x ${innerWidth}`

}
infoSo.textContent = navigator.platform;
urlActual.textContent = location.href;
navigator.geolocation.getCurrentPosition(
    (posicion) => {
        const { latitude, longitude } = posicion.coords;
        infoXeo.textContent += `${latitude}, ${longitude}`
    },
    (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("El usuario ha denegado la solicitud de localizacion");
                break
            case error.POSITION_UNAVAILABLE:
                alert("La información de la localizacion no esta disponible");
                break
            case error.TIMEOUT:
                alert("La solicitud de localizacion expiro");
                break
            default:
                alert('Se produjo un error al obtener la localizacion')
        }
    }
)
escribirLocation()

//Segundo apartado

const imagenPrincipal = document.getElementById('imaxe-principal')

function mudarImaxe(idImaxe) {

    imagenPrincipal.setAttribute('src', 'imaxes/' + idImaxe);
    const state = { 
        foto: imagen
     }
    const url = "http://127.0.0.1:5500/Entorno-Cliente/Tema3/EjercicioImagenes/t03t01.html";
    history.pushState(state, "", url + '?' + imagen)
    /*
        imagenPrincipal.src=`imaxes/${imagen}`
        history.pushState({
        imaxe:idImaxe,url:`imaxe/${idImaxe}`
        },
        `Imaxe ${idImaxe}`,`?imaxe=${idImaxe}`);
        urlActualDisplay.text=Actualizo el display
    
    */
   /*
   window.addEventListener('popstate',(evento)=>{
    if(evento.state && evento.state.imaxe){
        imaxePrincipal.src=evento.state.url;
        urlActualDisplay.textContent=location.href;
        console.log(`[HISTORY]`)
    }else if(location.search==""){
    mudarImaxe('i1.png')}
    })
   */
}

function navegarHistorial(opcion) {
    if (opcion == 'atras') {

        history.back();
    

    }
    if (opcion == 'adiante') {
     
        history.forward();
      
    }
}
function abrirFiestraAviso(){
    const ventana=window.open('','_blank','width=400px, height=200px')
    ventana.document.writeln(/*html*/`
        <style>
            body{
                text-align:center;
                background-color:salmon;
            }
            .contenedor{
                border:2px solid red;
            }
        </style>
        <div class="contenedor">
        <h1>Aviso Temporal</h1>
        <div>Este es un aviso temporal de una ventana emergente</div>
        </div>
        `
    )
    setTimeout(()=>{
        if(!ventana.closed){
            ventana.close()
        }
    },5000)

}
function actualizarTituloPestana(){
    const titulo=document.getElementById('input-titulo').value
    document.title=titulo
}
