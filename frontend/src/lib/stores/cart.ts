import { writable, type Writable } from 'svelte/store';

export interface ProductoCarrito {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    cantidad: number;
}

interface CarritoStore extends Writable<ProductoCarrito[]> {
    agregarProducto: (producto: Omit<ProductoCarrito, 'cantidad'>, cantidad?: number) => void;
    eliminarProducto: (id: number) => void;
    actualizarCantidad: (id: number, cantidad: number) => void;
    vaciarCarrito: () => void;
    totalItems: () => number;
    totalPrecio: () => number;
}

function createCarritoStore(): CarritoStore {
    const isBrowser = typeof window !== 'undefined';
    const initialValue: ProductoCarrito[] = [];

    // Inicialización segura del estado
    if (isBrowser) {
        const stored = localStorage.getItem('carrito');
        if (stored) {
            try {
                initialValue.push(...JSON.parse(stored));
            } catch (e) {
                console.error('Error al analizar el carrito del localStorage', e);
            }
        }
    }

    const { subscribe, set, update } = writable<ProductoCarrito[]>(initialValue);

    // Sincronizar con localStorage (solo en navegador)
    if (isBrowser) {
        subscribe((value) => {
            try {
                localStorage.setItem('carrito', JSON.stringify(value));
            } catch (e) {
                console.error('Error al guardar en localStorage', e);
            }
        });
    }
    
    return {
        subscribe,
        set,
        update,
        agregarProducto: (producto: Omit<ProductoCarrito, 'cantidad'>, cantidad: number = 1) => {
            if (cantidad <= 0) return;
            
            update(items => {
                const existe = items.find(item => item.id === producto.id);
                if (existe) {
                    return items.map(item => 
                        item.id === producto.id 
                            ? { ...item, cantidad: item.cantidad + cantidad }
                            : item
                    );
                }
                return [...items, { ...producto, cantidad }];
            });
        },
        eliminarProducto: (id: number) => {
            update(items => items.filter(item => item.id !== id));
        },
        actualizarCantidad: (id: number, cantidad: number) => {
            if (cantidad <= 0) {
                update(items => items.filter(item => item.id !== id));
                return;
            }
            update(items => 
                items.map(item => 
                    item.id === id ? { ...item, cantidad } : item
                )
            );
        },
        vaciarCarrito: () => {
            set([]);
        },
        totalItems: () => {
            let total = 0;
            update(items => {
                total = items.reduce((sum, item) => sum + item.cantidad, 0);
                return items;
            });
            return total;
        },
        totalPrecio: () => {
            let total = 0;
            update(items => {
                total = items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
                return items;
            });
            return total;
        }
    };
}

export const carrito = createCarritoStore();
