import { writable } from 'svelte/store';

type Producto = {
	id: number;
	nombre: string;
	precio: number;
	imagen: string;
};

function createCart() {
	const stored = localStorage.getItem('carrito');
	const initial = stored ? JSON.parse(stored) : [];

	const { subscribe, set, update } = writable<Producto[]>(initial);

	subscribe((value) => {
		localStorage.setItem('carrito', JSON.stringify(value));
	});

	return {
		subscribe,
		add: (producto: Producto) =>
			update((items) => {
				// Evitar duplicados
				if (!items.find((p) => p.id === producto.id)) {
					return [...items, producto];
				}
				return items;
			}),
		remove: (id: number) => update((items) => items.filter((p) => p.id !== id)),
		clear: () => set([]),
	};
}

export const carrito = createCart();
