const formulario = document.getElementById("formulario");
const carritoHTML = document.getElementById("carrito-modal");
let productos = [];
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

// Logica del carrito

async function obtenerProductos() {
	try {
		const respuesta = await fetch(
			"https://api-north-start.vercel.app/products"
		);

		if (!respuesta.ok) {
			throw new Error("Error al traer los datos");
		}

		productos = await respuesta.json();
		mostrarProductos(productos);
	} catch (error) {
		console.error("Error al traer los datos:", error);
	}
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

function mostrarCarrito() {
	// Si el carrito esta vacio coloco un mensaje
	if (carrito.length === 0) {
		carritoHTML.innerHTML = "<p class='carrito-vacio'>Carrito vacio 🙁</p>";
		return;
	}

	const item = carrito.map((producto) => {
		return `
			<div class="item-carrito">
				<img src="${producto.imagen}" alt="${producto.descripcion}">
				<div class="item-detalle">
					<p>${producto.nombre}</p>
					<div class="item-acciones">
						<p>$ ${producto.precio.toLocaleString()}</p>
						<p>Cantidad: ${producto.cantidad}</p>
						<button onclick="eliminarProducto(${producto.id})">Eliminar</button>
					</div>
				</div>
			</div>
		`;
	});

	carritoHTML.innerHTML = item.join("");
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

			// Mostrar notificación con Toastify
			Toastify({
				text: `${producto.nombre} agregado al carrito 🛒`,
				duration: 1000,
				gravity: "bottom",
				position: "right",
				style: {
					background: "linear-gradient(45deg, #5fa2ff, #867bfe)",
				},
			}).showToast();
		}
	});

	mostrarCarrito();
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

obtenerProductos();
mostrarProductos(productos);
mostrarCarrito();
