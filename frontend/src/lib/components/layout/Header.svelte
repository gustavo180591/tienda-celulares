<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { goto } from '$app/navigation';
  
	const activeRoute = derived(page, $page => $page.url.pathname);
	
	const navItems = [
	  { label: 'Inicio', path: '/' },
	  { label: 'Productos', path: '/productos' },
	  { label: 'Carrito 🛒', path: '/carrito' }
	];
  
	function navigate(path: string) {
	  goto(path);
	}
  </script>
  
  <nav class="bg-white border-b border-gray-200 shadow-sm">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
	  <h1 class="text-xl font-bold text-gray-800 cursor-pointer" on:click={() => navigate('/')}>
		Tienda Celulares
	  </h1>
  
	  <ul class="flex space-x-6">
		{#each navItems as item}
		  <li>
			<a
			  href={item.path}
			  class="text-gray-600 hover:text-blue-600 font-medium transition-all duration-200"
			  class:selected={$activeRoute === item.path ? 'text-blue-600 font-semibold' : ''}
			>
			  {item.label}
			</a>
		  </li>
		{/each}
	  </ul>
	</div>
  </nav>
  
  <style>
	a.selected {
	  border-bottom: 2px solid #2563eb; /* Tailwind's blue-600 */
	  padding-bottom: 2px;
	}
  </style>
  