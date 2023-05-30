import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services/index";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		login: false,
		usuario: {
			id: "",
			nome: "",
			email: "",
			senha: "",
			cep: "",
			rua: "",
			numero: "",
			bairro: "",
			cidade: "",
			estado: "",
		},
		usuario_produtos: null,
	},
	mutations: {
		UPDATE_LOGIN(state, payload) {
			state.login = payload;
		},
		UPDATE_USER(state, payload) {
			state.usuario = Object.assign(state.usuario, payload);
		},
		UPDATE_USER_PRODUCTS(state, payload) {
			state.usuario_produtos = payload;
		},
		ADD_USER_PRODUCTS(state, payload) {
			state.usuario_produtos.unshift(payload);
		},
	},
	actions: {
		getUserProducts(context) {
			api.get(`/produto?usuario_id=${context.state.usuario.id}`).then((response) => {
				context.commit("UPDATE_USER_PRODUCTS", response.data);
			});
		},
		getUser(context, payload) {
			return api.get(`/usuario/${payload}`).then((response) => {
				context.commit("UPDATE_USER", response.data);
				context.commit("UPDATE_LOGIN", true);
			});
		},
		createNewUser(context, payload) {
			context.commit("UPDATE_USER", { id: payload.email });
			return api.post("/usuario", payload);
		},
		logOutUser(context) {
			context.commit("UPDATE_USER", {
				id: "",
				nome: "",
				email: "",
				senha: "",
				cep: "",
				rua: "",
				numero: "",
				bairro: "",
				cidade: "",
				estado: "",
			});
			context.commit("UPDATE_LOGIN", false);
		},
	},
	modules: {},
});
