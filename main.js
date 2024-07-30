// Punto 1

const numeros = [1, 2, 3, 4, 5]

console.log(numeros.map(num => num * 2))

// Punto 2

const palabras = ['hola', 'mundo', 'javascript'];

console.log(palabras.map(cadena => cadena.toUpperCase()))

// Punto 3

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 40 }
    ];

console.log(personas.map(persona => persona.edad))

// Punto 4

const numeros2 = [1, 2, 3];
const letras = ['a', 'b', 'c'];

console.log(numeros2.map((num, index) => num + letras[index]))

// Punto 5

const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
    ];

console.log(productos.map(producto => {
        producto.nombre = producto.nombre.toUpperCase()
        producto.precio = (producto.precio * 0.9)
        return producto
    }
))

// sort()
// Punto 1

let nombres = ['Ana', 'Carlos', 'David', 'Elena', 'Beto']

nombres = nombres.filter(nombre => nombre.includes('a'))
console.log(nombres.sort((a, b) => a - b ))

// Punto 2
let libros = [
    { titulo: 'Harry Potter', paginas: 400 }, 
    { titulo: 'El Hobbit', paginas: 300 }, 
    { titulo: 'Cien años de soledad', paginas: 500 }
    ]
    
    console.log(libros.sort((a, b) => b.paginas - a.paginas ))

// Punto 3
let productos2 = [
    { nombre: 'Camisa', precio: 20, disponible: true }, { nombre: 'Pantalón', precio: 30, disponible: false }, 
    { nombre: 'Zapatos', precio: 50, disponible: true }
    ]


let productosConDescuento = productos2.filter(producto => producto.disponible).map(producto => {
        producto.precio = producto.precio - (producto.precio * 0.3);
        return producto;
    });

console.log(productosConDescuento);




