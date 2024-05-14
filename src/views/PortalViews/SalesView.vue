<template>
    <div>
        <h1>Sales</h1>
        <TableComponent v-if="showTable" :headers="salesStore.headers" :data="salesStore.dataList"/>
    </div>
</template>

<script setup lang="ts">
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { useSalesStore } from '@/stores/sales';
    import { onMounted, ref, Ref } from 'vue';

    const salesStore = useSalesStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        salesStore.devFillerData();
        if (salesStore.dataList.length > 0) {
            showTable.value = true
        }
    })

</script>

<style scoped>

</style>