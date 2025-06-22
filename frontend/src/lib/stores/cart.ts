import { writable, derived } from 'svelte/store';

export type ProductoCarrito = {
	id: number;
	nombre: string;
	precio: number;
	imagen: string;
	cantidad: number;
};

const isBrowser = typeof window !== 'undefined';

const stored = isBrowser ? localStorage.getItem('carrito') : null;
const initial: ProductoCarrito[] = stored ? JSON.parse(stored) : [];

const carritoStore = writable<ProductoCarrito[]>(initial);

// Sincronizar con localStorage (solo si estamos en el navegador)
if (isBrowser) {
	carritoStore.subscribe((value) => {
		localStorage.setItem('carrito', JSON.stringify(value));
	});
}

// Store derivado para contar la cantidad total de productos
export const cartCount = derived(carritoStore, ($carrito) =>
	$carrito.reduce((total, item) => total + item.cantidad, 0)
);

// Acciones personalizadas
export const carrito = {
	subscribe: carritoStore.subscribe,
	set: carritoStore.set,
	update: carritoStore.update,
	agregar: (producto: ProductoCarrito) =>
		carritoStore.update((items) => {
			const existente = items.find((item) => item.id === producto.id);
			if (existente) {
				existente.cantidad += producto.cantidad;
				return [...items];
			}
			return [...items, producto];
		}),
	eliminar: (id: number) =>
		carritoStore.update((items) => items.filter((item) => item.id !== id)),
	limpiar: () => carritoStore.set([])
};
