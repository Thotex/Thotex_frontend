<template>
    <div class="contenedor">
        <h1>Precios</h1>
        <section>
            <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/LwOBLeM.png" v-bind:title="'Juan'" v-bind:content="'asdad'"></CardComponent>
            <CardComponent v-bind:class="'card-global'" v-bind:title="'14900'" v-bind:content="''"></CardComponent>

        </section>
    </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/PortalComponents/CardComponent.vue';
</script>

<style lang="scss" scoped>
    .contenedor{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    section{
        display: flex;
    }
</style>