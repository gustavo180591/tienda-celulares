<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let id: number;
	let producto: { nombre: string; precio: number; imagen: string } | null = null;

	const productos = [
		{ id: 1, nombre: "iPhone 14 Pro", precio: 999, imagen: "https://via.placeholder.com/500x300" },
		{ id: 2, nombre: "Samsung Galaxy S23", precio: 899, imagen: "https://via.placeholder.com/500x300" },
		{ id: 3, nombre: "Xiaomi 13 Pro", precio: 799, imagen: "https://via.placeholder.com/500x300" },
	];

	$: id = +$page.params.id;

	onMount(() => {
		producto = productos.find(p => p.id === id) ?? null;
	});
</script>

{#if producto}
	<section class="min-h-screen bg-gray-100 p-6">
		<div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
			<img src={producto.imagen} alt={producto.nombre} class="w-full h-64 object-cover" />
			<div class="p-6">
				<h1 class="text-3xl font-bold mb-2">{producto.nombre}</h1>
				<p class="text-gray-700 text-xl mb-4">${producto.precio}</p>
				<button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
					Agregar al carrito
				</button>
			</div>
		</div>
	</section>
{:else}
	<p class="text-center p-10 text-red-600 text-xl">Producto no encontrado</p>
{/if}
