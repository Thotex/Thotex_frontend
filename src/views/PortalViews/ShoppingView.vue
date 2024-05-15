<template>

    <body class="cuerpo">
        <h1 class="title">Compras</h1>
        <div class="cartas">
            <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/kbL2ErW.png" v-bind:title="'Registrar venta'" v-bind:content="'Puedes registrar datos de la venta'"></CardComponent>
            <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/LwOBLeM.png" v-bind:title="'Historial de ventas'" v-bind:content="'Puedes ver el historial de tus ventas'"></CardComponent>
            <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/u3AZVWo.png" v-bind:title="'Estadísticas de ventas'" v-bind:content="'Puedes registrar productos'"></CardComponent>
            
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