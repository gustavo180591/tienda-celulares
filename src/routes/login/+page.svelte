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

<div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
	<form on:submit|preventDefault={handleSubmit} class="bg-white p-6 rounded shadow-md w-full max-w-sm">
		<h1 class="text-2xl font-bold mb-4">Iniciar sesión</h1>

		<input
			type="email"
			bind:value={email}
			placeholder="Correo electrónico"
			class="w-full mb-3 p-2 border rounded"
			required
		/>

		<input
			type="password"
			bind:value={password}
			placeholder="Contraseña"
			class="w-full mb-3 p-2 border rounded"
			required
		/>

		{#if error}
			<p class="text-red-600 text-sm mb-3">{error}</p>
		{/if}

		<button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
			Ingresar
		</button>
	</form>
</div>
