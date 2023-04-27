<script>
	import Hero from '$lib/components/Hero.svelte';
	import TwoColumns from '$lib/components/TwoColumns.svelte';
	import HeroImageResource from '$lib/images/joshua-sortino-f3uWi9G-lus-unsplash.jpg';
	import Image1 from '$lib/images/joshua-sortino-gii7lF4y0WY-unsplash.jpg';
	import Image2 from '$lib/images/joshua-sortino-xZqr8WtYEJ0-unsplash.jpg';
	import ScrollDown from '../../lib/components/ScrollDown.svelte';
	import { browser } from '$app/environment';
	import lazyload from 'vanilla-lazyload';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload({
			callback_loading: (element) => {
				element.parentElement.classList.add('lazyload-loading');
			},
			callback_loaded: (element) => {
				element.parentElement.classList.remove('lazyload-loading');
			}
		});
	}
</script>

<ScrollDown />
<Hero style="margin-bottom: 120px">
	<img src={HeroImageResource} alt="Hero" width="1920" height="1281" />
</Hero>
<TwoColumns style="margin-bottom: 120px">
	<div slot="column-1">
		<h1>Sorry, checking all the water in this area; there's an escaped fish.</h1>
		<p>
			You know when grown-ups tell you 'everything's going to be fine' and you think they're
			probably lying to make you feel better? I hate yogurt. It's just stuff with bits in. All I've
			got to do is pass as an ordinary human being. Simple. What could possibly go wrong?
		</p>
		<p>
			Saving the world with meals on wheels. You know when grown-ups tell you 'everything's going to
			be fine' and you think they're probably lying to make you feel better? Aw, you're all Mr.
			Grumpy Face today.
		</p>
		<p>
			You hate me; you want to kill me! Well, go on! Kill me! KILL ME! Annihilate? No. No violence.
			I won't stand for it. Not now, not ever, do you understand me?! I'm the Doctor, the Oncoming
			Storm - and you basically meant beat them in a football match, didn't you? It's a fez. I wear
			a fez now. Fezes are cool.
		</p>
	</div>
	<div slot="column-2">
		<img
			src="https://placehold.co/600x400"
			data-src={Image1}
			alt="Column"
			width="1251"
			height="835"
			class="lazy"
		/>
	</div>
</TwoColumns>
<TwoColumns>
	<div slot="column-1">
		<img
			src="https://placehold.co/600x400"
			data-src={Image2}
			alt="Column"
			width="1251"
			height="835"
			class="lazy"
		/>
	</div>
	<div slot="column-2">
		<h1>
			No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't
			call me the Rotmeister.
		</h1>
		<p>
			Did I mention we have comfy chairs? *Insistently* Bow ties are cool! Come on Amy, I'm a normal
			bloke, tell me what normal blokes do! Heh-haa! Super squeaky bum time! The way I see it, every
			life is a pile of good things and bad things.…hey.…the good things don't always soften the bad
			things; but vice-versa the bad things don't necessarily spoil the good things and make them
			unimportant.
		</p>
		<p>
			Saving the world with meals on wheels. I am the last of my species, and I know how that weighs
			on the heart so don't lie to me! Father Christmas. Santa Claus. Or as I've always known him:
			Jeff. All I've got to do is pass as an ordinary human being. Simple. What could possibly go
			wrong? Father Christmas. Santa Claus. Or as I've always known him: Jeff. I am the last of my
			species, and I know how that weighs on the heart so don't lie to me! You know when grown-ups
			tell you 'everything's going to be fine' and you think they're probably lying to make you feel
			better?
		</p>
	</div>
</TwoColumns>

<style>
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	h1 {
		margin-top: 0;
	}

	:global(.lazyload-loading) {
		position: relative;
		z-index: 0;
		overflow: hidden;
		padding: 6px;
	}
	:global(.lazyload-loading::before) {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300),
			linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
		animation: rotate 4s linear infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
