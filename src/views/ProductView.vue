<template>
	<section>
		<div v-if="product" class="product">
			<ul class="photo" v-if="product.fotos">
				<li v-for="(photo, index) in product.fotos" :key="index">
					<img :src="photo.src" :alt="photo.titulo" />
				</li>
			</ul>
			<div class="info">
				<h1>{{ product.nome }}</h1>
				<p class="price">{{ product.preco | numPrice }}</p>
				<p class="description">{{ product.descricao }}</p>
				<transition mode="out-in" v-if="product.vendido === 'false'">
					<button class="btn" v-if="!finalize" @click="finalize = true">Comprar</button>
					<CheckoutComponent v-else :produto="product" />
				</transition>
				<button v-else class="btn" disabled>Produto Vendido</button>
			</div>
		</div>
		<PageLoading v-else key="loading" />
	</section>
</template>

<script>
	import CheckoutComponent from "@/components/CheckoutComponent.vue";
	import { api } from "@/services/index";

	export default {
		name: "ProductView",
		components: {
			CheckoutComponent,
		},
		props: ["id"],
		data() {
			return {
				product: null,
				finalize: false,
			};
		},
		methods: {
			getProduct() {
				api.get(`/produto/${this.id}`).then((response) => (this.product = response.data));
			},
		},
		created() {
			this.getProduct();
		},
	};
</script>

<style scoped>
	.product {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		max-width: 900px;
		padding: 60px 20px;
		margin: 0 auto;
	}

	.price {
		color: #e80;
		font-weight: bold;
		font-size: 1.5rem;
		margin-bottom: 40px;
	}

	.description {
		font-size: 1.2rem;
	}

	.btn {
		margin-top: 60px;
		width: 200px;
	}
</style>
