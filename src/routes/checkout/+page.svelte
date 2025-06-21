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
	<h1 class="text-3xl font-bold mb-6 text-center">Confirmar compra</h1>

	{#if confirmado}
		<p class="text-green-700 text-xl text-center">✅ ¡Gracias por tu compra! Serás redirigido...</p>
	{:else if items.length > 0}
		<div class="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
			{#each items as item}
				<div class="flex justify-between">
					<p>{item.nombre} x{item.cantidad}</p>
					<p>${item.precio * item.cantidad}</p>
				</div>
			{/each}
			<hr />
			<p class="text-right font-bold text-lg">Total: ${total}</p>

			<button
				class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-4"
				on:click={confirmarCompra}>
				Confirmar compra
			</button>
		</div>
	{:else}
		<p class="text-center text-gray-600 text-xl">Tu carrito está vacío.</p>
	{/if}
</section>
