<template>
    <h1>Historial de ventas</h1>
    <div>
        <TableComponent v-if="showTable" :headers="salesStore.headers" :data="salesStore.dataList" @deleteCurrentRow="deleteItem" @editCurrentRow="editItem"/>
    </div>
</template>

<script setup lang="ts">
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { useSalesStore } from '@/stores/sales';
    import { onMounted, ref, Ref } from 'vue';
    import { ISale } from '@/interfaces/ISales';
    import { useRouter } from 'vue-router';
import swal from 'sweetalert';

    const router = useRouter();

    onMounted(() => {
        if (salesStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const salesStore = useSalesStore();
    let showTable: Ref<boolean> = ref(false);

    const editItem = async( item: ISale ) => {
        console.log(item)
        if ( await salesStore.fetchSingleData(item.Ven_codigo)) {
            router.push({name: 'editSale', params: {id: salesStore.singleData.Ven_codigo}})
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
            swal("¡Genial!", "Se ha eliminado exitosamente", "success")
            salesStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
            swal("Error", "No se pudo borrar el item", "error")
        }
    }

</script>

<style scoped>

</style>