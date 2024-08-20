<template>
    <div>
        <h1>Estadísticas de ventas</h1>
        <div class="container card-global">
            <SaleStatsBar class="stat"/>
            <SaleStatsPie class="stat" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import SaleStatsBar from './SaleStatsBar.vue';
    import SaleStatsPie from './SaleStatsPie.vue';
</script>

<style scoped lang="scss">
    .container {
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .stat{
        padding: 20px;
    }
</style>