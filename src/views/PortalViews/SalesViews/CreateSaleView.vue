<template>
    <div class="container">
        <h1>Crear factura</h1>
        <div class="card-global card-centered">
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Código de la factura</h2>
                    <input v-model="saleForm.id" class="input" type="number" placeholder="Código" />
                    <h2 class="label">Subtotal</h2>
                    <input v-model="saleForm.subtotal" class="input" type="number" placeholder="Subtotal" step=".01"/>
                    <h2 class="label">IVA</h2>
                    <input v-model="saleForm.iva" class="input" type="number" placeholder="0.19" step=".01" readonly/>
                </div>
                <div class="column">
                    <h2 class="label">Fecha de Facturación</h2>
                    <input v-model="saleForm.date" class="input" type="date" placeholder="Fecha de Facturación" />
                    <h2 class="label">Total</h2>
                    <input v-model="total" class="input" type="number" placeholder="Total" readonly/>
                    <h2 class="label">Cliente</h2>
                    <div class="input-container">
                        <input v-model="saleForm.client" class="input" type="number" placeholder="Cliente ID" readonly/>
                        <button @click="openClientModal" class="button-global-light size20"><IconifyIcon icon="gridicons:dropdown" height="30px" width="30px"/></button>
                    </div>
                </div>
            </form>
            <button class="button-global btn-center" @click="submitFrom">Crear</button>
        </div>
    </div>
    <div class="modal" v-if="clientModal" @click="closeModal">
        <div class=" popup-card">
            <h1>Seleccionar cliente</h1>
            <TableComponent @returnSelectedRow="getClientName" :headers="payrollStore.headers" :data="payrollStore.dataList" :no-actions="true"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref, computed, ComputedRef, onMounted } from 'vue';
    import { ISale } from '@/interfaces/ISales';
    import { useSalesStore } from '@/stores/sales';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { usePayrollStore } from '@/stores/payroll'; //TODO: Cambiar esto por lo de terceros
    import { IEmployeeClean } from '@/interfaces/IPayroll'; //TODO: Cambiar esto por lo de terceros
    
    const router = useRouter();
    const payrollStore = usePayrollStore(); //TODO
    const saleStore = useSalesStore();

    const getClientName = (data: IEmployeeClean) => {
        console.log("Seleccionado: ", data)
        saleForm.value.client = data.Emp_codigo
        openClientModal()
    }

    onMounted(() => {
        payrollStore.fetchDataList();
    })

    const saleForm : Ref = ref({
        id: 'Código',
        subtotal: 'Subtotal',
        iva: 0.19,
        date: 'Fecha de Facturación',
        client: 'Cliente ID'
    })

    const total: ComputedRef<number> = computed(() => {
        return Math.ceil((saleForm.value.subtotal * (1 + saleForm.value.iva)) * 100) / 100;
    })

    const submitFrom = async () => {
        const sale : ISale = {
            Fac_codigo: saleForm.value.id,
            Fac_fechaGeneracion: new Date(saleForm.value.date),
            Fac_subtotal: saleForm.value.subtotal,
            Fac_precioTotal: total.value,
            Fac_IVA: saleForm.value.iva,
            Cl_codigo: saleForm.value.client
        }

        if (await saleStore.createData(sale)) {
            router.push({name: 'sales'})
        } else {
            console.log("Error, no se pudo crear la venta")
            swal("Error", "No se pudo crear la venta", "error")
        }
    }

    const clientModal = ref(false)
    const openClientModal = () => {
        clientModal.value = !clientModal.value
    }

    const closeModal = (event : Event ) => {
        if (event.target !== event.currentTarget) return;
        clientModal.value = false;
    }

</script>

<style scoped lang="scss">
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 10px;
    }

    .size20{
        max-width: 40px;
    }

    .card-centered{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10px;
    }

    .btn-center{
        margin: 20px;
        width: 30%;
    }

    .modal{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        overflow: auto;
    }

    .popup-card{
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: white;
        flex-direction: column;
        min-width: 400px;
        max-width: 85%;
        max-height: 80%;
        border-radius: 10px;
        padding: 10px;
    }

</style>