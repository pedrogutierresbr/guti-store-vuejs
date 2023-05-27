import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import LoginView from "../views/LoginView.vue";
import UserView from "../views/User/UserView.vue";
import UserProducts from "../views/User/UserProducts.vue";
import UserEdit from "../views/User/UserEdit.vue";
import UserShopping from "../views/User/UserShopping.vue";
import UserSales from "../views/User/UserSales.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/produto/:id",
		name: "product",
		component: ProductView,
		props: true,
	},
	{
		path: "/login",
		name: "login",
		component: LoginView,
	},
	{
		path: "/usuario",
		component: UserView,
		children: [
			{
				path: "",
				name: "user",
				component: UserProducts,
			},
			{
				path: "editar",
				name: "userEdit",
				component: UserEdit,
			},
			{
				path: "compras",
				name: "userShopping",
				component: UserShopping,
			},
			{
				path: "vendas",
				name: "userSales",
				component: UserSales,
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		return window.scrollTo({ top: 0, behavior: "smooth" });
	},
});

export default router;
