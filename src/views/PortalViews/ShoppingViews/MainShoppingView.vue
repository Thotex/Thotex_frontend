<template >
    <div class="cartas">
        <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" image="https://i.imgur.com/MD4yrXa.png" v-bind:title="'Registrar compra'" v-bind:content="'Puedes registrar datos de la compra'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/0vz9Bpm.png" v-bind:title="'Historial de compras'" v-bind:content="'Puedes ver el historial de tus compras'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/StU4MFX.png" v-bind:title="'Estadísticas de compras'" v-bind:content="'Puedes ver las estadísticas de tus compras'"></CardComponent>
    </div>
    <div class="container">
        <StatsComponent/>
        <TableComponent v-if="showTable" :headers="shoppingStore.headers" :data="shoppingStore.dataList" @deleteCurrentRow="deleteItem" @editCurrentRow="editItem"/>
    </div>
</template>
<script setup lang="ts">
import TableComponent from '@/components/PortalComponents/TableComponent.vue';
import StatsComponent from '@/components/PortalComponents/StatsComponent.vue';
import { useShoppingStore } from '@/stores/shopping';
import { onMounted, ref, Ref } from 'vue';
import { IShopping } from '@/interfaces/IShopping';
import CardComponent from '@/components/PortalComponents/CardComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

    const shoppingStore = useShoppingStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        shoppingStore.devFillerData();
        if (shoppingStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const editItem = async( item: IShopping ) => {
        console.log(item)
        if ( await shoppingStore.fetchSingleData(item.Fac_codigo)) {
            router.push({name: 'editSale', params: {id: shoppingStore.singleData.Fac_codigo}})
            // Actualizar la tabla
            shoppingStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el item")
        }
    }

    const deleteItem = async ( item: IShopping ) => {
        console.log(item)
        if (await shoppingStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            shoppingStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
        }
    }

    const redirectToCreate = () => {
        router.push({name: 'createShopping'})
    }
</script>
<style lang="scss" scoped> 
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