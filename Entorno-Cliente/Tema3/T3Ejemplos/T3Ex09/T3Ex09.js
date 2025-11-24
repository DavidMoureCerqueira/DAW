const contadorInput=document.getElementById('texto')

const cosa=contadorInput.getAttribute('data-cousa')

console.log('El atributo recuperado es:',cosa)
const multiplo5=document.createAttribute('multiplo-cinco')
multiplo5.value=0



contadorInput.addEventListener('click',()=>{
    let contador=contadorInput.getAttributeNode('data-contador')
    let contadorActualizado=+contador.value +1
    contadorInput.setAttribute(contador.name,contadorActualizado)
    
    console.log(`El contador tiene ${contadorActualizado}`)
    if(contadorActualizado===5){
    }
    if(contadorActualizado%5==0){
        multiplo5.value++
        contadorInput.setAttribute(multiplo5.name,multiplo5.value)
        console.log(`Ya van ${contadorActualizado} clicks`)
        alert(`Ya van ${contadorActualizado}clicks`)
    }

})


