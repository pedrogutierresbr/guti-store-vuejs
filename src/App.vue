<template>
	<div id="app">
		<HeaderComponent />
		<main id="main">
			<transition mode="out-in">
				<router-view />
			</transition>
		</main>
		<FooterComponent />
	</div>
</template>

<script>
	import HeaderComponent from "@/components/HeaderComponent.vue";
	import FooterComponent from "@/components/FooterComponent.vue";

	export default {
		name: "App",
		components: {
			HeaderComponent,
			FooterComponent,
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}

	body,
	ul,
	li,
	h1,
	h2,
	p {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
	}

	body {
		font-family: Arial, Helvetica, sans-serif;
		color: #345;
		background: url("./assets/pattern.svg") repeat top;
	}

	a {
		color: #345;
		text-decoration: none;
	}

	img {
		max-width: 100%;
		display: block;
	}

	label {
		margin-bottom: 5px;
	}

	input,
	textarea {
		border-radius: 4px;
		border: 1px solid white;
		padding: 15px;
		box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
		transition: all 0.3s;
		font-size: 1rem;
		font-family: Arial, Helvetica, sans-serif;
		margin-bottom: 15px;
	}

	input:hover,
	input:focus,
	textarea:hover,
	textarea:focus {
		outline: none;
		box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
		border-color: #87f;
	}

	#app {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	#main {
		flex: 1;
	}

	.btn {
		display: block;
		padding: 10px 30px;
		background: linear-gradient(225.29deg, #3fb984 0%, #1b2923 100%);
		border-radius: 4px;
		color: #fff;
		text-align: center;
		font-size: 1rem;
		box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
		transition: all 0.3s;
		border: none;
		font-family: Arial, Helvetica, sans-serif;
		cursor: pointer;
	}

	.btn:hover {
		transform: scale(1.1);
	}

	.v-enter {
		transform: translate3d(0, -20px, 0);
	}

	.v-leave-to {
		transform: translate3d(0, 20px, 0);
	}

	.v-enter,
	.v-leave-to {
		opacity: 0;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all 0.3s;
	}
</style>
