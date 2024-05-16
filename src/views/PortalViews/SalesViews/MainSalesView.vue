<template>
    <div class="cartas">
        <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" image="https://i.imgur.com/MD4yrXa.png" v-bind:title="'Registrar venta'" v-bind:content="'Puedes registrar datos de la venta'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/0vz9Bpm.png" v-bind:title="'Historial de ventas'" v-bind:content="'Puedes ver el historial de tus ventas'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/StU4MFX.png" v-bind:title="'Estadísticas de ventas'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>
    <div class="container">
        <StatsComponent/>
        <TableComponent v-if="showTable" :headers="salesStore.headers" :data="salesStore.dataList" @deleteCurrentRow="deleteItem" @editCurrentRow="editItem"/>
    </div>
</template>

<script setup lang="ts">
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import StatsComponent from '@/components/PortalComponents/StatsComponent.vue';
    import { useSalesStore } from '@/stores/sales';
    import { onMounted, ref, Ref } from 'vue';
    import { ISale } from '@/interfaces/ISales';
    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const salesStore = useSalesStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        salesStore.devFillerData();
        if (salesStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const editItem = async( item: ISale ) => {
        console.log(item)
        if ( await salesStore.fetchSingleData(item.Fac_codigo)) {
            router.push({name: 'editSale', params: {id: salesStore.singleData.Fac_codigo}})
            // Actualizar la tabla
            salesStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el item")
        }
    }

    const deleteItem = async ( item: ISale ) => {
        console.log(item)
        if (await salesStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            salesStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
        }
    }

    const redirectToCreate = () => {
        router.push({name: 'createSale'})
    }
</script>

<style scoped lang="scss">
    .cartas {
        display: flex;
    }

    .container{
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>