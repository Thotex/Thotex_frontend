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
                    <input required v-model="shoppingForm.iva" class="input" type="number" placeholder="0.19" step=".01" readonly/>
                </div>
                <div class="column">
                    <h2 class="label">Fecha de Facturación</h2>
                    <input required v-model="shoppingForm.date" class="input" type="date" placeholder="Fecha de Facturación" />
                    <h2 class="label">Total</h2>
                    <input required v-model="total" class="input" type="number" placeholder="Total" readonly/>
                    <h2 class="label">Proveedor</h2>
                    <div class="input-container">
                        <input required v-model="shoppingForm.client" class="input" type="number" placeholder="Cliente ID" readonly/>
                        <button @click.prevent="openClientModal" class="button-global-light size20"><IconifyIcon icon="gridicons:dropdown" height="30px" width="30px"/></button>
                    </div>
                </div>
                <div class="column">
                    <router-link class="button-global-light" :to="{name: 'shopping'}">Atrás</router-link>
                    <button class="button-global" @click="submitFrom">Crear</button>
                </div>
            </form>
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
        shoppingForm.value.client = data.id
        openClientModal()
    }

    onMounted(() => {
        thirdPartiesStore.fetchDataList();
    })

    const currentItem = shoppingStore.singleData;

    const shoppingForm : Ref = ref({
        id: currentItem.Fac_codigo,
        subtotal: currentItem.Fac_subtotal,
        iva: currentItem.Fac_IVA,
        date: currentItem.Fac_fechaGeneracion,
        client: currentItem.Proveedor_codigo
    })

    const total: ComputedRef<number> = computed(() => {
        return Math.ceil((shoppingForm.value.subtotal * (1 + shoppingForm.value.iva)) * 100) / 100;
    })


    const submitFrom = async () => {
        const sale : IShopping = {
            Fac_codigo: shoppingForm.value.id,
            Fac_fechaGeneracion: new Date(shoppingForm.value.date),
            Fac_subtotal: shoppingForm.value.subtotal,
            Fac_precioTotal: total.value,
            Fac_IVA: shoppingForm.value.iva,
            Proveedor_codigo: shoppingForm.value.client
        }

        if (await shoppingStore.updateData(sale)) {
            router.push({name: 'shopping'})
        } else {
            console.log("Error, no se pudo editar la compra")
            swal("Error", "No se pudo editar la compra", "error")
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
/*
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 10px;
    }
*/
</style>