class Carro {
    static descuento = 0.1
    constructor() {
        this._listaItems = this.leerLocalStorage() || []
    }
    añadirItem(item) {
        this._listaItems.push(item)
    }
    quitarItem(id) {
        this._listaItems = this._listaItems.filter((item) => item._id != id)
    }
    buscarItem(id) {
        return this._listaItems.find((item) => item._id == id)
    }
    get subtotal() {
        return this._listaItems.reduce((acc, item) => {
            acc += item.subtotal
            return acc
        }, 0)

    }
    get descuento() {
        return this.subtotal * Carro.descuento

    }
    get total() {
        if (this.subtotal > 100) {
            return this.subtotal - this.descuento
        } else {
            return this.subtotal
        }
    }
    guardarLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(this._listaItems))
    }
    leerLocalStorage() {
        const datos = localStorage.getItem("carrito")

        return transformarLocalStorage(datos)

    }
}

class Item {
    constructor(id, nombre, emoji, precio, cantidad) {
        this._id = id
        this._nombre = nombre
        this._emoji = emoji
        this._precio = precio
        this._cantidad = cantidad

    }

    get subtotal() {
        return this.calcularSubtotal()
    }
    calcularSubtotal() {
        return this._precio * this._cantidad
    }
    aumentarCantidad(cantidad = 1) {
        this._cantidad += cantidad
    }
    disminuirCantidad(cantidad = 1) {
        this._cantidad -= cantidad
    }
}

class Producto {
    static IVA = 0.21
    constructor(id, nombre, precioUnitario, stock, descripcion, emoji) {
        this._id = id
        this._nombre = nombre
        this._precioUnitario = precioUnitario
        this._stock = stock
        this._descripcion = descripcion
        this._emoji = emoji
        this._precioConIVA = this.calcularPrecioIVA()
    }
    calcularPrecioIVA() {
        return this._precioUnitario * (1 + Producto.IVA)
    }
    aumentarStock(cantidad = 1) {
        this._stock += cantidad
    }
    disminuirStock(cantidad = 1) {
        this._stock -= cantidad
    }
}

const carro = new Carro()
let productosDisponibles = []
const listadoProductos = document.getElementById("lista-productos")
const listadoItems = document.getElementById("lista-carriño")
const resumenCarro = document.getElementById("resumo-carriño")

function renderizarProductosDisponibles() {

    listadoProductos.innerHTML = ""
    productosDisponibles.forEach((producto) => {
        const productoLi = document.createElement("li")
        productoLi.classList.add("produto-item")
        productoLi.dataset.id = producto._id
        const spanEmojiNombre = document.createElement("span")
        spanEmojiNombre.textContent = `${producto._emoji} ${producto._nombre}`
        const descripcion = document.createElement("span")
        descripcion.textContent = producto._descripcion
        const spanPrecioStock = document.createElement("span")
        spanPrecioStock.textContent = `${producto._precioConIVA.toFixed(2)}€ (IVA incluido)|Stock: ${producto._stock}`
        const btnAñadir = document.createElement("button")
        btnAñadir.classList.add("btn-engadir")
        btnAñadir.textContent = "Añadir"
        if (producto._stock < 1) {
            btnAñadir.disabled = true
        }
        productoLi.appendChild(spanEmojiNombre)
        productoLi.appendChild(descripcion)
        productoLi.appendChild(spanPrecioStock)
        productoLi.appendChild(btnAñadir)
        listadoProductos.appendChild(productoLi)

    })
}


function renderizarCompleto() {
    carro.guardarLocalStorage()
    renderizarProductosDisponibles()
    renderizarItemsCarro()
    renderizarResumen()
}

