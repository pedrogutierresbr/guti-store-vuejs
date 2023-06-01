<template>
	<section class="user">
		<nav class="sidenav">
			<ul>
				<li>
					<router-link :to="{ name: 'user' }">Produtos</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'userShopping' }">Compras</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'userSales' }">Vendas</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'userEdit' }">Editar Usuário</router-link>
				</li>
				<li>
					<button @click="logOut">Deslogar</button>
				</li>
			</ul>
		</nav>
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
	</section>
</template>

<script>
	export default {
		name: "UserView",
		methods: {
			async logOut() {
				await this.$store.dispatch("logOutUser");
				await this.$router.push({ name: "login" });
			},
		},
	};
</script>

<style scoped>
	.user {
		display: grid;
		grid-template-columns: minmax(140px, 200px) 1fr;
		max-width: 900px;
		margin: 40px auto;
		gap: 30px;
		padding: 20px;
	}

	@media screen and (max-width: 500px) {
		.user {
			grid-template-columns: 1fr;
			margin: 0px auto;
		}
	}

	.sidenav a,
	.sidenav button {
		padding: 10px;
		display: block;
		background: #f4f7fc;
		margin-bottom: 10px;
		border-radius: 4px;
	}

	.sidenav a.router-link-exact-active,
	.sidenav a:hover,
	.sidenav button:hover {
		background: linear-gradient(225.29deg, #3fb984 0%, #1b2923 100%);
		color: #fff;
	}

	.sidenav button {
		border: none;
		width: 100%;
		font-size: 1rem;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
		cursor: pointer;
	}
</style>
