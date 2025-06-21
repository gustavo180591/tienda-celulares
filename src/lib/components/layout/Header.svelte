<script lang="ts">
	import { carrito } from '$lib/stores/cart';
	$: totalItems = $carrito.reduce((sum, item) => sum + item.cantidad, 0);
</script>

<nav class="flex items-center justify-between bg-white px-6 py-4 shadow-md">
	<a href="/" class="text-xl font-bold text-blue-600">📱 Tienda Celulares</a>

	<div class="space-x-6 text-base text-gray-700">
		<a href="/productos" class="hover:text-blue-600">Productos</a>
		<a href="/carrito" class="hover:text-blue-600">
			Carrito
			{#if totalItems > 0}
				<span class="ml-1 rounded-full bg-blue-600 px-2 py-0.5 text-sm text-white"
					>{totalItems}</span
				>
			{/if}
		</a>
	</div>
</nav>
