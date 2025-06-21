import { writable } from 'svelte/store';

export type ProductoCarrito = {
	id: number;
	nombre: string;
	precio: number;
	imagen: string;
	cantidad: number;
};

function createCarritoStore() {
	const isBrowser = typeof window !== 'undefined';

	// Inicialización segura del estado
	const stored = isBrowser ? localStorage.getItem('carrito') : null;
	const initial = stored ? JSON.parse(stored) : [];

	const { subscribe, set, update } = writable<ProductoCarrito[]>(initial);

	// Sincronizar con localStorage (solo en navegador)
	if (isBrowser) {
		subscribe((value) => {
			localStorage.setItem('carrito', JSON.stringify(value));
		});
	}

	return {
		subscribe,
		set,
		update,
		agregar: (producto: ProductoCarrito) =>
			update((items) => {
				const existente = items.find((item) => item.id === producto.id);
				if (existente) {
					existente.cantidad += producto.cantidad;
					return [...items];
				}
				return [...items, producto];
			}),
		eliminar: (id: number) =>
			update((items) => items.filter((item) => item.id !== id)),
		limpiar: () => set([])
	};
}

export const carrito = createCarritoStore();
