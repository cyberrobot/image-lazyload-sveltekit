<script>
	import { onMount } from 'svelte';

	export let src;
	export let alt;
	export let width;
	export let height;
	export let placeholder = 'https://placehold.co/600x400';

	let observer;
	let ref;

	const options = {
		threshold: 0.5
	};

	onMount(() => {
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.src = entry.target.dataset.src;
					observer.unobserve(entry.target);
				}
			});
		}, options);

		observer.observe(ref);
	});
</script>

<img src={placeholder} {alt} data-src={src} {width} {height} bind:this={ref} />

<style>
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	img:not([src]):not([srcset]) {
		visibility: hidden;
	}
</style>
