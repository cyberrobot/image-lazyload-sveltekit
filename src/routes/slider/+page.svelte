<script>
	import Swiper, { Navigation, Pagination } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import { onMount, onDestroy } from 'svelte';
	import Lazyload from 'vanilla-lazyload';
	import { browser } from '$app/environment';
	import Image1 from '$lib/images/joshua-sortino-f3uWi9G-lus-unsplash.jpg?w=998&h=665&webp';
	import Image2 from '$lib/images/joshua-sortino-gii7lF4y0WY-unsplash.jpg?w=998&h=665&webp';
	import Image3 from '$lib/images/joshua-sortino-xZqr8WtYEJ0-unsplash.jpg?w=998&h=665&webp';
	import Image4 from '$lib/images/richard-dorran-pyIGuqVX6k4-unsplash.jpg?w=998&h=665&webp';

	let images = [{ src: Image1 }, { src: Image2 }, { src: Image3 }, { src: Image4 }];
	let swiper;

	onMount(() => {
		if (browser && !document.lazyloadInstance) {
			document.lazyloadInstance = new Lazyload();
		}

		swiper = new Swiper('.swiper-container', {
			lazy: true,
			modules: [Navigation, Pagination],
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});

	onDestroy(() => {
		if (!swiper) return;
		swiper.destroy();
	});
</script>

<div class="container">
	<h2>Native lazy load</h2>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			{#each images as image}
				<div class="swiper-slide">
					<img src={image.src} alt="" loading="lazy" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div>
			{/each}
		</div>
		<div class="swiper-button-next" />
		<div class="swiper-button-prev" />
		<div class="swiper-pagination" />
	</div>
</div>
<div class="container">
	<h2>Vanilla-lazyload plugin</h2>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			{#each images as image}
				<div class="swiper-slide">
					<img data-src={image.src} alt="" class="lazy" />
					<div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
				</div>
			{/each}
		</div>
		<div class="swiper-button-next" />
		<div class="swiper-button-prev" />
		<div class="swiper-pagination" />
	</div>
</div>

<style>
	.container {
		width: 800px;
		margin: 0 auto;
		--swiper-navigation-color: #fff;
		--swiper-pagination-color: #fff;
	}

	.swiper-container {
		width: 800px;
		height: auto;
		overflow: hidden;
		position: relative;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
