<template>
	<div class="view-search">

		<div class="page-title">
			<div class="text">Listas</div>
			<div class="sub-text">Essas são as melhores opções, segundo as suas preferências</div>
		</div>

		<div class="list-group">
			<div class="list">
				<div class="list-title">Educação</div>
				<div class="list-content">
					<ul class="card-group" v-if="callPoliticos.length > 0">
						<li class="card-element" v-for="politico in callPoliticos" v-bind:key="politico['.key']">
							<div class="card" v-if="getPercent(politico.educacao, politico.total)">
								<!-- PARTE DO CARD COM O NOME -->
								<div class="card-info">
									<div class="status">
										<div class="verde" v-if="politico.processo === false"></div>
										<div class="vermelho" v-else></div>
									</div>
									<div class="text">
										<div class="name"><div>{{ politico.nome }}</div></div>
									</div>
								</div>
								<!-- PARTE DO CARD COM OS NUMEROS -->
								<div class="card-data">
									<div class="data-projects">{{ politico.total }}</div>
									<div class="data-percent">{{ getResult(politico.educacao, politico.total) }}%</div>
								</div>
							</div>
						</li>
					</ul>
					<ul class="card-group" v-else>...</ul>
				</div>
			</div>

			<div class="list">
				<div class="list-title">Saúde</div>
				<div class="list-content">
					<ul class="card-group" v-if="callPoliticos.length > 0">
						<li class="card-element" v-for="politico in callPoliticos" v-bind:key="politico['.key']">
							<div class="card" v-if="getPercent(politico.saude, politico.total)">
								<!-- PARTE DO CARD COM O NOME -->
								<div class="card-info">
									<div class="status">
										<div class="verde" v-if="politico.processo === false"></div>
										<div class="vermelho" v-else></div>
									</div>
									<div class="text">
										<div class="name"><div>{{ politico.nome }}</div></div>
									</div>
								</div>
								<!-- PARTE DO CARD COM OS NUMEROS -->
								<div class="card-data">
									<div class="data-projects">{{ politico.total }}</div>
									<div class="data-percent">{{ getResult(politico.saude, politico.total) }}%</div>
								</div>
							</div>
						</li>
					</ul>
					<ul class="card-group" v-else>...</ul>
				</div>
			</div>

			<div class="list">
				<div class="list-title">Tecnologia</div>
				<div class="list-content">
					<ul class="card-group" v-if="callPoliticos.length > 0">
						<li class="card-element" v-for="politico in callPoliticos" v-bind:key="politico['.key']">
							<div class="card" v-if="getPercent(politico.tecnologia, politico.total)">
								<!-- PARTE DO CARD COM O NOME -->
								<div class="card-info">
									<div class="status">
										<div class="verde" v-if="politico.processo === false"></div>
										<div class="vermelho" v-else></div>
									</div>
									<div class="text">
										<div class="name"><div>{{ politico.nome }}</div></div>
									</div>
								</div>
								<!-- PARTE DO CARD COM OS NUMEROS -->
								<div class="card-data">
									<div class="data-projects">{{ politico.total }}</div>
									<div class="data-percent">{{ getResult(politico.tecnologia, politico.total) }}%</div>
								</div>
							</div>
						</li>
					</ul>
					<ul class="card-group" v-else>...</ul>
				</div>
			</div>

			<div class="list">
				<div class="list-title">Economia</div>
				<div class="list-content">
					<ul class="card-group" v-if="callPoliticos.length > 0">
						<li class="card-element" v-for="politico in callPoliticos" v-bind:key="politico['.key']">
							<div class="card" v-if="getPercent(politico.economia, politico.total)">
								<!-- PARTE DO CARD COM O NOME -->
								<div class="card-info">
									<div class="status">
										<div class="verde" v-if="politico.processo === false"></div>
										<div class="vermelho" v-else></div>
									</div>
									<div class="text">
										<div class="name"><div>{{ politico.nome }}</div></div>
									</div>
								</div>
								<!-- PARTE DO CARD COM OS NUMEROS -->
								<div class="card-data">
									<div class="data-projects">{{ politico.total }}</div>
									<div class="data-percent">{{ getResult(politico.economia, politico.total) }}%</div>
								</div>
							</div>
						</li>
					</ul>
					<ul class="card-group" v-else>...</ul>
				</div>
			</div>

			<div class="list">
				<div class="list-title">Segurança</div>
				<div class="list-content">
					<ul class="card-group" v-if="callPoliticos.length > 0">
						<li class="card-element" v-for="politico in callPoliticos" v-bind:key="politico['.key']">
							<div class="card" v-if="getPercent(politico.seguranca, politico.total)">
								<!-- PARTE DO CARD COM O NOME -->
								<div class="card-info">
									<div class="status">
										<div class="verde" v-if="politico.processo === false"></div>
										<div class="vermelho" v-else></div>
									</div>
									<div class="text">
										<div class="name"><div>{{ politico.nome }}</div></div>
									</div>
								</div>
								<!-- PARTE DO CARD COM OS NUMEROS -->
								<div class="card-data">
									<div class="data-projects">{{ politico.total }}</div>
									<div class="data-percent">{{ getResult(politico.seguranca, politico.total) }}%</div>
								</div>
							</div>
						</li>
					</ul>
					<ul class="card-group" v-else>...</ul>
				</div>
			</div>
		</div>

		<!-- <ul v-if="callPoliticos.length > 0" class="search-result">
			<li class="loop-element" v-for="politico in callPoliticos" v-bind:key="politico['.key']">
				<div class="card" v-if="getPercent(politico.educacao, politico.total)">
					<div class="info">
						<div class="name">{{ politico.nome }}</div>
						<div class="verde" v-if="politico.processo === false"></div>
						<div class="vermelho" v-else></div>
					</div>
					<div class="numbers">
						<div class="main">{{ politico.total }}</div>
						<div>{{ getResult(politico.educacao, politico.total) }}%</div>
					</div>
				</div>
				<div style="display: none;" v-else></div>
			</li>
		</ul> -->
	</div>
</template>

<script>
import { politicos } from '../../firebase';
import Searchbar from '../../components/Searchbar/Searchbar';
import Card from '../../components/Card/Card';

export default {
	name: 'viewSearch',
	firebase: {
		callPoliticos: politicos,
	},
	methods: {
		checkPoliticos: function() {
			alert(this.callPoliticos.length);
			// alert(politicos + "/data")
		},
		getPercent: function(value, total) {
			var result = (Number(value)/Number(total)) * 100;
			if(result >= 20) {
				return true;
			} else {
				return false;
			}
		},
		getResult: function(value, total) {
			return ((Number(value)/Number(total)) * 100).toFixed(0);
		},
	},
	computed: {},
	components: {
		vSearchbar: Searchbar,
		vCard: Card,
	}
}
</script>

<style lang="scss">
@import './search.scss';
</style>