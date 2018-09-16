<template>
	<div class="register">

		<div class="top-text">
			<div class="text">Registre um candito</div>
		</div>

		<div class="register-person">
			<div class="input-group">
				<input class="name" type="text" placeholder="nome completo...">
				<!-- <input class="exp" type="number" placeholder="0"> -->
			</div>
			<div class="input-group">
				<div class="group-title">Projetos por setor:</div>
				<div class="projects-inputs">
					<div class="input-data">
						<div class="label">Ciência</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Infraestrutura</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Transporte</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Economia</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Educação</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Segurança</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Cultura</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Saúde</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Agricultura</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Indústria</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Esporte</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Energia</div>
						<input type="number" placeholder="0">
					</div>

					<div class="input-data">
						<div class="label">Meio Ambiente</div>
						<input type="number" placeholder="0">
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'register',
}
</script>

<style lang="scss">
@import './register.scss';
</style>


