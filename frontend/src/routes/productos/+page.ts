// frontend/src/routes/productos/+page.ts
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  // Add other product properties as needed
}

export async function load() {
  const res = await fetch('http://localhost:3000/productos');

  if (!res.ok) {
    throw new Error('Error al cargar productos');
  }

  const productos: Producto[] = await res.json();
  return { productos };
}
