<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

	let items = [
		{path:'', name:'home'},
		{path:'items', name:'items'},
		{path:'conquests', name:'conquests'}
	];

</script>

<main>
	<div class="flex-container">
		{#each items as item}
			<div class="flex-box">
				<a href="/#/{item.path}">
					{item.name}
				</a>
			</div>
		{/each}
	</div>

  <Router {routes}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.flex-container {
		color: #ff3e00;
		font-size: 1em;
		font-weight: 100;
		display: flex;
	}

	.flex-box {
		margin-left: 5px;
		margin-right: 5px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>