<template>

    <body class="cuerpo">
        <h1 class="title">Contabilidad</h1>
        <div class="cartas">
            <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/ek71Zlw.png" v-bind:title="'Reportes finacieros'" v-bind:content="'Puedes registrar datos de la venta'"></CardComponent>
            <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/dtCGs9k.png" v-bind:title="'Generar certificados'" v-bind:content="'Puedes ver el historial de tus ventas'"></CardComponent>
            
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
            
            @media (max-width: 768px) {
            flex-direction: column;
        }
        }
        
    </style>