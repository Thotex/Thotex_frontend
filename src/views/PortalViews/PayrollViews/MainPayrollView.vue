
<template>
    <h1 class="title">Gestión de nominas</h1>
    <div class="cartas">
        <CardComponent v-bind:class="'card-global'" v-bind:image="imagenCarta" v-bind:title="'Gestión de empleados'" v-bind:content="'Puedes registrar el trabajo del empleado'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/Ancjn9w.png" v-bind:title="'Registrar trabajo del empleado'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>
</template>


<script setup lang="ts">
    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    var imagenCarta = 'https://i.imgur.com/8ReO5hT.png';

</script>

<style scoped>
    .title{
        font-weight: bold;
        text-align: left;
    }
    .cartas{
        display: flex;
        
    }
</style>