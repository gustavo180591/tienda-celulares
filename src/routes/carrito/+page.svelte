<script lang="ts">
	import { carrito } from '$lib/stores/cart';
	import { goto } from '$app/navigation';

	// Reactividad automática al store
	$: items = $carrito;
	$: total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

	function eliminar(id: number) {
		carrito.eliminar(id);
	}

	function irAlCheckout() {
		goto('/checkout');
	}
</script>

<section class="min-h-screen bg-gray-100 p-6">
	<h1 class="mb-6 text-center text-3xl font-bold">Tu carrito</h1>

	{#if items.length > 0}
		<div class="space-y-4">
			{#each items as item}
				<div class="flex items-center justify-between rounded bg-white p-4 shadow">
					<div class="flex items-center gap-4">
						<img src={item.imagen} alt={item.nombre} class="h-24 w-24 rounded object-cover" />
						<div>
							<p class="text-lg font-semibold">{item.nombre}</p>
							<p class="text-gray-600">Cantidad: {item.cantidad}</p>
							<p class="font-bold text-gray-800">${item.precio * item.cantidad}</p>
						</div>
					</div>

					<!-- Botón ❌ para eliminar -->
					<button
						on:click={() => eliminar(item.id)}
						class="text-lg font-bold text-red-600 hover:text-red-800"
						title="Eliminar del carrito"
					>
						❌
					</button>
				</div>
			{/each}

			<div class="mt-6 text-right">
				<p class="text-xl font-semibold">Total: ${total}</p>
				<button
					on:click={irAlCheckout}
					class="mt-4 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
				>
					Ir al checkout
				</button>
			</div>
		</div>
	{:else}
		<p class="mt-10 text-center text-xl text-gray-600">Tu carrito está vacío.</p>
	{/if}
</section>
