<template>
    <div>
        <h1>Estadísticas de inventario</h1>
        <div class="container card-global">
            <InvetoryStatsBar class="stat"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import InvetoryStatsBar from '@/views/PortalViews/InventoryViews/InvetoryStatsBar.vue';
</script>

<style scoped>
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