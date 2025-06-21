<script lang="ts">
	type Producto = {
		id: number;
		nombre: string;
		precio: number;
		imagen: string;
	};

	const productos: Producto[] = [
		{ id: 1, nombre: "iPhone 14 Pro", precio: 999, imagen: "https://via.placeholder.com/300x200" },
		{ id: 2, nombre: "Samsung Galaxy S23", precio: 899, imagen: "https://via.placeholder.com/300x200" },
		{ id: 3, nombre: "Xiaomi 13 Pro", precio: 799, imagen: "https://via.placeholder.com/300x200" },
	];
</script>

<section class="min-h-screen bg-gray-100 p-6">
	<h1 class="text-3xl font-bold mb-6 text-center">Catálogo de Celulares</h1>

	<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		{#each productos as producto}
			<div class="bg-white rounded-lg shadow-md overflow-hidden">
				<img src={producto.imagen} alt={producto.nombre} class="w-full h-48 object-cover" />
				<div class="p-4">
					<h2 class="text-xl font-semibold">{producto.nombre}</h2>
					<p class="text-gray-600">${producto.precio}</p>
					<button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
						<a href={`/productos/${producto.id}`} class="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Ver más
                        </a>
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>
