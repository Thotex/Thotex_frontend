<template>
    <div>
        <h1>Compras</h1> 
        <div class="cartas">
            <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" image="https://i.imgur.com/MD4yrXa.png" v-bind:title="'Registrar compra'" v-bind:content="'Puedes registrar datos de la compra'"></CardComponent>
            <CardComponent @click="redirectToHistory" v-bind:class="'card-global'" image="https://i.imgur.com/0vz9Bpm.png" v-bind:title="'Historial de compras'" v-bind:content="'Puedes ver el historial de tus compras'"></CardComponent>
            <CardComponent @click="redirectToStats" v-bind:class="'card-global'" image="https://i.imgur.com/StU4MFX.png" v-bind:title="'Estadísticas de compras'" v-bind:content="'Puedes ver las estadísticas de tus compras'"></CardComponent>
        </div>
        <RouterView />
    </div>
</template>
    
    
<script setup lang="ts"> 

    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const redirectToCreate = () => {
        router.push({name: 'createShopping'})
    }

    const redirectToHistory = () => {
        router.push({name: 'historyShopping'})
    }

    const redirectToStats = () => {
        router.push({name: 'statsShopping'})
    }
</script>
    
<style scoped>
    .cartas {
        display: flex;
        @media (max-width: 768px) {
            flex-direction: column;
            margin-right: 23px;
        }
    }
</style>