<template>
	<form>
		<input type="text" name="searchInput" id="searchInput" v-model="search" placeholder="Buscar..." />
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

<style scoped>
	form {
		max-width: 600px;
		margin: 30px auto 60px auto;
		position: relative;
	}

	#searchInput {
		width: 100%;
		padding: 20px;
		border: none;
	}

	#searchInput:focus,
	#searchInput:hover {
		transform: scale(1.1);
	}

	#searchBtn {
		width: 62px;
		height: 62px;
		background: url("../../assets/search.svg") no-repeat center center;
		text-indent: -150px;
		border: none;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		box-shadow: none;
	}
</style>
