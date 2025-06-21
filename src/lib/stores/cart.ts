import { writable } from 'svelte/store';

export type ProductoCarrito = {
	id: number;
	nombre: string;
	precio: number;
	imagen: string;
	cantidad: number;
};

// Función para obtener el carrito del localStorage de manera segura
const getStoredCart = (): ProductoCarrito[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('carrito');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const carrito = writable<ProductoCarrito[]>(getStoredCart());

// Sincronizar cada vez que cambia (solo en el cliente)
if (typeof window !== 'undefined') {
  carrito.subscribe(value => {
    localStorage.setItem('carrito', JSON.stringify(value));
  });
}

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
