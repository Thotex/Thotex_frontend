<template>
    <h1>Ventas</h1>
    <div class="cartas">
        <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" image="https://i.imgur.com/MD4yrXa.png" v-bind:title="'Registrar venta'" v-bind:content="'Puedes registrar datos de la venta'"></CardComponent>
        <CardComponent @click="redirectToHistory" v-bind:class="'card-global'" image="https://i.imgur.com/0vz9Bpm.png" v-bind:title="'Historial de ventas'" v-bind:content="'Puedes ver el historial de tus ventas'"></CardComponent>
        <CardComponent @click="redirectToStats" v-bind:class="'card-global'" image="https://i.imgur.com/StU4MFX.png" v-bind:title="'Estadísticas de ventas'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>
    <div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const redirectToCreate = () => {
        router.push({name: 'createSale'})
    }

    const redirectToHistory = () => {
        router.push({name: 'historySales'})
    }

    const redirectToStats = () => {
        router.push({name: 'statsSales'})
    }

</script>

<style scoped>
    .title{
        font-weight: bold;
        text-align: left;
        margin-left: 10px;
    }

    .cartas {
        display: flex;
    }

    .container{
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>