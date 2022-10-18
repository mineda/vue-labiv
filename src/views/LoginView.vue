<template>
    <div>
        <p>Nome: <input type="text" v-model="nome"></p>
        <p>Senha: <input type="password" v-model="senha"></p>
        <button @click="loginUsuario">Ok</button>
        {{status}}
    </div>    
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'loginView',
    data() {
        return {
            nome: '',
            senha: '',
            status: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        loginUsuario() {
            this.login({
                    usuario: this.nome,
                    senha: this.senha
                });
        }
    }
}
</script>
