

//variables locales
const nombreAlumno = document.getElementById('alumno');
const notaAlumno = document.getElementById('nota');
const posicionError = document.getElementById('error');
const listaAlumnos = document.getElementById('alumnos-notas');
const notaFiltrar = document.getElementById('filtrar');
let clase = [] //Alumnos

function crearAlumno() {
    let nombre = nombreAlumno.value
    let nota = notaAlumno.value
    if (!nombre || !nota) {
        posicionError.innerText = 'Alguno de los campos no esta completo.'
        return false;
    }
    else if (isNaN(nota)) {
        posicionError.innerText = 'No ha introducido una nota valida'
        return false;
    }
    else if (nota > 10 || nota < 0) {

        posicionError.innerText = 'La nota tiene que estar contenida entre 0 y 10.'
        return false;
    }
    else {
        posicionError.innerText = '';
    }
    let alumnoClase = {
        nombre: nombre,
        notas: [Number(nota)]
    }

    let alumnoNota = clase.find((alumno) => alumno.nombre == alumnoClase.nombre)
    if (!alumnoNota) {
        clase.push(alumnoClase)
    } else {
        clase[clase.indexOf(alumnoNota)].notas.push(nota)
    }
    notaAlumno.value = '';
    notaAlumno.focus()
    renderizarAlumnos(clase);
}
function filtrarPorNota() {
    let nota = notaFiltrar.value;
    if (isNaN(nota)) {
        posicionError.innerText = 'No ha introducido un numero';
        return false;
    }
    else if (clase.length <= 0) {
        posicionError.innerText = 'No hay alumnos suficientes registrados para hacer un filtrado'
        return false;
    }
    if (!nota) {
        renderizarAlumnos(clase)
    } else {

        let alumnosFiltrado = clase.filter((alumno) => alumno.notas.reduce((total, nota) => total + +nota, 0) / alumno.notas.length >= nota)

        notaFiltrar.focus();


        renderizarAlumnos(alumnosFiltrado);
    }
}
function renderizarAlumnos(listado) {
    let HTMLAInsertar = ' <tr> <th>Alumno</th><th>Notas</th><th>Media</th><th>Modificar/Eliminar</th></tr>';
    listado.forEach(alumno => {
        let media = alumno.notas.reduce((total, nota) => total + +nota, 0) / alumno.notas.length
        HTMLAInsertar += '<tr>'
        HTMLAInsertar += `<td>${alumno.nombre}</td>`
        HTMLAInsertar += `<td>${alumno.notas.join(' ; ')}</td>`
        HTMLAInsertar += `<td>${media.toFixed(2)}</td>`
        HTMLAInsertar += `<td> <div class='botones'> <button type='button' id='${alumno.nombre}' onclick='modificarAlumno(id)'>✏️</button>`
        HTMLAInsertar += `<button type='button' id='${alumno.nombre}' onclick='eliminarAlumno(id)'>✖️</button></td></div>`
        HTMLAInsertar += '</tr>'
    });
    listaAlumnos.innerHTML = HTMLAInsertar;

}

function modificarAlumno(id) {
    let alumno=clase.find((alumno)=>alumno.nombre===id);
    nombreAlumno.value=alumno.nombre;


}

function eliminarAlumno(id) {
    let alumno=clase.find((alumno)=>alumno.nombre===id);
    if(alumno){
        clase.splice(alumno,1)
    }
    renderizarAlumnos(clase)
}


