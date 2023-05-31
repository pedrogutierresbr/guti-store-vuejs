<template>
	<section>
		<div v-if="items">
			<h2>Compras</h2>
			<div class="products-wrapper" v-for="(item, index) in items" :key="index">
				<ProductItem v-if="item.produto" :produto="item.produto">
					<p class="seller">
						<span>Vendedor:</span>
						{{ item.vendedor_id }}
					</p>
				</ProductItem>
			</div>
		</div>
	</section>
</template>

<script>
	import ProductItem from "@/components/Products/ProductItem.vue";
	import { mapState } from "vuex";
	import { api } from "@/services/index";

	export default {
		name: "UserShopping",
		components: {
			ProductItem,
		},
		data() {
			return {
				items: null,
			};
		},
		computed: {
			...mapState(["usuario", "login"]),
		},
		watch: {
			login() {
				this.getItems();
			},
		},
		methods: {
			getItems() {
				api.get(`/transacao?comprador_id=${this.usuario.id}`).then((response) => {
					this.items = response.data;
				});
			},
		},
		created() {
			if (this.login) {
				this.getItems();
			}
		},
	};
</script>

<style scoped>
	.products-wrapper {
		margin-bottom: 40px;
	}

	.seller span {
		color: #e80;
	}

	h2 {
		margin-bottom: 20px;
	}
</style>
