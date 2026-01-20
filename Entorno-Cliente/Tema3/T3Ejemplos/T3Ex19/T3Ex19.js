let url1 = 'https://jsonplaceholder.typicode.com/posts/1';
let url2 = 'https://jsonplaceholder.typicode.com/posts/2';
let url3 = 'https://jsonplaceholder.typicode.com/posts/3';

function recuperarDatos(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud')
            }
            return response.json()
        })

}


// Funcion consumidora
Promise.all([
    recuperarDatos(url1),
    recuperarDatos(url2),
    recuperarDatos(url3)
])
    .then(([data1, data2, data3]) => {
        console.log("Respuesta1: ", data1);
        console.log("Respuesta2: ", data2);
        console.log("Respuesta3: ", data3);
    })
    .catch(error => {
        console.error('Error (alguna peticion fallo): ', error)
    });