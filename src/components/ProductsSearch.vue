<template>
	<form>
		<input type="text" name="searchInput" id="searchInput" v-model="search" />
		<input type="submit" name="searchBtn" id="searchBtn" value="Buscar" @click.prevent="searchProducts" />
	</form>
</template>

<script>
	export default {
		name: "ProductsSearch",
		data() {
			return {
				search: "",
			};
		},
		methods: {
			searchProducts() {
				this.$router.push({ query: { q: this.search } });
			},
		},
	};
</script>

<style></style>
