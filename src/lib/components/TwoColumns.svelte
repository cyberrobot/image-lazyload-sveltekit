<script>
	import ScrollDown from './ScrollDown.svelte';
</script>

<div class="column-container">
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
		margin: 0 auto 200vh;
		max-width: 80%;
		gap: 40px;
	}

	.column {
		flex: 1;
	}
</style>
