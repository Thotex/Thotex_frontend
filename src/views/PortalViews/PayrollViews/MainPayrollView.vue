
<template>
    <h1 class="title">Gestión de nominas</h1>
    <div class="cartas">
        <CardComponent @click="redirectToCreate" v-bind:class="'card-global'" v-bind:image="imagenCarta" v-bind:title="'Gestión de empleados'" v-bind:content="'Puedes registrar el trabajo del empleado'"></CardComponent>
        <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/Ancjn9w.png" v-bind:title="'Registrar trabajo del empleado'" v-bind:content="'Puedes registrar productos'"></CardComponent>
    </div>
    <div class="container">
        <StatsComponent/>
        <TableComponent v-if="showTable" :headers="payrollStore.headers" :data="payrollStore.dataList" @deleteCurrentRow="deleteItem" @editCurrentRow="editItem"/>
    </div>
</template>


<script setup lang="ts">
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import StatsComponent from '@/components/PortalComponents/StatsComponent.vue';
    import { usePayrollStore } from '@/stores/payroll';
    import { onMounted, ref, Ref } from 'vue';
    import { IEmployeeClean } from '@/interfaces/IPayroll';
    import CardComponent from '@/components/PortalComponents/CardComponent.vue';
    import { useRouter } from 'vue-router';

    const imagenCarta = 'https://i.imgur.com/8ReO5hT.png';

    const router = useRouter();

    const payrollStore = usePayrollStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        payrollStore.devFillerData();
        if (payrollStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const editItem = async( item: IEmployeeClean ) => {
        console.log(item)
        if ( await payrollStore.fetchSingleData(item.Emp_codigo)) {
            router.push({name: 'editPayroll', params: {id: payrollStore.singleData.Emp_codigo}})
            // Actualizar la tabla
            payrollStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el item")
        }
    }

    const deleteItem = async ( item: IEmployeeClean ) => {
        console.log(item)
        if (await payrollStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            payrollStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
        }
    }

    const redirectToCreate = () => {
        router.push({name: 'createPayroll'})
    }
</script>

<style scoped>
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