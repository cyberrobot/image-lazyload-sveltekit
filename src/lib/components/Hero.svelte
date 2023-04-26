<script>
	export let style;
</script>

<div class="container" {style}>
	<slot />
</div>

<style>
	.container {
		max-width: 80%;
		margin: 0 auto;
	}
</style>
