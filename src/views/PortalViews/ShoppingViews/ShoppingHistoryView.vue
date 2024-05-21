<template>
    <div>
        <h1>Historial de compras</h1>
        <TableComponent v-if="showTable" :headers="ShoppingStore.headers" :data="ShoppingStore.dataList" @deleteCurrentRow="deleteItem" @editCurrentRow="editItem"/>
    </div>
</template>
<script setup lang="ts">
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { onMounted, ref, Ref } from 'vue';
    import { IShopping } from '@/interfaces/IShopping';
    import { useRouter } from 'vue-router';
    import { useShoppingStore } from '@/stores/shopping';
import swal from 'sweetalert';

    const router = useRouter();
    const ShoppingStore = useShoppingStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        if (ShoppingStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const editItem = async( item: IShopping ) => {
        console.log(item)
        if ( await ShoppingStore.fetchSingleData(item.Fac_codigo)) {
            router.push({name: 'editSale', params: {id: ShoppingStore.singleData.Fac_codigo}})
            // Actualizar la tabla
            ShoppingStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el item")
        }
    }

    const deleteItem = async ( item: IShopping ) => {
        console.log(item)
        if (await ShoppingStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            swal("¡Genial!", "Se ha eliminado exitosamente", "success")
            ShoppingStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
            swal("Error", "No se pudo borrar el item", "error")
        }
    }

</script>
<style lang="scss" scoped>
    
</style>