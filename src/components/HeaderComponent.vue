<template>
	<header>
		<nav>
			<router-link to="/" class="logo">
				<img src="@/assets/logo.svg" alt="Logo" />
			</router-link>
			<router-link class="btn" v-if="$store.state.login" to="/usuario">{{ name }}</router-link>
			<router-link v-else to="/login" class="btn">Vender / Login</router-link>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "HeaderComponent",
		computed: {
			name() {
				return this.$store.state.usuario.nome.replace(/ .*/, "");
			},
		},
	};
</script>

<style scoped>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px 20px;
		box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
	}

	.logo {
		padding: 10px 0 0 40px;
	}

	.logo img {
		width: 40px;
	}
</style>
