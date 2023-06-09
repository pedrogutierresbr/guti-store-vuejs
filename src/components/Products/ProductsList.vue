<template>
	<section class="products-container">
		<transition mode="out-in">
			<div v-if="products && products.length > 0" class="products" key="products">
				<div v-for="(product, index) in products" :key="index" class="product">
					<router-link :to="{ name: 'product', params: { id: product.id } }">
						<img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0]" />
						<p class="price">{{ product.preco | numPrice }}</p>
						<h2 class="title">{{ product.nome }}</h2>
						<p>{{ product.descricao }}</p>
					</router-link>
				</div>
				<ProductsPagination :productsPerPage="productsPerPage" :productsTotal="productsTotal" />
			</div>
			<div v-else-if="products && products.length === 0" class="no-results" key="no-results">
				<p>Busca sem resultados. Tente outro termo.</p>
			</div>
			<PageLoading v-else key="loading" />
		</transition>
	</section>
</template>

<script>
	import ProductsPagination from "@/components/Products/ProductsPagination.vue";
	import { api } from "@/services/index";
	import { serialize } from "@/helpers/index";

	export default {
		name: "ProductsList",
		components: {
			ProductsPagination,
		},
		data() {
			return {
				products: null,
				productsPerPage: 9,
				productsTotal: 0,
			};
		},
		computed: {
			url() {
				const query = serialize(this.$route.query);
				return `/produto?_limit=${this.productsPerPage}${query}`;
			},
		},
		watch: {
			url() {
				this.getProducts();
			},
		},
		methods: {
			getProducts() {
				this.products = null;
				window.setTimeout(() => {
					api.get(this.url).then((response) => {
						this.productsTotal = Number(response.headers["x-total-count"]);
						this.products = response.data;
					});
				}, 1500);
			},
		},
		created() {
			this.getProducts();
		},
	};
</script>

<style scoped>
	.products-container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.products {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin: 30px;
	}

	.product {
		box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
		padding: 10px;
		background: #fff;
		border-radius: 4px;
		transition: all 0.2s;
	}

	.product:hover {
		box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
		transform: scale(1.1);
		position: relative;
		z-index: 1;
	}

	.product img {
		border-radius: 4px;
		margin-bottom: 20px;
	}

	.title {
		margin-bottom: 10px;
	}

	.price {
		color: #35a58c;
		font-weight: bold;
	}

	.no-results {
		text-align: center;
	}
</style>
