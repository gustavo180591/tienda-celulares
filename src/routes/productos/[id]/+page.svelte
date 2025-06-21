<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { carrito } from '$lib/stores/cart';

	let id: number;
	let producto: { id: number; nombre: string; precio: number; imagen: string } | null = null;

	const productos = [
		{ id: 1, nombre: 'iPhone 14 Pro', precio: 999, imagen: 'https://via.placeholder.com/500x300' },
		{
			id: 2,
			nombre: 'Samsung Galaxy S23',
			precio: 899,
			imagen: 'https://via.placeholder.com/500x300'
		},
		{ id: 3, nombre: 'Xiaomi 13 Pro', precio: 799, imagen: 'https://via.placeholder.com/500x300' }
	];

	$: id = +$page.params.id;

	onMount(() => {
		producto = productos.find((p) => p.id === id) ?? null;
	});

	function agregar() {
		if (producto) {
			carrito.agregar({ ...producto, cantidad: 1 });
		}
	}
</script>

{#if producto}
	<section class="min-h-screen bg-gray-100 p-6">
		<div class="mx-auto max-w-2xl overflow-hidden rounded-lg bg-white shadow-md">
			<img src={producto.imagen} alt={producto.nombre} class="h-64 w-full object-cover" />
			<div class="p-6">
				<h1 class="mb-2 text-3xl font-bold">{producto.nombre}</h1>
				<p class="mb-4 text-xl text-gray-700">${producto.precio}</p>
				<button
					on:click={agregar}
					class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	</section>
{:else}
	<p class="p-10 text-center text-xl text-red-600">Producto no encontrado</p>
{/if}
