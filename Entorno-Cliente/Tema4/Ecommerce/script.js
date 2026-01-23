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
        this._stockMaximo = stock
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
        this._descuento = 0
        this._precioTotal = 0
    }
    calcularDescuento() {
        this._descuento = (this._subtotal * Carro.descuento).toFixed(2)
        if(this._descuento>100){
            this._descuento=100
        }
    }
    calcularSubtotal() {
        this._subtotal = (this._itemsCarrito.reduce((acc, item) => {
            console.log("Cantidad del acumulador:", acc)
            console.log("Precio del item: ", item._cantidad)
            acc += item._cantidad * item._precioIVA
            return acc
        }, 0)).toFixed(2)

    }
    calcularPrecioTotal() {
        if (this._subtotal >= 100) {
            this.calcularDescuento()
        }
        this._precioTotal = (this._subtotal - this._descuento).toFixed(2)
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
        btnEliminar.addEventListener("click", () => {

            reducirElCarro(item)
            almacenarLocarStorage()
            actualizarCarro()
            renderizarResumenCarro()
            renderizarCarrito()
            renderizarProductos()
        })
        // // Añadir todos al li
        li.appendChild(spanEmoji)
        li.appendChild(cantidad)
        li.appendChild(spanPrecio)
        li.appendChild(spanStock)
        li.appendChild(btnEliminar)
        listaCarro.appendChild(li)
    });

}

function renderizarResumenCarro() {
    console.log(typeof carrito._subtotal)
    console.log(carrito._subtotal)
    resumenCarrito.innerHTML = ""
    const subtotal = document.createElement("p")
    subtotal.textContent = "Subtotal: "
    const spanSubtotal = document.createElement("span")
    spanSubtotal.textContent = `${carrito._subtotal} €`
    subtotal.appendChild(spanSubtotal)
    const descuento = document.createElement("p")
    descuento.classList.add("desconto")
    descuento.innerHTML = `Descuento(10% en compras > 100€): -<span>${carrito._descuento}€</span> `
    if (carrito._subtotal > 100) {
        descuento.classList.add("aplicado")
    } else {
        descuento.classList.remove("aplicado")
    }
    const precioFinal = document.createElement("h3")
    precioFinal.textContent = "Total Final: "
    const spanPrecioFinal = document.createElement("span")
    spanPrecioFinal.textContent = `${carrito._precioTotal} €`
    precioFinal.appendChild(spanPrecioFinal)
    resumenCarrito.appendChild(subtotal)
    resumenCarrito.appendChild(descuento)
    resumenCarrito.appendChild(precioFinal)

}
function reducirElCarro(item) {
    carrito._itemsCarrito.forEach(itemCarro => {
        if (itemCarro._id == item._id) {
            if (itemCarro._cantidad == 0) {
                alert("No se puede eliminar ese producto")
            } else {

                itemCarro._cantidad -= 1
                if (itemCarro._cantidad == 0) {
                    carrito._itemsCarrito = carrito._itemsCarrito.filter((itemFilter) => itemFilter._id != item._id)
                    console.log(carrito._itemsCarrito)
                }
                incrementarProductoDisponibles(itemCarro)

            }
        }
    });

}

function incrementarProductoDisponibles(item) {

    productosDisponibles.forEach((producto) => {
        if (producto._id == item._id) {
            producto._stock++
        }
    })


}

function actualizarCarro() {
    carrito.calcularSubtotal()
    carrito.calcularPrecioTotal()
    console.log("Subtotal:", carrito._subtotal)
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
        actualizarCarro()
        renderizarResumenCarro()
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
function transformacionLocalStorage(objetos) {

    if (objetos instanceof Array && objetos.length != 0)
        return objetos.map((objeto) => new ItemCarro(new Producto(objeto._id, objeto._nombre, objeto._precioUnitario, objeto._stock, objeto._descripcion, objeto._emoji), objeto._cantidad))


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

        if (productoAModificar._stockMaximo != productoAModificar._stock + Math.abs(item._cantidad)) {

            productoAModificar._stock -= item._cantidad
        }

    })

}






//EventListeners

document.addEventListener("DOMContentLoaded", async () => {
    await cargarProductosJSON()
    ajusteStockConLocalStorage()
    renderizarProductos()
    renderizarCarrito()
    actualizarCarro()
    renderizarResumenCarro()
})
