<template>
    <h1 class="title">Inventario</h1>
    <div class="cartas">
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/aLkaA1D.png" v-bind:title="'Registrar productos'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/ICFBcKG.png" v-bind:title="'Historial de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/yo86YnL.png" v-bind:title="'Estadísticas de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>
    <div>
        <TableComponent v-if="showTable" :headers="inventoryStore.headers" :data="inventoryStore.dataList"/>
    </div>
</template>


<script setup lang="ts">
    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { useInventoryStore } from '@/stores/inventory';
    import { onMounted, ref, Ref } from 'vue';

    const inventoryStore = useInventoryStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        inventoryStore.devFillerData();
        if (inventoryStore.dataList.length > 0) {
            showTable.value = true
        }
    })
</script>

<style scoped lang="scss">
    .title{
        font-weight: bold;
        text-align: left;
    }

    .card-global{
        width: 300px !important;
    }

    .cartas{
        display: flex;
        
    }
    
</style>