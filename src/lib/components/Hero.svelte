<script>
	import ScrollDown from './ScrollDown.svelte';
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
		max-width: 80%;
		margin: 0 auto 200vh;
	}
</style>
