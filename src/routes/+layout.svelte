<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
