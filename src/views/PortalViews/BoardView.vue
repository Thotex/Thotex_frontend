<template>
    <div>
        <label><input type="checkbox" v-model="inventario"> inventario</label>
        <label><input type="checkbox" v-model="ventas"> ventas</label>
        <label><input type="checkbox" v-model="compras"> compras</label>      
    </div>
    <div>
        <StatsInventoryViewVue v-show="inventario"/>
        <StatsSalesView v-show="ventas"/>
        <StatsShoppingView v-show="compras"/>
    </div>
</template>

<script setup lang="ts">
    import StatsInventoryViewVue from './InventoryViews/StatsInventoryView.vue.vue';
    import StatsSalesView from './SalesViews/StatsSalesView.vue';
    import StatsShoppingView from './ShoppingViews/StatsShoppingView.vue';

    import { ref } from 'vue';
    const inventario = ref(true) 
    const ventas = ref(true)
    const compras = ref(true)
</script>

<style scoped>

</style>