<template>
    <div>
        <h1 class="title">Inventario</h1>
        <div class="cartas">
            <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" image="https://i.imgur.com/aLkaA1D.png" v-bind:title="'Registrar productos'" v-bind:content="'Puedes registrar productos'"></CardComponent>
            <CardComponent @click="redirectToHistory" v-bind:class="'card-global'" image="https://i.imgur.com/ICFBcKG.png" v-bind:title="'Historial de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
            <CardComponent @click="redirectToStats" v-bind:class="'card-global'" image="https://i.imgur.com/yo86YnL.png" v-bind:title="'Estadísticas de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        </div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const redirectToCreate = () => {
        router.push({name: 'createInventory'})
    }

    const redirectToHistory = () => {
        router.push({name: 'historyInventory'})
    }

    const redirectToStats = () => {
        router.push({name: 'statsInventory'})
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