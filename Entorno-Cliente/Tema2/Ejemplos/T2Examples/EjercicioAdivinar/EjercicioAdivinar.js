const numeroAleatorio=Math.round(Math.random()*100);
console.log(numeroAleatorio)

let posicionMensaje=document.getElementById("mensaje");
let posicionIntentos=document.getElementById("intentos");


let contadorIntentos=0;
posicionIntentos.innerText=`Intentos: ${contadorIntentos}`
posicionMensaje.innerText= "Recuerda entre 0 y 100";
function intentarAdivinar(){
    let intentoNum=document.querySelector("#intentoNum").value;
    console.log(intentoNum)
    contadorIntentos++;
    posicionIntentos.innerText=`Intentos: ${contadorIntentos}`
    if(esNumeroValido(intentoNum)){

        if(intentoNum<numeroAleatorio){
            posicionMensaje.innerText= "El numero es mas alto";
        }
        if(intentoNum>numeroAleatorio){
            posicionMensaje.innerText= "El numero es mas bajo";
        }
        if(intentoNum==numeroAleatorio){
            window.alert(`Enhorabuena has acertado!! en ${contadorIntentos} intentos`)
        }
    }else{
        posicionMensaje.innerText="El numero tiene que estar entre 0 y 100";
    }

}

function esNumeroValido(numero){
    if (numero>0 && numero<100){
        return true;
    }
    return false;
}