function renderizarItemsCarro() {
    listadoItems.innerHTML = ""
    if (carro._listaItems.length == 0) {
        listadoItems.innerHTML = "No hay nada en la lista"
        listadoItems.classList.add("carriño-baleiro")
    } else {
        if (listadoItems.classList.contains("carriño-baleiro")) {
            listadoItems.classList.remove("carriño-baleiro")
        }
        carro._listaItems.forEach((item) => {
            const itemLi = document.createElement("li")
            itemLi.classList.add("carriño-item")
            itemLi.dataset.id = item._id
            const spanEmojiNombre = document.createElement("span")
            spanEmojiNombre.textContent = `${item._emoji} ${item._nombre}`
            const spanCantidad = document.createElement("span")
            spanCantidad.textContent = `Cant: ${item._cantidad}`
            const spanPrecio = document.createElement("span")
            spanPrecio.textContent = `@: ${item._precio.toFixed(2)}€`
            const spanSubtotal = document.createElement("span")
            spanSubtotal.innerHTML = `<strong>${item.subtotal.toFixed(2)}€</strong>`
            const btnEliminar = document.createElement("button")
            btnEliminar.classList.add("btn-eliminar")
            btnEliminar.textContent = "Eliminar"

            itemLi.appendChild(spanEmojiNombre)
            itemLi.appendChild(spanCantidad)
            itemLi.appendChild(spanPrecio)
            itemLi.appendChild(spanSubtotal)
            itemLi.appendChild(btnEliminar)
            listadoItems.appendChild(itemLi)
        })
    }

}

function renderizarResumen() {
    resumenCarro.innerHTML = ""
    const subtotal = document.createElement("div")
    subtotal.innerHTML = `Subtotal <strong>${carro.subtotal.toFixed(2)}€</strong>`
    const descuento = document.createElement("div")
    descuento.classList.add("desconto")
    if (carro.subtotal > 100) {
        descuento.classList.add("aplicado")
    }
    descuento.innerHTML = `Descuento (10%en compras > 100€): - ${carro.descuento.toFixed(2)}€`
    const total = document.createElement("h3")
    total.innerHTML = `Total Final: ${carro.total.toFixed(2)}€`

    resumenCarro.appendChild(subtotal)
    resumenCarro.appendChild(descuento)
    resumenCarro.appendChild(total)
}

function transformarLocalStorage(datos) {
    if (datos == null) {
        return []
    }
    const datosParsed = JSON.parse(datos)
    if (datosParsed == null || datosParsed.length == 0) {
        return []
    }
    console.log(datosParsed)
    const items = datosParsed.map((dato) => {
        const item = new Item(dato._id, dato._nombre, dato._emoji, dato._precio, dato._cantidad)
        return item
    })
    return items
}

function sincronizarProductos() {
    productosDisponibles.forEach((producto) => {
        carro._listaItems.forEach((item) => {
            if (producto._id == item._id) {
                producto._stock -= item._cantidad
            }
        })
    })
}


async function leerJSON() {
    const response = await fetch("./productos.json")
    if (!response.ok) throw new Error("Ha habido un error en la ejecución de la lectura")
    const datos = await response.json()
    productosDisponibles = datos.map((dato) => new Producto(dato.id, dato.nome, dato.prezoUnitario, dato.stock, dato.descripcion, dato.emoji))
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await leerJSON()
        sincronizarProductos()
        renderizarCompleto()

    } catch (e) {
        console.error("Error capturado:", e)
    }
})

document.addEventListener("click", (ev) => {
    const pulsado = ev.target

    if (pulsado.classList.contains("btn-engadir")) {
        const idProducto = pulsado.closest(".produto-item").dataset.id
        const producto = productosDisponibles.find((producto) => producto._id == idProducto)
        const item = new Item(producto._id, producto._nombre, producto._emoji, producto._precioConIVA, 1)
        const itemCarro = carro.buscarItem(item._id)
        if (itemCarro != null) {
            itemCarro.aumentarCantidad()
        } else {
            carro.añadirItem(item)
        }
        producto.disminuirStock()
        renderizarCompleto()
    }
    if (pulsado.classList.contains("btn-eliminar")) {
        const idItem = pulsado.closest(".carriño-item").dataset.id
        const producto = productosDisponibles.find((producto) => producto._id == idItem)
        const itemCarro = carro.buscarItem(idItem)
        if (itemCarro._cantidad > 1) {
            itemCarro.disminuirCantidad()
        } else {
            console.log("hgasdf")
            carro.quitarItem(idItem)
        }
        producto.aumentarStock()
        renderizarCompleto()
    }
})


