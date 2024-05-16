<template >
        <div class="cartas">
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/MD4yrXa.png" v-bind:title="'Registrar venta'" v-bind:content="'Puedes registrar datos de la venta'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/0vz9Bpm.png" v-bind:title="'Historial de ventas'" v-bind:content="'Puedes ver el historial de tus ventas'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/StU4MFX.png" v-bind:title="'Estadísticas de ventas'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>

</template>
<script setup lang="ts">
import CardComponent from '@/components/PortalComponents/CardComponent.vue';
</script>
<style lang="scss" scoped> 
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