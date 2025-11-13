//Tamaño interno de la ventana, tanto ancho como alto

console.log('Alto x Ancho')
console.log(innerHeight + 'x' + innerWidth)
//Posicion de la ventana dentro de la pantalla empieza desde arriba a izquierda
console.log(screenX,'x',screenY,'y')

// alert('Bienvenido a esta aplicación')
// let confirmacion=confirm('Quieres continuar?')
// if (confirmacion){
//     let opinion=prompt('Como te llamas','Anónimo')
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


let nuevaVentana=window.open('','_blank',"width=300px, height=300px")

setTimeout(() => {
    if(!nuevaVentana.closed){
        nuevaVentana.document.writeln('Hola Mundo')
    }
    
}, 5000);

setTimeout(() => {
    if(!nuevaVentana.closed){
        nuevaVentana.close();
    }
}, 10000);