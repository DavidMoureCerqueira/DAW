const crearCookie = document.getElementById('crear-cookie');
const modificarCookie = document.getElementById('enseñar-cookie');
const eliminarCookie = document.getElementById('eliminar-cookie');
const informacion = document.getElementById('informacion')


crearCookie.addEventListener('click', () => {
    let fechaActual = new Date();
// Los estoy haciendo sin path
    fechaActual.setHours(fechaActual.getHours() + 2)
    let fechaCaducidad = fechaActual.toUTCString()
    let cookies = [`usuario=DavidMoure; expires=${fechaCaducidad}`, `conectado=true; expires=${fechaCaducidad}`]
    cookies.forEach(cookie => {
        document.cookie = cookie;
    });
    const cookiesNombres = cookies.map((cookie) => cookie.split(';')[0])
    alert(`Cookie Creada: ${cookiesNombres}`)
})

modificarCookie.addEventListener('click', mostrarCookies)


function mostrarCookies() {
    
    let insertar=''
    let cookies = document.cookie;
    insertar+=`<h3>Las cookies actuales son:</h3>`;
    insertar+=`<p>${cookies.split(';').join('<br>')}</p>`;
    
 
    informacion.innerHTML=insertar
}
eliminarCookie.addEventListener('click', eliminarCookieFunction)

function eliminarCookieFunction() {
    let cookies = document.cookie

    let cookieBorrada = cookies.split('=')[0];
    if (cookieBorrada == 'usuario') {

        cookieBorrada += '=; max-age=0;'
    }
    else if (cookieBorrada == 'conectado') {
        cookieBorrada += '=;max-age=0;'
    }


    document.cookie = cookieBorrada;

    mostrarCookies()



}