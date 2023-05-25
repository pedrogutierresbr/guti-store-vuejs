<template>
	<section class="login">
		<h1>Login</h1>
		<form>
			<label for="email">Email</label>
			<input type="email" name="email" id="email" v-model="login.email" />
			<label for="senha">Senha</label>
			<input type="password" name="senha" id="password" v-model="login.password" />
			<button class="btn" @click.prevent="logIn">Logar</button>
		</form>
		<p class="lost-password">
			<a href="/" target="_blank">Esqueceu a senha? Clique aqui.</a>
		</p>
		<LoginCreate />
	</section>
</template>

<script>
	import LoginCreate from "@/components/Login/LoginCreate.vue";
	export default {
		name: "LoginView",
		components: {
			LoginCreate,
		},
		data() {
			return {
				login: {
					email: "",
					password: "",
				},
			};
		},
		methods: {
			logIn() {
				this.$store.dispatch("getUser", this.login.email);
				this.$router.push({ name: "user" });
			},
		},
	};
</script>

<style scoped>
	.login {
		max-width: 500px;
		margin: 0 auto;
		padding: 0 20px;
	}

	h1 {
		text-align: center;
		font-size: 2rem;
		margin-top: 40px;
		color: #87f;
	}

	form {
		display: grid;
	}

	.btn {
		width: 100%;
		max-width: 300px;
		margin-left: auto;
		margin-right: auto;
	}

	.lost-password {
		text-align: center;
		margin: 20px auto 0 auto;
	}

	.lost-password:hover {
		color: #87f;
		text-decoration: underline;
	}
</style>
