<template>
    <div>
        <SideBarLeft/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import SideBarLeft from '@/components/PortalComponents/SideBarLeft.vue';
    import { onMounted } from 'vue';

    //Import de las stores
    import { useSalesStore } from '@/stores/sales';
    import { usePayrollStore } from '@/stores/payroll';
    import { useShoppingStore } from '@/stores/shopping';
    import { useInventoryStore } from '@/stores/inventory';

    onMounted(() => {
        useSalesStore().fetchDataList();
        usePayrollStore().fetchDataList();
        useShoppingStore().fetchDataList();
        useInventoryStore().fetchDataList();
        console.log("Cargadas las stores")

        useSalesStore().devFillerData()
    })
</script>

<style scoped lang="scss">
    .content{
        margin-left: $sidebar-left-width;
        padding: 10px;
    }
</style>