const info=document.getElementById('info')
const boton =document.getElementById('localizacion')

let infoDiv=document.createElement('div');

function enseñarNavigator(){
    const informacion=` 
    User-Agent: ${navigator.userAgent}
    Nombre del navegador: ${navigator.appName}
    Versión del navegador: ${navigator.appVersion}
    Cookies: ${navigator.cookieEnabled}
    Lenguaje: ${navigator.language}
    Online: ${navigator.onLine}
    Plataforma: ${navigator.platform}
    `
    
    infoDiv.textContent="";
    infoDiv.innerHTML=informacion;
    info.appendChild(infoDiv)
 
}

boton.addEventListener('click',()=>{
    if(!navigator.geolocation){
        return alert('Geolocalización no soportada')
    }
    //Como funciona la geolocalocalizacion. primer parametro se pasa la posicion y el segundo es el error
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            const{latitude,longitude}=posicion.coords;
            infoDiv.innerHTML+=`\n\nLocalizacion actual :\nLatitud: ${latitude}\nLongitud: ${longitude}`
        },
        (error)=>{
            switch(error.code){
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

})
enseñarNavigator();