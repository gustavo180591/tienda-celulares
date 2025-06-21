<script lang="ts">
	import { carrito } from '$lib/stores/cart';
	import { eliminarDelCarrito } from '$lib/stores/cart';

	import { get } from 'svelte/store';

	$: items = $carrito;
	$: total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
</script>

<section class="min-h-screen bg-gray-100 p-6">
	<h1 class="text-3xl font-bold mb-6 text-center">Tu carrito</h1>

	{#if items.length > 0}
		<div class="space-y-4">
			{#each items as item}
				<div class="flex items-center justify-between bg-white p-4 rounded shadow">
					<div class="flex items-center gap-4">
						<img src={item.imagen} alt={item.nombre} class="w-24 h-24 object-cover rounded" />
						<div>
							<p class="text-lg font-semibold">{item.nombre}</p>
							<p class="text-gray-600">Cantidad: {item.cantidad}</p>
							<p class="text-gray-800 font-bold">${item.precio * item.cantidad}</p>
						</div>
					</div>
					<!-- Eliminar botón (opcional más adelante) -->
					<button
					on:click={() => eliminarDelCarrito(item.id)}
					class="text-red-600 hover:text-red-800 font-bold text-lg"
					title="Eliminar del carrito">
					❌
				</button>
				</div>
			{/each}

			<div class="text-right mt-6">
				<p class="text-xl font-semibold">Total: ${total}</p>
				<button class="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
					Finalizar compra
				</button>
			</div>
		</div>
	{:else}
		<p class="text-center text-gray-600 text-xl mt-10">Tu carrito está vacío.</p>
	{/if}
</section>
