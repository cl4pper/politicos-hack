<template>
	<div class="view-search">

		<div class="search-bar">
			<v-searchbar></v-searchbar>
		</div>

		<h1 @click="checkPoliticos()">AQUI</h1>

		<ul class="search-result">
		<!-- <li :style="className" v-for="name in dbNames" v-bind:key="name['.key']">
             	<button class="btn btn-danger" @click="removeName(name['.key'])">Remove</button>
              	<button class="btn btn-primary" @click="editName(name['.key'])">Edit</button>
              	<button class="btn btn-success" @click="copyName(name)">Copy</button>
              	{{ name.name }}
            </li> -->
			<li class="card" v-for="politico in callPoliticos" v-bind:key="politico['.key']">
				{{ politico.nome }}
			</li>
		</ul>
	</div>
</template>

<script>
import { politicos } from '../../firebase';
import Searchbar from '../../components/Searchbar/Searchbar';
import Card from '../../components/Card/Card';

export default {
	name: 'viewSearch',
	data: {
		return() {
			testes: [
				{
					nome: "One",
					idade: 17,
				},
				{
					nome: "Two",
					idade: 10,
				}
			]
		}
	},
	firebase: {
		callPoliticos: politicos,
	},
	methods: {
		checkPoliticos: function() {
			alert(this.callPoliticos.length);
			// alert(politicos + "/data")
		}
	},
	components: {
		vSearchbar: Searchbar,
		vCard: Card,
	}
}
</script>

<style lang="scss">
@import './search.scss';
</style>