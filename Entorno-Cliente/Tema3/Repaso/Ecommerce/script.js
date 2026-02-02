const listaProductos = document.getElementById("lista-productos")
const listaCarrito = document.getElementById("lista-carriño")
const resumenCarrito = document.getElementById("resumo-carriño")

const IVA = 0.21
let productosDisponibles = []
class Carro {
    constructor() {
        this._listaCarrito = this.leerLocalStorage() || []
        this._descuento = 0.10

    }
    get descuento() {
        return this.calcularDescuento()
    }
    get subtotal() {
        return this.calcularSubtotal()
    }
    get totalFinal() {

        return (this.subtotal < 100) ? this.subtotal : (this.subtotal - this.descuento)
    }
    añadirItem(item) {
        this._listaCarrito.push(item)
        this.renderizarCarro()
    }
    eliminarItem(id) {

        this._listaCarrito = this._listaCarrito.filter((item) => item._id != id)
        console.log("dentro")
        this.renderizarCarro()
    }
    calcularSubtotal() {
        const total = this._listaCarrito.reduce((acc, i) => {
            acc += parseFloat(i.calcularSubtotal())
            return acc
        }, 0)

        return total


    }
    calcularDescuento() {
        const descuento = this._listaCarrito.reduce((acc, i) => {
            acc += parseFloat(i.calcularSubtotal())
            return acc
        }, 0)
        let descuentoTotal = descuento * this._descuento

        return descuentoTotal
    }
    renderizarCarro() {
        listaCarrito.innerHTML = ""

        if (this._listaCarrito.length == 0) {

            listaCarrito.innerHTML = "No hay productos en el carro"
            listaCarrito.classList.add("carriño-baleiro")

        } else {



            if (listaCarrito.classList.contains("carriño-baleiro")) {
                listaCarrito.classList.remove("carriño-baleiro")
            }
            this._listaCarrito.forEach((itemC) => {
                const itemLi = document.createElement("li")
                itemLi.dataset.id = itemC._id
                itemLi.classList.add("carriño-item")
                const spanNombre = document.createElement("span")

                spanNombre.innerHTML = `${itemC._emoji} <strong>${itemC._nombre}</strong>`
                const spanCantidad = document.createElement("div")
                spanCantidad.textContent = `Cant: ${itemC._cantidad}`
                const spanPrecio = document.createElement("div")
                spanPrecio.textContent = `@ ${itemC._precioIVA} €`
                const spanSubtotal = document.createElement("div")
                spanSubtotal.textContent = `${itemC.calcularSubtotal()} €`
                const btnEliminar = document.createElement("button")
                btnEliminar.classList.add("btn-eliminar")
                btnEliminar.textContent = "Eliminar"
                itemLi.appendChild(spanNombre)
                itemLi.appendChild(spanCantidad)
                itemLi.appendChild(spanPrecio)
                itemLi.appendChild(spanSubtotal)
                itemLi.appendChild(btnEliminar)
                listaCarrito.appendChild(itemLi)

            })
        }
        this.guardarLocalStorage()
        this.renderizarResumen()
    }
    renderizarResumen() {

        resumenCarrito.innerHTML = ""
        const divSubtotal = document.createElement("div")
        divSubtotal.innerHTML = `Subtotal <strong>${this.subtotal.toFixed(2)}€</strong>`

        const divDescuento = document.createElement("div")
        divDescuento.classList.add("desconto")
        divDescuento.innerHTML = `Descuento(10% en compras>100%) <strong>${this.descuento.toFixed(2)}€</strong>`

        if (this.subtotal > 100) {
            divDescuento.classList.add("aplicado")
        }
        const totalFinal = document.createElement("h3")
        totalFinal.innerHTML = `Total Final <strong>${this.totalFinal}€</strong>`
        resumenCarrito.appendChild(divSubtotal)
        resumenCarrito.appendChild(divDescuento)
        resumenCarrito.appendChild(totalFinal)

    }
    guardarLocalStorage() {
        console.log(JSON.stringify(this._listaCarrito))
        localStorage.setItem("Carro", JSON.stringify(this._listaCarrito))
    }
    leerLocalStorage() {
        const data = localStorage.getItem("Carro")

        return transformarData(data)
    }

}

class ItemCarro {
    constructor(emoji, nombre, cantidad, id, precioIVA) {
        this._id = id
        this._emoji = emoji
        this._nombre = nombre
        this._cantidad = cantidad
        this._precioIVA = precioIVA
    }
    aumentarCantidad() {
        this._cantidad += 1
    }
    disminuirCantidad() {
        this._cantidad -= 1
    }
    calcularSubtotal() {
        return (this._cantidad * this._precioIVA).toFixed(2)

    }
}

