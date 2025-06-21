<script lang="ts">
	let email = '';
	let password = '';
	let error = '';

	function handleSubmit() {
		if (!email || !password) {
			error = 'Por favor completá todos los campos';
			return;
		}
		error = '';
		console.log('Login exitoso:', { email, password });
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
	<form
		on:submit|preventDefault={handleSubmit}
		class="w-full max-w-sm rounded bg-white p-6 shadow-md"
	>
		<h1 class="mb-4 text-2xl font-bold">Iniciar sesión</h1>

		<input
			type="email"
			bind:value={email}
			placeholder="Correo electrónico"
			class="mb-3 w-full rounded border p-2"
			required
		/>

		<input
			type="password"
			bind:value={password}
			placeholder="Contraseña"
			class="mb-3 w-full rounded border p-2"
			required
		/>

		{#if error}
			<p class="mb-3 text-sm text-red-600">{error}</p>
		{/if}

		<button type="submit" class="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700">
			Ingresar
		</button>
	</form>
</div>
