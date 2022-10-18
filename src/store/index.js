import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null,
    autorizacao: null
  },
  getters: {
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setToken(state, token) {
      state.token = token;
    },
    setAutorizacao(state, autorizacao) {
      state.autorizacao = autorizacao;
    },
    logout(state) {
      state.token = null;
      state.usuario = null;
      state.autorizacao = null;
    }
  },
  actions: {
    login(context, { usuario, senha }) {
      axios
        .post("login", {
          nome: usuario,
          senha: senha
        })
        .then(res => {
          console.log(res);
          context.commit('setUsuario', usuario);
          context.commit('setToken', res.data.token);
          context.commit('setAutorizacao', res.data.autorizacao);
          router.push('/');
        })
        .catch(error => console.log(error));
    }
  },
  modules: {
  }
})
