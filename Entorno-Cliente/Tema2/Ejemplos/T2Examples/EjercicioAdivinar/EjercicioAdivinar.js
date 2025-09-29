const numeroAleatorio=Math.round(Math.random()*100);

const posicionMensaje=document.getElementById("mensaje");
const posicionIntentos=document.getElementById("intentos");

let intentos=0;

function intentarAdivinar(intento){
    
    intento++;
    posicionIntentos.insertAdjacentHTML("beforeend",intento)
    if(esNumeroValido(intento)){

        if(intento<numeroAleatorio){
            posicionMensaje.insertAdjacentHTML("beforeend", "El numero es mas alto");
        }
        else if(intento>numeroAleatorio){
            posicionMensaje.insertAdjacentHTML("beforeend", "El numero es mas bajo");
        }
        else{
            window.alert("Enhorabuena has acertado!!")
        }
    }else{
        posicionMensaje.insertAdjacentHTML("beforeend","El numero tiene que estar entre 0 y 100");
    }
}

function esNumeroValido(numero){
    if (numero<0 && numero>100){
        return false;
    }
    return true;
}