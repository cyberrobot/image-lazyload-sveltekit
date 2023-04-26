<script>
	export let style;
</script>

<div class="column-container" {style}>
	<div class="column">
		<slot name="column-1" />
	</div>
	<div class="column">
		<slot name="column-2" />
	</div>
</div>

<style>
	.column-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 80%;
		gap: 40px;
	}

	.column {
		flex: 1;
	}
</style>
