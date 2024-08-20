<template>
    <div>
        <h1 class="title">Gestión de nominas</h1>
        <div class="cartas">
            <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" image="https://i.imgur.com/8ReO5hT.png" v-bind:title="'Gestión de empleados'" v-bind:content="'Puedes registrar el trabajo del empleado'"></CardComponent>
            <CardComponent @click="redirectToHistory" v-bind:class="'card-global'" image="https://i.imgur.com/Ancjn9w.png" v-bind:title="'Registrar trabajo del empleado'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        </div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">

import CardComponent from '@/components/PortalComponents/CardComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToCreate = () => {
    router.push({name: 'createPayroll'})
}

const redirectToHistory = () => {
    router.push({name: 'historyPayroll'})
}

</script>

<style scoped lang="scss">
    .cartas {
        display: flex;
    }
</style>