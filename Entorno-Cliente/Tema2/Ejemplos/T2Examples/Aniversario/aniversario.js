
const posicionResultado = document.getElementById('posicionResultado');

function calcularAniversario() {

    let fechaElem = document.querySelector("#fecha")
    let fechaNacimiento = new Date(fechaElem.value);
    fechaNacimiento.setHours(0,0,0,0)
    let fechaActual = new Date()
    fechaActual.setHours(0,0,0,0)
    if (isNaN(fechaNacimiento.getDay()) || isNaN(fechaNacimiento.getMonth()) || isNaN(fechaNacimiento.getFullYear())) {
            posicionResultado.innerHTML = '<h2>*ERROR*<hr/>La fecha no es valida</h2>';
            return false;
        } 

        if (fechaNacimiento.valueOf() <= new Date().valueOf()) {

            let fechaDeseada = new Date(fechaNacimiento);
            fechaDeseada.setFullYear(new Date().getFullYear())
            let diaSemana = Number(document.querySelector("#dia").value);
            fechaDeseada.setHours(0,0,0,0)
            //TODO: Falta comprobar si el dia es null
   
            let esFecha = false;
            if(fechaDeseada.getTime()==fechaActual.getTime()){
                posicionResultado.innerHTML="Felicidades hoy es tu cumpleaños!"
                console.log("Cumpleaños")
                return false;
            }
            while (!esFecha) {
                if (fechaDeseada.getDay() == diaSemana && fechaDeseada.getTime()>=fechaActual.getTime()) { //Si coincide el dia de la semana salimos del bucle
                    
                    esFecha = true;
                } else { //Si no coincide el día de la semana nos quedamos en el bucle e incrementamos el año para probar
                    fechaDeseada.setFullYear(fechaDeseada.getFullYear() + 1);

                }
            }

            //Calculo de días hasta el cumpleaños
            let diasRestantes = Math.round((fechaDeseada.valueOf() - fechaActual.valueOf()) / 8.64e+7)

            //Edad hasta el día del cumpleaños
            let edad = fechaDeseada.getFullYear() - fechaNacimiento.getFullYear();

            let fechaString = fechaDeseada.toDateString()
            //Para imprimir el dia
            const options={
                weekday:"long",
                year:"numeric",
                month:"long",
                day:"numeric"
            }
            let fechaFormateada=fechaDeseada.toLocaleDateString('gl-ES',options)
            posicionResultado.innerHTML = `<p>Faltan <strong>${diasRestantes} días </strong>hasta tu fecha deseada </p> <p>En tu aniversario deseado, si llegas, tendrás <strong>${edad} años</strong>. La fecha exacta será ${fechaFormateada}</p>`
        
        } else {
            posicionResultado.innerHTML = '<h2>*ERROR*<hr/>La fecha de nacimiento es mayor a la actual</h2>';
        }
    

}

