<template>
    <div>
        <SideBarLeft/>
        <div class="content-bg-portal">
            <router-view/>
        </div>
    </div>
    <ChatComponent/>
</template>

<script setup lang="ts">
    import SideBarLeft from '@/components/PortalComponents/SideBarLeft.vue';
    import { onMounted } from 'vue';
    import ChatComponent from '@/components/PortalComponents/ChatComponent.vue';

    //Import de las stores
    import { useSalesStore } from '@/stores/sales';
    import { usePayrollStore } from '@/stores/payroll';
    import { useShoppingStore } from '@/stores/shopping';
    import { useInventoryStore } from '@/stores/inventory';
    import { useThirdPartiesStore } from '@/stores/thirdParties';


    onMounted(() => {
        useSalesStore().fetchDataList();
        usePayrollStore().fetchDataList();
        useShoppingStore().fetchDataList();
        useInventoryStore().fetchDataList();
        useThirdPartiesStore().fetchDataList();
        console.log("Cargadas las stores")

        /* //Llenado de datos de prueba
        useSalesStore().devFillerData()
        usePayrollStore().devFillerData()
        useShoppingStore().devFillerData()
        useInventoryStore().devFillerData()
        useThirdPartiesStore().devFillerData()
        */
    })
</script>

<style scoped lang="scss">
    .content-bg-portal{
        margin-left: $sidebar-left-width;
        padding: 10px;
        background-color: rgb(216, 216, 216);
        height: 100vh;

    }
</style>