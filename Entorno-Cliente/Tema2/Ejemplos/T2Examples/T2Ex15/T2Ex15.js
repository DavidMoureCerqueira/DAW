let fechaActual = new Date();
console.log("Fecha actual:" + fechaActual)

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];




let dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sabado',
];


console.log("Hoy es " + dias[fechaActual.getDay()] + " " + fechaActual.getDate() + " mes " + meses[fechaActual.getMonth()])


let cumpleAños = new Date(1996, 1, 25, 18, 35, 0);

console.log(cumpleAños)

console.log("Naci el " + dias[cumpleAños.getDay()] + " " + cumpleAños.getDate() + " de " + meses[cumpleAños.getMonth()] + " a las " + cumpleAños.getHours() + ":" + cumpleAños.getMinutes() + ":" + cumpleAños.getSeconds())