const boton=document.getElementById('boton')

const contenido=document.getElementById('contido')
// clase parrafo
// const parrafos=document.querySelectorAll('.parrafo')
const parrafos=[...document.getElementsByClassName('parrafo')]

parrafos.forEach(parrafo => {
    console.log('contenido de los parrafos:',parrafo.textContent)
    
});
console.log('texto del titulo:',titulo.textContent)
console.log()
boton.addEventListener('click',()=>{
    const titulo=document.getElementById('titulo')
    let tituloNuevo=prompt('Introduce un nuevo titulo')
    let tituloViejo=titulo.textContent
    titulo.textContent=tituloNuevo
    let nuevoParrafo=document.createElement('p')
    nuevoParrafo.setAttribute('class','parrafo')
    nuevoParrafo.textContent=tituloViejo
    contenido.prepend(nuevoParrafo)

})

///Lo que se hizo en clase

let parrafo1=document.querySelector('.parrafo')
let todosParrafos=document.querySelectorAll('.parrafo')
let titulo2=document.getElementById('titulo')
console.log('primer parrafo:',parrafo1.textContent)
todosParrafos.forEach((parrafo,index) => {
    console.log(`Parrafo ${index}: ${parrafo.textContent}`)
});

//Modificar estilo de un elemento
parrafo1.style.color='green'
parrafo1.style.fontSize='2rem'
titulo2.textContent='Nuevo titulo'

let nuevoParrafoClase=document.createElement('p')
nuevoParrafoClase.classList.add('class')
nuevoParrafoClase.textContent='Nuevo parrafo'

document.body.appendChild(nuevoParrafoClase)

