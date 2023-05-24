const productos= [
    { nombre: "Remera", precio: 2500, id: "1", img: "../img/remera.jpeg", idCat: "2" },
    { nombre: "Short", precio: 3180, id: "2", img: "../img/short.jpg", idCat: "2" },
    { nombre: "Zapatillas", precio: 10200, id: "3", img: "../img/zapatillas.jpeg", idCat: "3" },
    { nombre: "Conjunto", precio: 15400, id: "4", img: "../img/conjunto.jpg", idCat: "4" },
    { nombre: "Conjunto", precio: 16400, id: "5", img: "../img/conjunto2.jpg", idCat: "4" },
    { nombre: "Conjunto", precio: 15400, id: "6", img: "../img/conjunto3.jpeg", idCat: "4" },
    { nombre: "Botines", precio: 13400, id: "7", img: "../img/botines.jpeg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 200)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 200)
    })
}