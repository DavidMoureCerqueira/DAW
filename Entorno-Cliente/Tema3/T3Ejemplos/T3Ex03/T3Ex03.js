const info = document.getElementById('info')
const temporizador = document.getElementById('temporizador')
const ventana = document.getElementById('ventana')

temporizador.addEventListener('click', () => {
    let tiempo = prompt('Introduce un numero');
    if (!tiempo) {
        alert('Operacion cancelada')
        return false;
    }
    if (parseInt(tiempo) < 1) {
        alert('El numero tiene que ser mayor o igual a 1')
        return false;
    }
    let parrafo = document.createElement('p')

    let id = setInterval(() => {
        
        tiempo--;
        parrafo.textContent ='Quedan '+ tiempo + ' segundo(s)';
        if (tiempo % 2) {
            parrafo.style.color = 'blue';
        } else {
            parrafo.style.color = 'green'
        }
        
        if (tiempo == 0) {
            clearInterval(id);
            parrafo.textContent='Acabo el tiempo!!!!!!!!!'
            parrafo.style.color = 'red'
            alert('Acabo la cuenta!')
        }
    }, 1000)
    
    info.appendChild(parrafo);


});

ventana.addEventListener('click',()=>{
    let nuevaVentana=window.open('','_blank',"width=400, height=400")
    nuevaVentana.moveTo(0,0);
    nuevaVentana.resizeTo(screen.width/2, screen.height/2)

    nuevaVentana.document.writeln('Hola Mundo')
    setTimeout(()=>{
        if(!nuevaVentana.closed){
            nuevaVentana.close()
        }
    },2000)
})



//info:
info.innerHTML = 'Tamaño interno: ' + window.innerWidth + 'x' + window.innerHeight + '<br>'
info.innerHTML += 'Tamaño externo (incluye las barras de scroll): ' + window.outerWidth + 'x' + window.outerHeight + '<br>'
info.innerHTML += 'Posicion (desplazamiento desde la esquina superior izquierda): (' + window.screenX + '.' + window.screenY + ')'