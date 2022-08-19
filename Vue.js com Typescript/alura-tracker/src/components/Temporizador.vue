<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <Botao @clicado="iniciar" icone="fas fa-play" texto="PLAY" :desabilitado="cronometroAtivo" />
        <Botao @clicado="finalizar" icone="fas fa-stop" texto="STOP" :desabilitado="!cronometroAtivo"/>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'
import Botao from './Botao.vue'

export default defineComponent({
    name: "Temporizador",
    emits: ['aoTemporizadorFinalizado'],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroAtivo: false
        };
    },
    methods: {
        iniciar() {
            this.cronometroAtivo = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
        },
        finalizar() {
            this.cronometroAtivo = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0;
        }
    },
    components: { Cronometro, Botao }
})
</script>