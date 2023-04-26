<script>
	import DownArrow from './DownArrow.svelte';
</script>

<div class="scroll-down">
	<div>Scroll down</div>
	<DownArrow class="down-arrow" />
</div>

<style>
	.scroll-down {
		position: fixed;
		z-index: 1;
		bottom: 30px;
		left: 50%;
		transform: translate(-50%, 0);
		color: black;
		font-weight: 400;
		text-transform: uppercase;
		font-size: 16px;
		overflow: visible;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 12px 24px 8px;
		background-color: rgba(240, 248, 255, 0.75);
		border-radius: 20px;
	}

	:global(.down-arrow) {
		margin-top: 8px;
		animation: arrow 1.5s ease-in-out infinite alternate;
	}

	@keyframes arrow {
		0% {
			transform: translateY(-3px);
		}
		100% {
			transform: translateY(3px);
		}
	}
</style>
