<template>

    <body class="cuerpo">
        <h1 class="title">Terceros</h1>
        <div class="cartas">
            <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/CNOTXXo.png" v-bind:title="'Gestionar terceros'" v-bind:content="'Puedes gestionar tus terceros'"></CardComponent>
            <CardComponent v-bind:class="'card-global'" image="@/assets/logoamarillo.png" v-bind:title="'Historial de teceros'" v-bind:content="'Puedes registrar productos'"></CardComponent>
            <CardComponent v-bind:class="'card-global'" image="@/assets/logoamarillo.png" v-bind:title="'Estadisticas de terceros'" v-bind:content="'Puedes registrar productos'"></CardComponent>
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