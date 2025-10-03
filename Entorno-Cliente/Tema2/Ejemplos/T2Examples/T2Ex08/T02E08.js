let dia = new Date().getDay()

switch (dia) {
    case 0:
        console.log("Es Domingo")
        break;
    case 1:
        console.log("Es Lunes")
        break;
    case 2:
        console.log("Es Martes")
        break;
    case 3:
        console.log("Es Miercoles")
        break;
    case 4:
        console.log("Es jueves")
        break;
    case 5:
        console.log("Es viernes, por fin")

        break;
    case 6:
        console.log("Es sabado")
        break;

    default:

        console.log("No es posible que recibas este valor")
        break;
}
