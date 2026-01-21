const listaProductos = document.getElementById("lista-productos")
const listaCarro = document.getElementById("lista-carriño")
const carrito = document.getElementById("resumo-carriño")


let productosDisponibles = []
let itemsCarrito = []
const IVA = 1.21
class Producto {
    constructor(id, nombre, precioUnitario, stock, descripcion = "", emoji = "") {
        this._id = id,
            this._nombre = nombre,
            this._precioUnitario = precioUnitario,
            this._precioIVA = precioUnitario * IVA.toFixed(2)
        this._stock = stock,
            this._descripcion = descripcion,
            this._emoji = emoji
    }
}

class ItemCarro extends Producto {
    constructor(producto, cantidad) {
        super(producto._id, producto._nombre, producto._precioUnitario, producto._stock, producto._descricipcion, producto._emoji)
        this._cantidad = cantidad,
            this._precioTotal = (this._precioIVA * this._cantidad).toFixed(2)
    }
    incrementarPrecioTotal() {
        this._precioTotal = (this._precioIVA * this._cantidad).toFixed(2)
    }
}
//  Carro--> Array de items que se saca del local storage, descuento, preciototal

function renderizarProductos() {
    listaProductos.innerHTML = ""
    productosDisponibles.forEach(producto => {

        const li = document.createElement("li")
        li.id = Number(producto._id)
        li.classList.add("produto-item")
        const spanEmoji = document.createElement("span")
        spanEmoji.textContent = ` ${producto._emoji} ${producto._nombre}`

        const descripcion = document.createElement("p")
        descripcion.textContent = producto._descripcion
        const spanPrecioIvaStock = document.createElement("span")
        spanPrecioIvaStock.textContent = `${producto._precioIVA} (IVA incluido) | Stock: ${producto._stock}`
        const btnAñadir = document.createElement("button")
        btnAñadir.classList.add("btn-engadir")
        btnAñadir.textContent = "Añadir"
        btnAñadir.addEventListener("click", () => {

            if (producto._stock <= 0) {
                alert("No hay stock de ese producto")

            } else {

                if (itemsCarrito.some((item) => item._id == producto._id)) {
                    incrementarItemCarrito(producto._id)


                } else {
                    const itemCarro = new ItemCarro(producto, 1)
                    itemsCarrito.push(itemCarro)
                  
                    
                    
                }
                decrementarStock(producto._id)
                renderizarProductos()
                renderizarCarrito()
            }
        })
        // Añadir todos al li
        li.appendChild(spanEmoji)
        li.appendChild(descripcion)
        li.appendChild(spanPrecioIvaStock)
        li.appendChild(btnAñadir)
        listaProductos.appendChild(li)
    });

}

function renderizarCarrito() {
    listaCarro.innerHTML = ""
    itemsCarrito.forEach(item => {

        const li = document.createElement("li")
        li.id = Number(item._id)
        li.classList.add("carriño-item")
        const spanEmoji = document.createElement("span")
        spanEmoji.textContent = ` ${item._emoji} ${item._nombre}`

        const cantidad = document.createElement("p")
        cantidad.textContent = `Cant.: ${item._cantidad}`
        const spanPrecio = document.createElement("span")
        spanPrecio.textContent = `@ ${item._precioIVA} € `
        const spanStock = document.createElement("span")
        spanStock.textContent = `${item._precioTotal} € `
        const btnEliminar = document.createElement("button")
        btnEliminar.classList.add("btn-eliminar")
        btnEliminar.textContent = "Eliminar"
        // btnEliminar.addEventListener("click", () => {

        //     if (productosCarrito.some((item) =>item._id == producto._id)) {
        //         incrementarItemCarrito(producto._id)

        //     } else {
        //         const itemCarro = new ItemCarro(producto, 1)
        //         productosCarrito.push(itemCarro)


        //     }
        //      renderizarCarrito()
        // })
        // // Añadir todos al li
        li.appendChild(spanEmoji)
        li.appendChild(cantidad)
        li.appendChild(spanPrecio)
        li.appendChild(spanStock)
        li.appendChild(btnEliminar)
        listaCarro.appendChild(li)
    });

}


function incrementarItemCarrito(id) {
    console.log("Aumentando la cantidad del producto con el ID:", id)
    itemsCarrito.forEach((item) => {
        if (item._id == id) {
            item._cantidad += 1
            item.incrementarPrecioTotal()
            almacenarLocarStorage(item)

        }
    })
    renderizarCarrito()
}

function decrementarStock(id) {
    productosDisponibles.forEach((producto) => {
        if (producto._id == id) {
            producto._stock -= 1

        }
    })
}



function almacenarLocarStorage(producto) {
    localStorage.setItem(producto._id, JSON.stringify(producto))
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
