<template>
	<div class="product" v-if="produto">
		<router-link class="product-img" :to="{ name: 'product', params: { id: produto.id } }">
			<img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo" />
			<p>Ver Produto</p>
		</router-link>
		<div class="info">
			<p class="price">{{ produto.preco | numPrice }}</p>
			<h2 class="title">{{ produto.nome }}</h2>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProductItem",
		props: ["produto"],
	};
</script>

<style scoped>
	.product {
		display: grid;
		grid-template-columns: minmax(100px, 200px) 1fr;
		gap: 20px;
		margin-bottom: 40px;
		position: relative;
	}

	.info {
		align-self: flex-end;
	}

	.product-img {
		border-radius: 4px;
		overflow: hidden;
		height: 100px;
	}
</style>
