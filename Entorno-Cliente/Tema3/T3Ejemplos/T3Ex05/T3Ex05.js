const info = document.getElementById('info')
const assing = document.getElementById('assing')
const reload = document.getElementById('reload')
const replace = document.getElementById('replace')

function mostrarInfomacionLocation() {
    const loc = window.location;
    const infoText = `
     HREF:  ${loc.href} <br>
    PROTOCOL:   ${loc.protocol} <br>
    HOSTNAME:   ${loc.hostname} <br>
    HOST:   ${loc.host} <br>
    `
    let infoDiv=document.createElement('div')
    infoDiv.innerHTML=infoText
    info.appendChild(infoDiv)


}
mostrarInfomacionLocation()
assing.addEventListener('click', () => {
    location.assign('https://www.xunta.gal/portada')

})
reload.addEventListener('click', () => {
    location.reload()

})
replace.addEventListener('click', () => {
    location.replace('https://www.xunta.gal/portada')

})