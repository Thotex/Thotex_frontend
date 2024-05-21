<template>
    <div>
        <h1>Estadísticas de compras</h1>
        <div class="container card-global">
            <ShoppingStatsBar class="stat"/>
            <ShoppingStatsPie class="stat" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import ShoppingStatsBar from './ShoppingStatsBar.vue';
    import ShoppingStatsPie from './ShoppingStatsPie.vue';
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: auto;
    }
    .stat{
        padding: 20px;
    }
</style>