<template>
	<section>
		<h1>Compre ou Venda</h1>
		<ProductsSearch />
		<ProductsList />
	</section>
</template>

<script>
	import ProductsSearch from "@/components/Products/ProductsSearch.vue";
	import ProductsList from "@/components/Products/ProductsList.vue";
	export default {
		name: "HomeView",
		components: {
			ProductsSearch,
			ProductsList,
		},
	};
</script>

<style scoped>
	h1 {
		color: #87f;
		margin-top: 40px;
		font-size: 2rem;
		text-align: center;
	}
</style>