class Producto {
    constructor(id, nombre, descripcion, emoji, precioUnitario, stock) {
        this._id = id
        this._nombre = nombre
        this._descripcion = descripcion
        this._emoji = emoji
        this._precioUnitario = parseFloat(precioUnitario)
        this._stock = stock
    }
    productoConIva() {
        const precioIVA = this._precioUnitario * (1 + IVA)

        return precioIVA.toFixed(2)
    }
    reducirStock(cantidad = 1) {
        this._stock -= cantidad

    }
    recuperarStock(cantidad = 1) {
        this._stock += cantidad
    }

}

const carro = new Carro()

async function cargarProductosJSON() {
    const response = await fetch("./productos.json")
    if (!response.ok) throw new Error("Ha habido un error en la lectura de los productos")
    const datos = await response.json()
    return datos


}

function renderizarProductos(productos = productosDisponibles) {
    listaProductos.innerHTML = ""

    productos.forEach(p => {
        const productoLi = document.createElement("li")
        productoLi.dataset.id = p._id
        productoLi.classList.add("produto-item")
        const spanNombre = document.createElement("span")
        spanNombre.innerHTML = `${p._emoji} <strong>${p._nombre}</strong>`
        const spanDescripcion = document.createElement("span")
        spanDescripcion.textContent = p._descripcion
        const spanPrecioStock = document.createElement("span")
        spanPrecioStock.textContent = `${p.productoConIva()}€(IVA incluido) | Stock:${p._stock}`
        const btnAñadir = document.createElement("button")
        btnAñadir.classList.add("btn-engadir")
        btnAñadir.textContent = "Engadir"
        if (p._stock < 1) {
            btnAñadir.disabled = true
        }
        btnAñadir.addEventListener("click", () => {
            const item = new ItemCarro(p._emoji, p._nombre, 1, p._id, p.productoConIva())
            const itemAñadido = carro._listaCarrito.find((itemC) => itemC._id === item._id)
            if (!itemAñadido) {
                carro.añadirItem(item)
            } else {

                itemAñadido.aumentarCantidad()
                carro.renderizarCarro()
            }
            reducirStockArray(p)
            renderizarProductos()
        })
        productoLi.appendChild(spanNombre)
        productoLi.appendChild(spanDescripcion)
        productoLi.appendChild(spanPrecioStock)
        productoLi.appendChild(btnAñadir)
        listaProductos.appendChild(productoLi)
    });
}


function reducirStockArray(p) {
    // p.reducirStock()
    productosDisponibles.forEach((producto) => {
        if (producto._id == p._id) {
            producto.reducirStock()

        }
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    const productos = await cargarProductosJSON()
    let productosObj = productos.map((producto) => {
        const p = new Producto(producto.id, producto.nome, producto.descripcion, producto.emoji, producto.prezoUnitario, producto.stock)
        return p
    })
    productosDisponibles = productosObj
    if (dataParsed != null) {


        dataParsed.forEach((itemC) => {

            productosDisponibles = productosDisponibles.map((p) => {

                if (p._id == itemC._id) {
                    p.reducirStock(itemC._cantidad)
                }
                return p
            })
        })
    }
    console.log(productosDisponibles)
    renderizarProductos()
    carro.renderizarCarro()

})

function transformarData(data) {

    dataParsed = JSON.parse(data)
    if (data == null) {
        return []
    }
    if (data.length == 0) {
        return []
    }
    const listaProductosParseada = dataParsed.map((itemC) => {
        itemC = new ItemCarro(itemC._emoji, itemC._nombre, itemC._cantidad, itemC._id, itemC._precioIVA)

        return itemC
    })

    return listaProductosParseada
}



listaCarrito.addEventListener("click", (ev) => {

    if (ev.target.classList.contains("btn-eliminar")) {
        const idAEliminar = ev.target.closest("li").dataset.id

        const itemAEliminar = carro._listaCarrito.find((item) => item._id == idAEliminar)
        const objetoRecuperarStock = productosDisponibles.find((p) => p._nombre == itemAEliminar._nombre)

        if (itemAEliminar._cantidad > 1) {
            itemAEliminar.disminuirCantidad()
            carro.renderizarCarro()
        } else {
            carro.eliminarItem(idAEliminar)
        }
        objetoRecuperarStock.recuperarStock()
        renderizarProductos()
    }
})