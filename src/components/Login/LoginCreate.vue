<template>
	<section>
		<h2>Criar a sua conta</h2>
		<transition mode="out-in">
			<button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
			<UserForm v-else>
				<button class="btn btn-form">Criar Usuário</button>
			</UserForm>
		</transition>
	</section>
</template>

<script>
	import UserForm from "@/components/UserComponents/UserForm.vue";

	export default {
		name: "LoginCreate",
		components: {
			UserForm,
		},
		data() {
			return {
				create: false,
			};
		},
	};
</script>

<style scoped>
	h2 {
		text-align: center;
		margin-top: 40px;
		margin-bottom: 10px;
	}

	.btn {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}

	.btn-form {
		max-width: 100%;
	}
</style>
