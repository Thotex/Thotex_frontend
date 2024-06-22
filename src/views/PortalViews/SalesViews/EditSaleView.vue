<template>
    <div class="container">
        <h1>Crear factura</h1>
        <div class="card-global">
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Código de la factura</h2>
                    <input required v-model="saleForm.id" class="input" type="number" placeholder="Código" readonly/>
                    <h2 class="label">Subtotal</h2>
                    <input required v-model="saleForm.subtotal" class="input" type="number" placeholder="Subtotal" step=".01"/>
                    <h2 class="label">IVA</h2>
                    <input required disabled v-model="saleForm.iva" class="input" type="number" placeholder="0.19" step=".01" readonly/>
                </div>
                <div class="column">
                    <h2 class="label">Fecha de Facturación</h2>
                    <input required v-model="saleForm.date" class="input" type="date" placeholder="Fecha de Facturación" />
                    <h2 class="label">Total</h2>
                    <input required disabled v-model="total" class="input" type="number" placeholder="Total" readonly/>
                    <h2 class="label">Cliente</h2>
                    <div class="input-container">
                        <input required v-model="saleForm.client" class="input" type="number" placeholder="Cliente ID" readonly/>
                        <button @click.prevent="openClientModal" class="button-global-light size20"><IconifyIcon icon="gridicons:dropdown" height="30px" width="30px"/></button>
                    </div>
                </div>
                <div class="column">
                    <router-link class="button-global-light" :to="{name: 'sales'}">Atrás</router-link>
                    <button class="button-global" @click="submitFrom">Crear</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal" v-if="clientModal" @click="closeModal">
        <div class=" popup-card">
            <h1>Seleccionar cliente</h1>
            <TableComponent @returnSelectedRow="getClientName" :headers="thirdPartiesStore.headers" :data="thirdPartiesStore.dataList" :no-actions="true"/>
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
    import { useThirdPartiesStore } from '@/stores/thirdParties'; 
    import { IThirdParty } from '@/interfaces/IThirdParties'; 
    
    const router = useRouter();
    const thirdPartiesStore = useThirdPartiesStore();
    const saleStore = useSalesStore();

    const getClientName = (data: IThirdParty) => {
        console.log("Seleccionado: ", data)
        saleForm.value.client = data.Cl_codigo
        openClientModal()
    }

    onMounted(() => {
        thirdPartiesStore.fetchDataList();
    })

    const currentItem = saleStore.singleData;

    const saleForm : Ref = ref({
        id: currentItem.Ven_codigo,
        subtotal: currentItem.Ven_subtotal,
        iva: currentItem.Ven_IVA,
        date: currentItem.Ven_fechaGeneracion,
        client: currentItem.Cl_codigo
    })

    const total: ComputedRef<number> = computed(() => {
        return Math.ceil((saleForm.value.subtotal * (1 + saleForm.value.iva)) * 100) / 100;
    })


    const submitFrom = async () => {
        const sale : ISale = {
            Ven_codigo: saleForm.value.id,
            Ven_fechaGeneracion: new Date(saleForm.value.date),
            Ven_subtotal: saleForm.value.subtotal,
            Ven_precioTotal: total.value,
            Ven_IVA: saleForm.value.iva,
            Cl_codigo: saleForm.value.client
        }

        if (await saleStore.updateData(sale)) {
            router.push({name: 'sales'})
        } else {
            console.log("Error, no se pudo editar la venta")
            swal("Error", "No se pudo editar la venta", "error")
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

</style>