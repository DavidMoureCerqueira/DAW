//Tamaño interno de la ventana, tanto ancho como alto

console.log('Alto x Ancho')
console.log(innerHeight + 'x' + innerWidth)
//Posicion de la ventana dentro de la pantalla empieza desde arriba a izquierda
console.log(screenX,'x',screenY,'y')

// alert('Bienvenido a esta aplicación')
// let confirmacion=confirm('Quieres continuar?')
// if (confirmacion){
    let opinion=prompt('Como te llamas','Anónimo')
//     if(opinion) console.log(opinion)
// }

// setTimeout(()=>{
//     console.log('Este mensaje se muesta en tres segundos')

// },3000)

// let idIntervarlo=setInterval(()=>{
//     console.log(new Date().toLocaleTimeString())
// },1000)

// setTimeout(()=>{
//     clearInterval(idIntervarlo)
// },5000)

//Crear nueva venta
// let nuevaVentana=window.open('','_blank',"width=300px, height=300px")

// setTimeout(() => {
//     //Si no esta ceerrada le introducimos texto
//     if(!nuevaVentana.closed){
//         nuevaVentana.document.writeln('Hola Mundo')
//     }
    
// }, 5000);
// //A los 10 segundos si no esta cerrada la cerramos
// setTimeout(() => {
//     if(!nuevaVentana.closed){
//         nuevaVentana.close();
//     }
// }, 10000);
//Horizontal y verticual ESTOY NECESITANDO REINICIAR EL LIVESERVER
window.scrollBy(0,1000) //Baja una cantidad x a mayores de la que esta

setTimeout(() => {
    window.scrollTo(0,0) //Va a la posicion que le digamos
}, 2000);

sessionStorage.setItem('usuario',opinion)
console.log('Almacenado en sesión usuario',sessionStorage.getItem('usuario'))