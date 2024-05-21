<template>
    <h1 class="title">Inventario</h1>
    <div class="cartas">
        <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" image="https://i.imgur.com/aLkaA1D.png" v-bind:title="'Registrar productos'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/ICFBcKG.png" v-bind:title="'Historial de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/yo86YnL.png" v-bind:title="'Estadísticas de inventario'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>
    <div class="container">
        <InvetoryStatsBar/>
        <TableComponent @editCurrentRow="editItem" @deleteCurrentRow="deleteItem" v-if="showTable" :headers="inventoryStore.headers" :data="inventoryStore.dataList"/>
    </div>
</template>


<script setup lang="ts">
    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { useInventoryStore } from '@/stores/inventory';
    import { onMounted, ref, Ref } from 'vue';
    import { IProduct } from '@/interfaces/IInventory';
    import { useRouter } from 'vue-router';
    import InvetoryStatsBar from './InvetoryStatsBar.vue';
    const router = useRouter();

    const inventoryStore = useInventoryStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        inventoryStore.devFillerData();
        if (inventoryStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const editItem = async( item: IProduct ) => {
        console.log(item)
        if ( await inventoryStore.fetchSingleData(item.Emp_codigo)) {
            router.push({name: 'editInventory', params: {id: inventoryStore.singleData.Emp_codigo}})
            // Actualizar la tabla
            inventoryStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el item")
        }
    }

    const deleteItem = async ( item: IProduct ) => {
        console.log(item)
        if (await inventoryStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            inventoryStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
        }
    }

    const redirectToCreate = () => {
        router.push({name: 'createInventory'})
    }
</script>

<style scoped lang="scss">
    .title{
        font-weight: bold;
        text-align: left;
    }


    .cartas{
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