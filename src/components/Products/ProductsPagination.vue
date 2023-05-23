<template>
	<ul v-if="pagesTotal > 1">
		<router-link :to="{ query: query(1) }">&lt;&lt;</router-link>
		<li v-for="page in pagesRange" :key="page">
			<router-link :to="{ query: query(page) }">{{ page }}</router-link>
		</li>
		<router-link :to="{ query: query(pagesTotal) }">&gt;&gt;</router-link>
	</ul>
</template>

<script>
	export default {
		name: "ProductsPagination",
		props: {
			productsPerPage: {
				type: Number,
				default: 1,
			},
			productsTotal: {
				type: Number,
				default: 1,
			},
		},
		methods: {
			query(page) {
				return {
					...this.$route.query,
					_page: page,
				};
			},
		},
		computed: {
			pagesRange() {
				const current = Number(this.$route.query._page);
				const range = 9;
				const offset = Math.ceil(range / 2);
				const total = this.pagesTotal;
				const pagesArray = [];

				for (let i = 1; i <= total; i++) {
					pagesArray.push(i);
				}

				pagesArray.splice(0, current - offset);
				pagesArray.splice(range, total);

				return pagesArray;
			},
			pagesTotal() {
				const total = this.productsTotal / this.productsPerPage;
				return total !== Infinity ? Math.ceil(total) : 0;
			},
		},
	};
</script>

<style scoped>
	ul {
		grid-column: 1/-1;
	}
	li {
		display: inline-block;
	}

	li a {
		padding: 2px 8px;
		border-radius: 2px;
		margin: 4px;
	}

	li a.router-link-exact-active,
	li a:hover {
		background: #87f;
		color: #fff;
	}
</style>
