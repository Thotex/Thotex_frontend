<template>

<body class="cuerpo">
    <h1 class="title">Inventario</h1>
    <div class="cartas">
        <CardComponent v-bind:class="'card-global'" v-bind:image="imagenCarta" v-bind:title="'Registrar productos'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="@/assets/logoamarillo.png" v-bind:title="'Historial de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="@/assets/logoamarillo.png" v-bind:title="'Estadisticas de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>

    </body>

</template>


<script setup lang="ts">
    import CardComponent from '../../components/PortalComponents/CardComponent.vue';
    var imagenCarta = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffHlYOp7ivHArSLTABCkOTtoKDIJxh2w345KLiRb8Bw&s';
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