<template>

<body class="cuerpo">
    <h1 class="title">Inventario</h1>
    <div class="cartas">
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/aLkaA1D.png" v-bind:title="'Registrar productos'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/ICFBcKG.png" v-bind:title="'Historial de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/yo86YnL.png" v-bind:title="'Estadísticas de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>

    </body>

</template>


<script setup lang="ts">
    import CardComponent from '../../components/PortalComponents/CardComponent.vue';

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