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

	export default {
		name: "ProductsList",
		data() {
			return {
				products: null,
			};
		},
		methods: {
			getProducts() {
				api.get("/produto").then((response) => (this.products = response.data));
			},
		},
		created() {
			this.getProducts();
		},
	};
</script>

<style></style>
