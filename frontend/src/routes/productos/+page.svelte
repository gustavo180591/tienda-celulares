<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl font-bold mb-4">Catálogo de Productos</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each data.productos as producto}
		<div class="border p-4 rounded shadow hover:shadow-md transition">
			<img src={producto.imagen} alt={producto.nombre} class="w-full h-48 object-cover rounded mb-2" />
			<h2 class="text-lg font-semibold">{producto.nombre}</h2>
			<p class="text-gray-700 mb-2">${producto.precio}</p>
			<button
				on:click={() => alert(`Agregar ${producto.nombre} al carrito`)}
				class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
			>
				Añadir al carrito
			</button>
		</div>
	{/each}
</div>
