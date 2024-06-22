<template>
    <div class="container">
        <h1>Registrar compra</h1>
        <div class="card-global card-centered">
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Código de la factura</h2>
                    <input required v-model="shoppingForm.id" class="input" type="number" placeholder="Código" />
                    <h2 class="label">Subtotal</h2>
                    <input required v-model="shoppingForm.subtotal" class="input" type="number" placeholder="Subtotal" step=".01"/>
                    <h2 class="label">IVA</h2>
                    <input required disabled v-model="shoppingForm.iva" class="input" type="number" placeholder="0.19" step=".01" readonly/>
                </div>
                <div class="column">
                    <h2 class="label">Fecha de Facturación</h2>
                    <input required v-model="shoppingForm.date" class="input" type="date" placeholder="Fecha de Facturación" />
                    <h2 class="label">Total</h2>
                    <input required disabled v-model="total" class="input" type="number" placeholder="Total" readonly/>
                    <h2 class="label">Proveedor</h2>
                    <div class="input-container">
                        <input v-model="shoppingForm.client" class="input" type="number" placeholder="Proveedor ID" readonly/>
                        <button @click.prevent="openClientModal" class="button-global-light size20"><IconifyIcon icon="gridicons:dropdown" height="30px" width="30px"/></button>
                    </div>
                </div>
            </form>
            <div class="flex-centered-button">
                <button class="button-global btn-center" @click="submitFrom">Crear</button>
            </div>
        </div>
    </div>
    <div class="modal" v-if="clientModal" @click="closeModal">
        <div class=" popup-card">
            <h1>Seleccionar proveedor</h1>
            <TableComponent @returnSelectedRow="getClientName" :headers="thirdPartiesStore.headers" :data="thirdPartiesStore.dataList" :no-actions="true"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref, computed, ComputedRef, onMounted } from 'vue';
    import { IShopping } from '@/interfaces/IShopping';
    import { useShoppingStore } from '@/stores/shopping';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { useThirdPartiesStore } from '@/stores/thirdParties'; 
    import { IThirdParty } from '@/interfaces/IThirdParties'; 
    
    const router = useRouter();
    const thirdPartiesStore = useThirdPartiesStore();
    const shoppingStore = useShoppingStore();

    const getClientName = (data: IThirdParty) => {
        console.log("Seleccionado: ", data)
        shoppingForm.value.client = data.Cl_codigo
        openClientModal()
    }

    onMounted(() => {
        thirdPartiesStore.fetchDataList();
    })

    const shoppingForm : Ref = ref({
        id: null,
        subtotal: null,
        iva: 0.19,
        date: null,
        client: null
    })

    const total: ComputedRef<number> = computed(() => {
        return parseFloat((shoppingForm.value.subtotal * (1 + shoppingForm.value.iva)).toFixed(2));
    })

    const submitFrom = async () => {
        const shopping : IShopping = {
            Com_codigo: shoppingForm.value.id,
            Com_fechaGeneracion: new Date(shoppingForm.value.date),
            Com_subtotal: shoppingForm.value.subtotal,
            Com_precioTotal: total.value,
            Com_IVA: shoppingForm.value.iva,
            Cl_codigo: shoppingForm.value.client
        }

        if (await shoppingStore.createData(shopping)) {
            router.push({name: 'shopping'})
        } else {
            console.log("Error, no se pudo crear la compra")
            swal("Error", "No se pudo crear la compra", "error")
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