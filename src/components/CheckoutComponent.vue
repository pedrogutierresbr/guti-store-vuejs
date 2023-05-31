<template>
	<section>
		<h2>Endereço de envio</h2>
		<UserForm>
			<button class="btn" @click.prevent="finalizeTransaction">Finalizar Compra</button>
		</UserForm>
	</section>
</template>

<script>
	import UserForm from "@/components/UserComponents/UserForm.vue";
	import { mapState } from "vuex";
	import { api } from "@/services/index";

	export default {
		name: "CheckoutComponent",
		props: ["produto"],
		components: {
			UserForm,
		},
		computed: {
			...mapState(["usuario"]),
			compra() {
				return {
					comprador_id: this.usuario.email,
					vendedor_id: this.produto.usuario_id,
					produto: this.produto,
					endereco: {
						cep: this.usuario.cep,
						rua: this.usuario.rua,
						numero: this.usuario.numero,
						bairro: this.usuario.bairro,
						cidade: this.usuario.cidade,
						estado: this.usuario.estado,
					},
				};
			},
		},
		methods: {
			createTransaction() {
				return api.post("/transacao", this.compra).then(() => {
					this.$router.push({ name: "userShopping" });
				});
			},
			async createUser() {
				try {
					await this.$store.dispatch("createNewUser", this.$store.state.usuario);
					await this.$store.dispatch("getUser", this.$store.state.usuario.email);
					await this.createTransaction();
				} catch (error) {
					console.log(error);
				}
			},
			finalizeTransaction() {
				if (this.$store.state.login) {
					this.createTransaction();
				} else {
					this.createUser();
				}
			},
		},
	};
</script>

<style scoped>
	h2 {
		margin-top: 40px;
		margin-bottom: 20px;
	}

	.btn {
		background: #e80;
	}
</style>
