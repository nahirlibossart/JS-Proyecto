let totalGeneral = 0;
contadorProductos = 0;
listadoProductos = '\nListado de productos:';

function solicitarDatosUsuario() {
	let nombre = prompt('Por favor ingresa tu nombre');
	let apellido = prompt('Por favor ingresa tu apellido');

	alert('Bienvenid@' + ' ' + nombre + ' ' + apellido);
}

function agregarProductos() {
	let confirmacion = confirm(
		'¿Deseas agregar productos a tu carrito de compras?'
	);

	while (confirmacion) {
		introducirDatosProducto();
		confirmacion = confirm(
			'¿Deseas agregar productos a tu carrito de compras?'
		);
	}

	if (contadorProductos > 0) {
		mostrarInfo();
	}
}

function introducirDatosProducto() {
	let nombre, precio, cantidad, total;

	nombre = prompt(
		'Ingresa A si eliges Pote de 1 Kg, B si eliges Pote de 1/2 Kg y C si eliges Pote de 1/4 Kg'
	).toUpperCase();

	switch (nombre) {
		case 'A':
			precio = 5000;
			alert('El precio del kilo de helado es $5000');
			break;
		case 'B':
			precio = 3000;
			alert('El precio del 1/2 kilo de helado es $3000');
			break;
		case 'C':
			precio = 2000;
			alert('El precio del 1/4 kilo de helado es $2000');
			break;
		default:
			alert('Introdujiste una opción no válida');
			break;
	}

	cantidad = parseInt(prompt('Ingresa la cantidad'));
	total = calcularTotal(precio, cantidad);
	contadorProductos++;

	console.log({ nombre, precio, cantidad, total });
	listadoProductos +=
		'\nProducto' +
		contadorProductos +
		' | Nombre: ' +
		nombre +
		' | Precio: ' +
		precio +
		' | Cantidad; ' +
		cantidad +
		' | Total: $' +
		total;
}

function calcularTotal(precio, cantidad) {
	let total = precio * cantidad;
	totalGeneral += total;

	return total;
}

function mostrarInfo() {
	listadoProductos += '\n\nEl total a pagar es de $' + totalGeneral;
	alert(listadoProductos);
	console.log(listadoProductos);
}

solicitarDatosUsuario();
agregarProductos();

const saboresParaElegir = [
	'chocolate',
	'dulce de leche',
	'frutilla',
	'vainilla',
	'naranja',
];

const saboresElegidos = [];

console.log(saboresElegidos);

const ingresarDatos = () => prompt('Ingresa el sabor elegido');

const mensaje = (texto, sabor, error = false) => {
	if (error) {
		alert(
			texto +
				sabor +
				', el mismo ya está entre los sabores elegidos o puedes haber elegido un valor no válido'
		);
	} else {
		alert(texto + sabor + '');
	}
};

const agregarSabor = () => {
	let sabor;
	let confirmacion = confirm('¿Quieres agregar un sabor?');

	alert('Puedes elegir entre estos sabores: ' + saboresParaElegir);

	{
		while (confirmacion) {
			sabor = ingresarDatos();

			if (sabor !== null) {
				sabor = sabor;
			}

			console.log(sabor);

			if (
				saboresElegidos.indexOf(sabor) === -1 &&
				sabor !== null &&
				sabor !== ''
			) {
				saboresElegidos.push(sabor);
				mensaje('Se agregó el sabor ', sabor);
				console.log(saboresElegidos);
			} else {
				mensaje('Error al agregar el sabor', sabor, true);
				console.log(saboresElegidos);
			}

			confirmacion = confirm('¿Deseas agregar otro sabor?');

			alert('Los sabores elegidos son: ' + saboresElegidos);
		}
	}
};

agregarSabor();
