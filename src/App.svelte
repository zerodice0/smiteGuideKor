<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import 'bulma/css/bulma.css';

	let locationGeneral = [
		{path: '', name: '홈', isSelect: true},
		{path: 'stats' , name: '캐릭터 스테이터스', isSelect: false}
	]
</script>

<main>
	<div class="columns">
		<div class="column is-one-quarter">
			<aside class="menu">
				<p class="menu-label">
					<a href="/#">Main</a>
				</p>
				<p class="menu-label">
					General
				</p>
				<ul class="menu-list">
					{#each locationGeneral as location}
						<li>
							<a href="/#/{location.path}"
								class="{location.isSelect ? 'is-active' : ''}"
								on:click={() =>{
									locationGeneral.filter((location) => location.isSelect == true)
																 .forEach((location) => location.isSelect = false);
									location.isSelect = true;
								}}>
								{location.name}
							</a>
						</li>
					{/each}
				</ul>
			</aside>

		</div>
		<div class="column">
			<Router {routes}/>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>