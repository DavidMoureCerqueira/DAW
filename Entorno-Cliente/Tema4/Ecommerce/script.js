const listaProductos = document.getElementById("lista-productos")
const listaCarro = document.getElementById("lista-carriño")
const resumenCarrito = document.getElementById("resumo-carriño")


const IVA = 1.21

// CLASES
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
class Carro {
    static descuento = 0.1
    constructor() {

        this._itemsCarrito = lecturaLocalStorage() || []
        this._subtotal = 0
        this._precioTotal = 0
    }
    calcularPrecioTotal() {
        if (this._subtotal >= 100) {
            this._precioTotal = this._subtotal * (1 - Carro.descuento)
        } else {
            this._precioTotal = this._subtotal
        }

    }

}

// Declaraciones para uso global
let productosDisponibles = []
const carrito = new Carro()

// Renderizaciones

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
            añadirAlCarro(producto)
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
    carrito._itemsCarrito.forEach(item => {

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

function añadirAlCarro(producto) {
    if (producto._stock <= 0) {
        alert("No hay stock de ese producto")

    } else {

        if (carrito._itemsCarrito.some((item) => item._id == producto._id)) {
            incrementarItemCarrito(producto._id)
        } else {
            const itemCarro = new ItemCarro(producto, 1)
            console.log(itemCarro)
            carrito._itemsCarrito.push(itemCarro)
        }
        decrementarStock(producto._id)
        almacenarLocarStorage()
        renderizarProductos()
        renderizarCarrito()
    }
}

function incrementarItemCarrito(id) {
    console.log("Aumentando la cantidad del producto con el ID:", id)
    carrito._itemsCarrito.forEach((item) => {
        if (item._id == id) {
            item._cantidad += 1
            console.log(item.constructor.name)
            item.incrementarPrecioTotal()

        }
    })
}

function decrementarStock(id) {
    productosDisponibles.forEach((producto) => {
        if (producto._id == id) {
            producto._stock -= 1

        }
    })
    carrito._itemsCarrito.forEach((item) => {
        if (item._id == id) {
            item._stock -= 1
        }
    })
}



function almacenarLocarStorage() {
    localStorage.setItem("Carrito", JSON.stringify(carrito._itemsCarrito))
}

function lecturaLocalStorage() {
    const carritoString = localStorage.getItem("Carrito")
    let objetosCarrito = JSON.parse(carritoString)
    return transformacionLocalStorage(objetosCarrito)

}
function transformacionLocalStorage(objetos){
    
    if (objetos instanceof Array && objetos.length!=0) 
        return objetos.map((objeto) => new ItemCarro(new Producto(objeto._id, objeto._nombre, objeto._precioUnitario,objeto._stock, objeto._descripcion, objeto._emoji), objeto._cantidad))

    
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

function ajusteStockConLocalStorage() {

    carrito._itemsCarrito.forEach((item) => {
        let productoAModificar = productosDisponibles.find((producto) => producto._id == item._id)
        productoAModificar._stock -= item._cantidad
    })

}






//EventListeners

document.addEventListener("DOMContentLoaded", async () => {
    await cargarProductosJSON()
    ajusteStockConLocalStorage()
    renderizarProductos()
    renderizarCarrito()
})
