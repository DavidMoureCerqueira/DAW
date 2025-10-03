let opcion = 0;
//Usar do While y Math.random

const opcionFin = 4;
const menu = `
===Menu===
1.Nuevo juego
2.Configuracion
3.Ayuda
4.Salir
`;


do {
    console.log(menu)
    opcion = parseInt(Math.round(Math.random() * 5)); //Puede ser:0,1,2,3,4,5
    console.log(`Opción elegida: ${opcion}`)

    switch (opcion) {
        case 1:
            console.log("Iniciando juego")
            break;
        case 2:
            console.log("Configuración")
            break;
        case 3:
            console.log("Ayuda")
            break;
        case 4:
            console.log("Salir")
            break;
        default:
            console.log("Opcion elegida ha sido 0 o 5")
            break;
    }

}while(opcion!=4)