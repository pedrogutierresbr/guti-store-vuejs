<template>
	<section class="products-container">
		<ul>
			<li v-for="product in products" :key="product.id">
				<img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0]" />
				<p class="price">{{ product.preco }}</p>
				<h2 class="title">{{ product.nome }}</h2>
				<p>{{ product.descricao }}</p>
			</li>
		</ul>
	</section>
</template>

<script>
	import { api } from "@/services/index";
	import { serialize } from "@/helpers/index";

	export default {
		name: "ProductsList",
		data() {
			return {
				products: null,
				productsPerPage: 9,
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
				api.get(this.url).then((response) => (this.products = response.data));
			},
		},
		created() {
			this.getProducts();
		},
	};
</script>

<style></style>
