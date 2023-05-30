<template>
	<section>
		<UserForm>
			<button class="btn" @click.prevent="userUpdate">Atualizar Usuário</button>
		</UserForm>
	</section>
</template>

<script>
	import UserForm from "@/components/UserComponents/UserForm.vue";
	import { api } from "@/services/index";

	export default {
		name: "UserEdit",
		components: {
			UserForm,
		},
		methods: {
			userUpdate() {
				api.put(`/usuario/${this.$store.state.usuario.id}`, this.$store.state.usuario)
					.then(() => {
						this.$store.dispatch("getUser", this.$store.state.usuario.email);
						this.$router.push({ name: "user" });
					})
					.catch((error) => console.log(error.response));
			},
		},
	};
</script>

<style></style>
