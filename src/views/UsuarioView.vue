<template>
    <div class="usuario">
        <ul>
            <li v-for="(usuario, i) in usuarios" :key="i">{{usuario.nome}}</li>
        </ul>
    </div>    
</template>

<script>
import axios from 'axios';

export default {
    name: 'usuarioView',
    data() {
        return {
            usuarios: []
        }
    },
    methods: {
        atualizar() {
            axios.get('usuario')
                .then(res => {
                    this.usuarios = res.data;
                })
        }
    },
    created() {
        this.atualizar();
    }
}
</script>
