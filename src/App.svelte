<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import 'bulma/css/bulma.css';

	let items = [
		{path:'', name:'메인 페이지'},
		{path:'items', name:'아이템 일람'},
		{path:'conquests', name:'컨퀘스트 튜토리얼'}
	];

	let gameModes = [
		{path: '/#', name:'메인화면'},
		{path: '/#/items', name: '아이템 일람'},
		{path: '/#/heros', name: '캐릭터 일람'},
		{path: '/#/modes', name: '게임 모드 일람'}
	]

</script>

<main>
	<div class="columns">
		<div class="column is-one-quarter">
			<nav class="panel">
				<p class="panel-heading">
					SMITE
				</p>
				{#each gameModes as mode}
					<div class="panel-tabs">
						<a href="{mode.path}">{mode.name}</a>
					</div>
				{/each}
			</nav>
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

	banner {
		background-color:black;
		width: 100%;
		height: 5rem;
		display: flex;
	}

	navigation {
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