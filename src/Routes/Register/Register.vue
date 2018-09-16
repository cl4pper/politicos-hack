<template>
	<div class="register">

		<div class="top-text">
			<div class="text">Registre um candito</div>
		</div>

		<!-- REGISTRO DOS DADOS -->
		<div class="register-person">
			<!-- REGISTRO DO NOME -->
			<div class="input-group">
				<input class="name" type="text" placeholder="nome completo..." v-model="politico.nome">
				<!-- <input class="exp" type="number" placeholder="0"> -->
			</div>

			<!-- REGISTRO DO NUMERO DE PROJETOS -->
			<div class="input-group">
				<div class="group-title">Projetos por setor:</div>
				<div class="projects-inputs">
					<div class="input-data">
						<div class="label">Tecnologia</div>
						<input type="number" placeholder="0" v-model="politico.tecnologia">
					</div>

					<div class="input-data">
						<div class="label">Infraestrutura</div>
						<input type="number" placeholder="0" v-model="politico.infra">
					</div>

					<div class="input-data">
						<div class="label">Economia</div>
						<input type="number" placeholder="0" v-model="politico.economia">
					</div>

					<div class="input-data">
						<div class="label">Educação</div>
						<input type="number" placeholder="0" v-model="politico.educacao">
					</div>

					<div class="input-data">
						<div class="label">Segurança</div>
						<input type="number" placeholder="0" v-model="politico.seguranca">
					</div>

					<div class="input-data">
						<div class="label">Cultura</div>
						<input type="number" placeholder="0" v-model="politico.cultura">
					</div>

					<div class="input-data">
						<div class="label">Saúde</div>
						<input type="number" placeholder="0" v-model="politico.saude">
					</div>

					<div class="input-data">
						<div class="label">Indústria</div>
						<input type="number" placeholder="0" v-model="politico.industria">
					</div>

					<div class="input-data">
						<div class="label">Meio Ambiente</div>
						<input type="number" placeholder="0" v-model="politico.ambiente">
					</div>

				</div>
			</div>
		</div>

		<!-- BOTAO DE SUBMISSAO -->
		<div class="submit-register">
			<div class="button" @click="sendPolitico()">
				<div class="label">Registrar</div>
			</div>
		</div>
	</div>
</template>

<script>
import { politicos } from '../../firebase.js';
export default {
	name: 'register',
	data() {
		return {
			politico: {
				nome: "",
				tecnologia: 0,
				educacao: 0,
				saude: 0,
				seguranca: 0,
				economia: 0,
				industria: 0,
				infra: 0,
				cultura: 0,
				ambiente: 0,
			}
		}
	},
	firebase: {
		politicos: politicos,
	},
	methods: {
		showAlert: function() {
			alert(this.politico.tecnologia)
		},
		sendPolitico: function() {
			politicos.push(this.politico);
			this.politico = {
				nome: "",
				tecnologia: 0,
				educacao: 0,
				saude: 0,
				seguranca: 0,
				economia: 0,
				industria: 0,
				infra: 0,
				cultura: 0,
				ambiente: 0,
			}
		}
	}
}

// methods: {
//     showAlert: function() {
//       alert(this.name)
//     },
//     insertName: function() {
//       namesRef.push({ name: this.name })
//       this.name = ""
//     },
//     removeName: function(key) {
//       // alert(this.dbNames.indexOf(name))
//       namesRef.child(key).remove()
//     },
//     editName: function(key) {
//       // alert(this.name)
//       namesRef.child(key).update({name: this.name})
//       this.name = ""
//     },
//     copyName: function(key) {
//       this.name = this.dbNames[this.dbNames.indexOf(key)].name
//       // console.log(this.dbNames[this.dbNames.indexOf(key)].name)
//       // this.name = namesRef.child(key).name
//     }
//   }
</script>

<style lang="scss">
@import './register.scss';
</style>


