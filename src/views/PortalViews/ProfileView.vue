<template>
    <div>
        <div class="card-global container-profile">
            <h1>Perfil</h1>
        </div>
        <div class="card-global container-profile">
            <h1>Suscripción</h1>
            <MercadoPagoComponent />
        </div>
    </div>
</template>

<script setup lang="ts">
    import MercadoPagoComponent from '@/components/MercadoPagoComponent.vue';
</script>

<style scoped lang="scss">
    .container-profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 10px;
    }
</style>