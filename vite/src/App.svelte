<script lang="ts">
	import { autorun } from 'mobx';
	import { MobxSiblingDemo } from '../../sibling/src/mobxSiblingDemo';
	import { onDestroy } from 'svelte';
	import { MobxNonSiblingDemo } from './lib/mobxNonSiblingDemo';

	const mobxSiblingDemo = new MobxSiblingDemo();

	const mobxNonSiblingDemo = new MobxNonSiblingDemo();

	let siblingTheme: MobxSiblingDemo['theme'];
	let nonSiblingTheme: MobxNonSiblingDemo['theme'];

	const destroy = autorun(() => {
		siblingTheme = mobxSiblingDemo.theme;
		nonSiblingTheme = mobxNonSiblingDemo.theme;
	});

	onDestroy(destroy);
</script>
<div class={nonSiblingTheme}>
	<h2>useDefineForClassFields in Vite Directory: Works</h2>
	<p>This Mobx Store is imported from the src directory.</p>
	<p>
		The current theme is {nonSiblingTheme}.
	</p>

	<button on:click={() => mobxNonSiblingDemo.toggleTheme()}>Switch Theme</button>
</div>

<div class={siblingTheme}>
	<h2>useDefineForClassFields in Sibling Directory: Broken</h2>
	<p>This Mobx Store is imported from a sibling directory.</p>
	<p>
		The current theme is {siblingTheme}.
	</p>

	<button on:click={() => mobxSiblingDemo.toggleTheme()}>Switch Theme</button>
</div>


<style>
	.high-contrast {
		background-color: black;
		color: white;
	}
</style>
