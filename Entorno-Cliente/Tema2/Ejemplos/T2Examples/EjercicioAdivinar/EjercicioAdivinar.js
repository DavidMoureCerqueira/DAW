let numeroAleatorio=Math.round(Math.random()*100);
console.log(numeroAleatorio);

const posicionMensaje=document.getElementById("mensaje");
const posicionIntentos=document.getElementById("intentos");


let contadorIntentos=0;
posicionIntentos.innerText=`Intentos: ${contadorIntentos}`;
posicionMensaje.innerText= "Recuerda entre 0 y 100";

function intentarAdivinar(){
    let intentoNumElem=document.querySelector("#intentoNum");
    let intentoNum=Number(intentoNumElem.value)
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
        if(intentoNum===numeroAleatorio){
            window.alert(`Enhorabuena has acertado!! en ${contadorIntentos} intentos`)
            numeroAleatorio=Math.round(Math.random()*100);
            console.log(numeroAleatorio);
        }
        intentoNumElem.value="";
        intentoNumElem.focus();
    }else{
        posicionMensaje.innerText="El numero tiene que estar entre 0 y 100";
    }


}

function esNumeroValido(numero){
   
    if (numero>"0" && numero<"100"){
        return true;
    }
    return false;
}