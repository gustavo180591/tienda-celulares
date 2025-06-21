import { writable } from 'svelte/store';

export type ProductoCarrito = {
	id: number;
	nombre: string;
	precio: number;
	imagen: string;
	cantidad: number;
};

// Cargar desde localStorage si existe
const stored = localStorage.getItem('carrito');
const inicial = stored ? JSON.parse(stored) : [];

const carrito = writable<ProductoCarrito[]>(inicial);

// Sincronizar cada vez que cambia
carrito.subscribe(value => {
	localStorage.setItem('carrito', JSON.stringify(value));
});

function agregarAlCarrito(producto: ProductoCarrito) {
	carrito.update(items => {
		const existente = items.find(item => item.id === producto.id);
		if (existente) {
			existente.cantidad += producto.cantidad;
			return [...items];
		}
		return [...items, producto];
	});
}

function limpiarCarrito() {
	carrito.set([]);
}

export { carrito, agregarAlCarrito, limpiarCarrito };
