import { writable } from 'svelte/store';

export type ProductoCarrito = {
	id: number;
	nombre: string;
	precio: number;
	imagen: string;
	cantidad: number;
};

const carrito = writable<ProductoCarrito[]>([]);

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
