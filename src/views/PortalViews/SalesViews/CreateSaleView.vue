<template>
    <div class="container">
        <h1>Crear factura</h1>
        <div class="card-global">
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
                    <input v-model="saleForm.client" class="input" type="number" placeholder="Cliente ID" />
                </div>
                <div class="column">
                    <router-link class="button-global-light" :to="{name: 'sales'}">Atrás</router-link>
                    <button class="button-global" @click="submitFrom">Crear</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref, computed, ComputedRef } from 'vue';
    import { ISale } from '@/interfaces/ISales';
    import { useSalesStore } from '@/stores/sales';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';

    const router = useRouter();

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

    const store = useSalesStore();

    const submitFrom = async () => {
        const sale : ISale = {
            Fac_codigo: saleForm.value.id,
            Fac_fechaGeneracion: new Date(saleForm.value.date),
            Fac_subtotal: saleForm.value.subtotal,
            Fac_precioTotal: total.value,
            Fac_IVA: saleForm.value.iva,
            Cl_codigo: saleForm.value.client
        }

        if (await store.createData(sale)) {
            router.push({name: 'sales'})
        } else {
            console.log("Error, no se pudo crear la venta")
            swal("Error", "No se pudo crear la venta", "error")
        }
    }



</script>

<style scoped lang="scss">
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10px;
    }
    .card-global{
        width: 80%;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }

</style>