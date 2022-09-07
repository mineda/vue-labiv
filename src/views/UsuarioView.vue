<template>
    <div class="usuario">
        <p v-if="nome.length > 5">{{nome}}</p>
        <p><input type="text" v-model="nome"><button @click="inserirUsuario()">Ok</button></p>
        <ul>
            <li v-for="(usuario, i) in usuarios" :key="i">{{usuario}}</li>
        </ul>
    </div>    
</template>

<script>
export default {
    name: 'usuarioView',
    data() {
        return {
            nome: 'Mineda',
            usuarios: ['oi', 'tchau']
        }
    },
    methods: {
        inserirUsuario() {
            this.usuarios.push(this.nome);
            this.nome = '';
        }
    }
}
</script>
