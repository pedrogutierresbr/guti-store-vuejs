<template>
	<section>
		<h2>Adicionar Produtos</h2>
		<ProductsAdd />
		<h2>Seus Produtos</h2>
		<transition-group v-if="usuario_produtos" name="list" tag="ul">
			<li v-for="(produto, index) in usuario_produtos" :key="index">
				<ProductItem :produto="produto">
					<p>{{ produto.descricao }}</p>
				</ProductItem>
			</li>
		</transition-group>
	</section>
</template>

<script>
	import ProductsAdd from "@/components/Products/ProductsAdd.vue";
	import ProductItem from "@/components/Products/ProductItem.vue";
	import { mapState, mapActions } from "vuex";

	export default {
		name: "UserProducts",
		components: {
			ProductsAdd,
			ProductItem,
		},
		computed: {
			...mapState(["login", "usuario", "usuario_produtos"]),
		},
		methods: {
			...mapActions(["getUserProducts"]),
		},
		watch: {
			login() {
				this.getUserProducts();
			},
		},
		created() {
			if (this.login) {
				this.getUserProducts();
			}
		},
	};
</script>

<style scoped>
	h2 {
		margin-bottom: 20px;
	}
</style>
