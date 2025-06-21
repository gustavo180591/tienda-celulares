<script lang="ts">
	import { carrito } from '$lib/stores/cart';
	import { goto } from '$app/navigation';

	let confirmado = false;
	let items = $carrito;
	let total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

	function confirmarCompra() {
		carrito.limpiar();
		confirmado = true;
		setTimeout(() => {
			goto('/productos');
		}, 2500); // redirige después de 2.5s
	}
</script>

<section class="min-h-screen bg-gray-100 p-6">
	<h1 class="mb-6 text-center text-3xl font-bold">Confirmar compra</h1>

	{#if confirmado}
		<p class="text-center text-xl text-green-700">✅ ¡Gracias por tu compra! Serás redirigido...</p>
	{:else if items.length > 0}
		<div class="mx-auto max-w-xl space-y-4 rounded bg-white p-6 shadow">
			{#each items as item}
				<div class="flex justify-between">
					<p>{item.nombre} x{item.cantidad}</p>
					<p>${item.precio * item.cantidad}</p>
				</div>
			{/each}
			<hr />
			<p class="text-right text-lg font-bold">Total: ${total}</p>

			<button
				class="mt-4 w-full rounded bg-green-600 py-2 text-white hover:bg-green-700"
				on:click={confirmarCompra}
			>
				Confirmar compra
			</button>
		</div>
	{:else}
		<p class="text-center text-xl text-gray-600">Tu carrito está vacío.</p>
	{/if}
</section>
