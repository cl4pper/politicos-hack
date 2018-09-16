<template>
	<div class="sidebar">

		<!-- DESKTOP VIEW -->
		<div class="sidebar-desktop">
			<div class="sidebar-header">{{ title }}</div>
			<div class="sidemenu-content">
				<a href="/" class="item"><i class="fas fa-home"></i>Início</a>
				<a href="/lista" class="item"><i class="fas fa-search"></i> Lista</a>
				<a href="/registro" class="item"><i class="fas fa-users"></i>Cadastro</a>
			</div>
		</div>

		<!-- MOBILE VIEW -->
		<div class="sidebar-mobile">
			<div class="sidebar-content">
				<div class="item"><i class="fas fa-bars"></i></div>
				<div class="item title">Politicos</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sidebar',
	props: {
		title: {
			type: String,
			default: "Titulo",
			required: false,
		}
	},
}
</script>

<style lang="scss">
@import './sidebar.scss';
</style>

