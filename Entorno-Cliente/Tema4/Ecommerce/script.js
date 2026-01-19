const listaProductos = document.getElementById("lista-productos")
const listaCarro = document.getElementById("lista-carriño")
const carrito = document.getElementById("resumo-carriño")


let productosDisponibles = []
const IVA = 1.21
class Producto {
    constructor(id, nombre, precioUnitario, stock, descripcion, emoji) {
        this._id = id,
            this._nombre = nombre,
            this._precioUnitario = precioUnitario,
            this._precioIVA = precioUnitario * IVA.toFixed(2)
        this._stock = stock,
            this._descripcion = descripcion,
            this._emoji = emoji
    }
}

function renderizarProductos() {
    listaProductos.innerHTML =""
    productosDisponibles.forEach(producto => {

        const li = document.createElement("li")
        li.id = Number(producto._id)
        const spanEmoji = document.createElement("span")
        spanEmoji.textContent = producto._emoji
        const spanNombre = document.createElement("span")
        spanNombre.textContent = producto._nombre
        const descripcion = document.createElement("p")
        descripcion.textContent = producto._descripcion
        const spanPrecioIvaStock = document.createElement("span")
        spanPrecioIvaStock.textContent = `${producto._precioIVA} (IVA incluido) ${producto._stock}`
        const btnAñadir = document.createElement("button")
        btnAñadir.classList.add("btn-engadir")
        btnAñadir.textContent = "Añadir"
        btnAñadir.addEventListener("click", () => console.log("clickado"))
        // Añadir todos al li
        li.appendChild(spanEmoji)
        li.appendChild(spanNombre)
        li.appendChild(descripcion)
        li.appendChild(spanPrecioIvaStock)
        li.appendChild(btnAñadir)
        listaProductos.appendChild(li)
    });

}








async function cargarProductosJSON() {
    try {
        listaProductos.innerHTML = "<p>Cargando productos...</p>"
        const response = await fetch("./productos.json")
        console.log("Iniciando lectura del JSON")
        if (!response.ok) throw new Error("Ha habido un error en la lectura de los productos")
        const datos = await response.json()
        console.log("Cargando los productos...")
        productosDisponibles = datos.map((dato) => new Producto(dato.id, dato.nome, dato.prezoUnitario, dato.stock, dato.descripcion, dato.emoji))

    } catch (error) {

        listaProductos.innerHTML = "<p>Ha habido un problema en la lectura de los productos</p>"
        console.error("Error: ", error);

    }
}










document.addEventListener("DOMContentLoaded", async () => {
    await cargarProductosJSON()
    console.log(productosDisponibles)
    renderizarProductos()
})
