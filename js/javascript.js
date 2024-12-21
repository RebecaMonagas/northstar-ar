const formulario = document.getElementById("formulario");
const botonCarrito = document.getElementById("boton-carrito");
const productos = [
	{
		id: 1,
		nombre: "Remera Blanca",
		precio: 15000,
		imagen: "./assets/reme2m.webp",
		descripcion: "Remera blanca clásica para mujer",
		categoria: "mujer",
		tipo: "remeras",
	},
	{
		id: 2,
		nombre: "Remera Courage",
		precio: 18000,
		imagen: "./assets/reme4m.webp",
		descripcion: "Remera con diseño 'Courage' para mujer",
		categoria: "mujer",
		tipo: "remeras",
	},
	{
		id: 3,
		nombre: "Camisa Verde Militar",
		precio: 25000,
		imagen: "./assets/cam2m.webp",
		descripcion: "Camisa verde militar para mujer",
		categoria: "mujer",
		tipo: "remeras",
	},
	{
		id: 4,
		nombre: "Crop Top Rock",
		precio: 12000,
		imagen: "./assets/top1.webp",
		descripcion: "Crop top estilo rock para mujer",
		categoria: "mujer",
		tipo: "remeras",
	},
	{
		id: 5,
		nombre: "Remera Crop",
		precio: 20000,
		imagen: "./assets/reme3m.webp",
		descripcion: "Remera crop moderna para mujer",
		categoria: "mujer",
		tipo: "remeras",
	},
	{
		id: 6,
		nombre: "Remera Out Cast",
		precio: 18000,
		imagen: "./assets/reme5h.webp",
		descripcion: "Remera con diseño 'Out Cast' para hombre",
		categoria: "hombre",
		tipo: "remeras",
	},
	{
		id: 7,
		nombre: "Remera Grey",
		precio: 18000,
		imagen: "./assets/reme6h.webp",
		descripcion: "Remera gris básica para hombre",
		categoria: "hombre",
		tipo: "remeras",
	},
	{
		id: 8,
		nombre: "Remera Rayas",
		precio: 22000,
		imagen: "./assets/reme2h.webp",
		descripcion: "Remera a rayas para hombre",
		categoria: "hombre",
		tipo: "remeras",
	},
	{
		id: 9,
		nombre: "Camisa Cuadros",
		precio: 28000,
		imagen: "./assets/cam1h.webp",
		descripcion: "Camisa a cuadros estilo clásico para hombre",
		categoria: "hombre",
		tipo: "remeras",
	},
	{
		id: 10,
		nombre: "Camisa New Man",
		precio: 30000,
		imagen: "./assets/cam3h.webp",
		descripcion: "Camisa 'New Man' moderna para hombre",
		categoria: "hombre",
		tipo: "remeras",
	},
	{
		id: 11,
		nombre: "Pantalon Lineas",
		precio: 25000,
		imagen: "./assets/pant1-m.webp",
		descripcion: "Pantalón con líneas estampadas para mujer",
		categoria: "mujer",
		tipo: "pantalones",
	},
	{
		id: 12,
		nombre: "Pantalon Gris Encaje",
		precio: 40000,
		imagen: "./assets/pant2-m.webp",
		descripcion: "Pantalón gris con detalle de encaje para mujer",
		categoria: "mujer",
		tipo: "pantalones",
	},
	{
		id: 13,
		nombre: "Jean Helena",
		precio: 38000,
		imagen: "./assets/pant3-m.webp",
		descripcion: "Jean clásico modelo Helena para mujer",
		categoria: "mujer",
		tipo: "pantalones",
	},
	{
		id: 14,
		nombre: "Jean Estampado",
		precio: 42000,
		imagen: "./assets/pant4-m.webp",
		descripcion: "Jean estampado moderno para mujer",
		categoria: "mujer",
		tipo: "pantalones",
	},
	{
		id: 15,
		nombre: "Calza Punk",
		precio: 22000,
		imagen: "./assets/pant5-m.webp",
		descripcion: "Calza estilo punk para mujer",
		categoria: "mujer",
		tipo: "pantalones",
	},
	{
		id: 16,
		nombre: "Jogging Oslo",
		precio: 29000,
		imagen: "./assets/pant7-h.webp",
		descripcion: "Jogging modelo Oslo para hombre",
		categoria: "hombre",
		tipo: "pantalones",
	},
	{
		id: 17,
		nombre: "Jean Kosovo",
		precio: 40000,
		imagen: "./assets/pant8-h.webp",
		descripcion: "Jean clásico modelo Kosovo para hombre",
		categoria: "hombre",
		tipo: "pantalones",
	},
	{
		id: 18,
		nombre: "Jean Cargo",
		precio: 40990,
		imagen: "./assets/pant9-h.webp",
		descripcion: "Jean cargo moderno para hombre",
		categoria: "hombre",
		tipo: "pantalones",
	},
	{
		id: 19,
		nombre: "Jean Cargo Buggy",
		precio: 42000,
		imagen: "./assets/pant10-h.webp",
		descripcion: "Jean cargo modelo Buggy para hombre",
		categoria: "hombre",
		tipo: "pantalones",
	},
	{
		id: 20,
		nombre: "Pantalon Cargo lineas",
		precio: 36000,
		imagen: "./assets/pant11-h.webp",
		descripcion: "Pantalón cargo con líneas para hombre",
		categoria: "hombre",
		tipo: "pantalones",
	},
	{
		id: 21,
		nombre: "Campera Jean Perlas",
		precio: 25000,
		imagen: "./assets/campe1-m.webp",
		descripcion: "Campera con diseño moderno para mujer",
		categoria: "mujer",
		tipo: "camperas",
	},
	{
		id: 22,
		nombre: "Buzo en V",
		precio: 40000,
		imagen: "./assets/buzo1-m.png",
		descripcion: "Buzo gris con detalles para mujer",
		categoria: "mujer",
		tipo: "camperas",
	},
	{
		id: 23,
		nombre: "Campera Helena",
		precio: 38000,
		imagen: "./assets/campe2-m.png",
		descripcion: "Campera casual modelo Helena para mujer",
		categoria: "mujer",
		tipo: "camperas",
	},
	{
		id: 24,
		nombre: "Buzo Capucha Gris",
		precio: 42000,
		imagen: "./assets/buzo2-m.webp",
		descripcion: "Buzo moderno para mujer",
		categoria: "mujer",
		tipo: "camperas",
	},
	{
		id: 25,
		nombre: "Campera Punk",
		precio: 22000,
		imagen: "./assets/campe3-m.png",
		descripcion: "Campera punk para mujer",
		categoria: "mujer",
		tipo: "camperas",
	},
	{
		id: 26,
		nombre: "Campera Oslo",
		precio: 29000,
		imagen: "./assets/buzo1-h.png",
		descripcion: "Buzo Oslo para hombre",
		categoria: "hombre",
		tipo: "camperas",
	},

	{
		id: 27,
		nombre: "Campera Kosovo",
		precio: 40000,
		imagen: "./assets/campe1-h.png",
		descripcion: "Campera estilo clásico para hombre",
		categoria: "hombre",
		tipo: "camperas",
	},

	{
		id: 28,
		nombre: "Campera Jean H",
		precio: 35000,
		imagen: "./assets/campe2-h.webp",
		descripcion: "Campera Jean",
		categoria: "hombre",
		tipo: "camperas",
	},

	{
		id: 29,
		nombre: "Campera Buggy",
		precio: 50000,
		imagen: "./assets/campe3-h.webp",
		descripcion: "Campera Buggy para hombre",
		categoria: "hombre",
		tipo: "camperas",
	},

	{
		id: 30,
		nombre: "Buzo Gris",
		precio: 25000,
		imagen: "./assets/buzo2-h.webp",
		descripcion: "Buzo gris para hombre",
		categoria: "hombre",
		tipo: "camperas",
	},
];

