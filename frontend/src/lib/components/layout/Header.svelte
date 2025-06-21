<script lang="ts">
	import { carrito } from '$lib/stores/cart';
	$: totalItems = $carrito.reduce((sum, item) => sum + item.cantidad, 0);
</script>

<nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center">
	<a href="/" class="text-xl font-bold text-blue-600">📱 Tienda Celulares</a>

	<div class="space-x-6 text-gray-700 text-base">
		<a href="/productos" class="hover:text-blue-600">Productos</a>
		<a href="/carrito" class="hover:text-blue-600">
			Carrito
			{#if totalItems > 0}
				<span class="ml-1 text-sm bg-blue-600 text-white px-2 py-0.5 rounded-full">{totalItems}</span>
			{/if}
		</a>
	</div>
</nav>
