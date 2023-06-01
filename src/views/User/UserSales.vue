<template>
	<section>
		<div v-if="items">
			<h2>Vendas</h2>
			<div class="products-wrapper" v-for="(item, index) in items" :key="index">
				<ProductItem v-if="item.produto" :produto="item.produto">
					<p class="seller">
						<span>Comprador:</span>
						{{ item.comprador_id }}
					</p>
				</ProductItem>
				<div class="delivery">
					<h3>Entrega:</h3>
					<ul v-if="item.endereco">
						<li v-for="(value, key) in item.endereco" :key="key">{{ key }}: {{ value }}</li>
					</ul>
				</div>
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
				api.get(`/transacao?vendedor_id=${this.usuario.id}`).then((response) => {
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
	h2 {
		margin-bottom: 20px;
	}

	h3 {
		margin: 0;
		justify-self: end;
	}

	.products-wrapper {
		margin-bottom: 40px;
	}

	.seller span {
		color: #35a58c;
	}

	.delivery {
		display: grid;
		grid-template-columns: minmax(100px, 200px) 1fr;
		gap: 20px;
		margin-bottom: 60px;
	}
</style>
