<script>
	import { onMount } from 'svelte';

	export let src;
	export let alt;
	export let width;
	export let height;

	let observer;
	let ref;

	const options = {
		threshold: 0.5
	};

	onMount(() => {
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const image = entry.target.getElementsByTagName('img')[0];
					image.src = image.dataset.src;
					entry.target.style.width = '';
					entry.target.style.height = '';
					observer.unobserve(entry.target);
				}
			});
		}, options);

		observer.observe(ref);
	});
</script>

<figure bind:this={ref} style="width: {width}px; height: {height}px">
	<img {alt} data-src={src} {width} {height} />
</figure>

<style>
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	figure {
		margin: 0;
	}

	img:not([src]):not([srcset]) {
		visibility: hidden;
	}
</style>