// Que hace el JSON.parse: convierte el string en un objeto de JavaScript
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (formulario) {
	formulario.addEventListener("submit", (event) => {
		event.preventDefault();

		const inputs = formulario.getElementsByClassName("control");

		let camposCompletos = true;
		for (let index = 0; index < inputs.length; index++) {
			if (inputs[index].value === "") {
				camposCompletos = false;
			}
		}

		if (camposCompletos) {
			console.log("Todos los campos están completos");
		}
	});
}

const array = [
	"Remera Blanca",
	"Remera Courage",
	"Camisa Verde Militar",
	"Crop top Rock",
	"Remera Crop",
	"Remera Out Cast",
	"Remera Grey",
	"Remera Rayas",
	"Camisa Cuadros",
	"Camisa New Man",
];
console.log("longitud del array", array.length);
console.log(array[9]);

for (let index = 0; index < array.length; index++) {
	console.log(array[index]);
}

function mostrarProductos(productos) {
	productos.forEach((producto) => {
		const card = `
			<section class="section-card">
        <div>
          <img src="${producto.imagen}" alt="${producto.descripcion}">
        </div>
        <div class="card-info">
          <h3>${producto.nombre}</h3>
          <p>$ ${producto.precio.toLocaleString()}</p>
        </div>
        <div class="boton-carrito">
          <button onclick="agregarAlCarrito(${
						producto.id
					})">Agregar al carrito</button>
        </div>
      </section>
		`;

		if (document.getElementById(`${producto.tipo}-${producto.categoria}`)) {
			document.getElementById(
				`${producto.tipo}-${producto.categoria}`
			).innerHTML += card;
		}
	});
}

function guardarCarritoLocalStorage() {
	// Que hace el JSON.stringify: convierte un objeto de JavaScript en un string
	localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
	// console.log("Producto agregado al carrito con id:", id);
	productos.forEach((producto) => {
		if (producto.id === id) {
			const productoExisteEnCarrito = carrito.find((item) => item.id === id);

			if (productoExisteEnCarrito) {
				productoExisteEnCarrito.cantidad++;
			} else {
				carrito.push({...producto, cantidad: 1});
			}

			guardarCarritoLocalStorage();
		}
	});

	console.log(carrito);
}

function mostrarCarrito() {
	const carritoHTML = document.getElementById("carrito-modal");

	// Si el carrito esta vacio coloco un mensaje
	if (carrito.length === 0) {
		carritoHTML.innerHTML = "<p class='carrito-vacio'>Carrito vacio 🙁</p>";
		return;
	}

	const item = carrito.map((producto) => {
		return `
			<div class="item-carrito">
				<img src="${producto.imagen}" alt="${producto.descripcion}">
				<p>${producto.nombre}</p>
				<p>$ ${producto.precio.toLocaleString()}</p>
				<p>Cantidad: ${producto.cantidad}</p>
				<button onclick="eliminarProducto(${producto.id})">Eliminar</button>
			</div>
		`;
	});

	carritoHTML.innerHTML = item.join("");
}

function eliminarProducto(id) {
	carrito = carrito.filter((producto) => {
		if (producto.id !== id) {
			return producto;
		} else {
			if (producto.cantidad > 1) {
				producto.cantidad--;
				return producto;
			}
		}
	});

	mostrarCarrito();
	guardarCarritoLocalStorage();
}


botonCarrito.addEventListener("click", () => {
	mostrarCarrito();
});

mostrarProductos(productos);
