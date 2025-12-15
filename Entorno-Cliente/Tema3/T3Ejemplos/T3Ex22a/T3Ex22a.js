function obterDatos(url) {
    const datos = fetch(url).then((res) => res.json())
    return datos;
}


async function obterMultiple() {
    try {
        const [post1, post2] = await Promise.all([
            // fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
            //     res.json()),
            // fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
            //     res.json())
            obterDatos("https://jsonplaceholder.typicode.com/posts/1"),
            obterDatos("https://jsonplaceholder.typicode.com/posts/2")

        ]);
        console.log("Post 1:", post1);
        console.log("Post 2:", post2);
    } catch (erro) {
        console.error("Erro na execución concorrente:", erro);
    }
}
obterMultiple()