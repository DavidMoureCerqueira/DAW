const posicionResultado=document.getElementById('posicionResultado');
function calcularAniversario() {
    
    let fechaElem = document.querySelector("#fecha")
    let fechaNacimiento = new Date(fechaElem.value);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    if(fechaNacimiento.valueOf() <=new Date().valueOf()){

        let fechaDeseada = new Date(fechaNacimiento);
        fechaDeseada.setFullYear(new Date().getFullYear())
        let diaSemana = document.querySelector("#dia").value;
        console.log(fechaNacimiento);
        console.log(diaSemana)
        let esFecha = false;
        while (!esFecha) {
            if (fechaDeseada.getDay() == diaSemana) { //Si coincide el dia de la semana salimos del bucle
                
                esFecha = true;
            } else { //Si no coincide el día de la semana nos quedamos en el bucle e incrementamos el año para probar
                fechaDeseada.setFullYear(fechaDeseada.getFullYear() + 1);
                
            }
        }
        
        //Calculo de días hasta el cumpleaños
        let fechaActual = new Date()
        let diasRestantes = Math.round((fechaDeseada.valueOf() - fechaActual.valueOf()) / 8.64e+7)
        
        //Edad hasta el día del cumpleaños
        let edad = fechaDeseada.getFullYear()-fechaNacimiento.getFullYear();
        

        fechaElem.value="";
        fechaElem.focus();
        posicionResultado.innerHTML=`<p>Faltan ${diasRestantes} días hasta tu fecha deseada </p> <p>En tu aniversario deseado, si llegas, tendrás ${edad} años.</p>`
    }else{
        posicionResultado.innerHTML='<h2>*ERROR*<hr/>La fecha de nacimiento es mayor a la actual</h2>';
    }

}

