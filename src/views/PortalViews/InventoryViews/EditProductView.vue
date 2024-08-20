<template>
    <div class="container">
        <h1>Registrar productos</h1>
        <div class="card-global">
            <form class="form-global">
                <div class="column">
                    <h2 class="label">Nombre del producto</h2>
                    <input required v-model="saleForm.name" class="input" type="text" placeholder="Nombre del producto">
                    
                    <h2 class="label">Existencias del producto</h2>
                    <input required v-model="saleForm.existences" class="input" type="number" placeholder="Existencias">
                    
                    <h2 class="label">Departamento</h2>
                    <select v-model="saleForm.department" required class="input" name="Departamento" id="Departamento">
                        <option @click="getMunicipios(department)" v-for="department in departamentos" :key="department.Dep_id" :value="department.Dep_nombre">{{department.Dep_nombre}}</option>
                    </select>
                
                    <h2 class="label">Código de la empresa</h2>
                    <div class="input-container">
                        <input required v-model="saleForm.client" class="input" type="number" placeholder="Cliente ID" readonly/>
                        <button @click.prevent="openClientModal" class="button-global-light size20"><IconifyIcon icon="gridicons:dropdown" height="30px" width="30px"/></button>
                    </div>
                    
                </div>
                <div class="column">
                    
                    <h2 class="label">Precio unitario</h2>
                    <input required v-model="saleForm.price" class="input" type="number" placeholder="Precio unitario">
                    
                    <h2 class="label">IVA</h2>
                    <input disabled required v-model="saleForm.iva" class="input" type="number" placeholder="0.19" readonly>
                    
                    <h2 class="label">Municipio</h2>
                    <select v-model="saleForm.municipality" required class="input" name="Municipio" id="Municipio">
                        <option v-for="municipio in municipios" :key="municipio.Mun_id" :value="municipio.Mun_id">{{municipio.Mun_nombre}}</option>
                    </select>
                    <div></div>
                </div>
                <div class="column">
                    <router-link class="button-global-light" :to="{name: 'inventory'}">Atrás</router-link>
                    <button @click.prevent="submitFrom" class="button-global">Editar</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal" v-if="clientModal" @click="closeModal">
        <div class=" popup-card">
            <h1>Seleccionar empresa</h1>
            <TableComponent @returnSelectedRow="getClientName" :headers="thirdPartiesStore.headers" :data="thirdPartiesStore.dataList" :no-actions="true"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref, onMounted } from 'vue';
    import { IProduct } from '@/interfaces/IInventory';
    import { useInventoryStore } from '@/stores/inventory';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { useThirdPartiesStore } from '@/stores/thirdParties'; 
    import { IThirdParty } from '@/interfaces/IThirdParties'; 
    import { usePlacesStore } from '@/stores/places';
    import { IDepartamento } from '@/interfaces/IPlaces';
    import { storeToRefs } from 'pinia';
    
    const router = useRouter();
    const thirdPartiesStore = useThirdPartiesStore();
    const inventoryStore = useInventoryStore();
    const placesStore = usePlacesStore();

    const getClientName = (data: IThirdParty) => {
        console.log("Seleccionado: ", data)
        saleForm.value.client = data.Cl_codigo
        openClientModal()
    }

    const { departamentos, municipios } = storeToRefs(placesStore)

    const getMunicipios = ( department: IDepartamento ) => {
        placesStore.fetchMunicipios(department.Dep_id)
        saleForm.value.department = department.Dep_nombre
        console.log("Se selecciono el departamento: ", department.Dep_nombre)
    }

    onMounted(() => {
        thirdPartiesStore.fetchDataList();
        placesStore.fetchDepartamentos();
        placesStore.municipios = []
        
        // Llenar con el current
        saleForm.value.name = current.Prod_nombre
        saleForm.value.existences = current.Prod_cantidad
        saleForm.value.price = current.Prod_precio
        saleForm.value.iva = current.Prod_IVA
        saleForm.value.municipality = current.Mun_nombre
        saleForm.value.client = current.Emp_codigo
    })

    const current = inventoryStore.singleData

    const saleForm : Ref = ref({
        name: null,
        existences: null,
        department: null,
        municipality: null,
        client: null,
        price: null,
        iva : 0.19
    })


    const submitFrom = async () => {
        const item : IProduct = {
            Prod_codigo: current.Prod_codigo,
            Prod_nombre: saleForm.value.name,
            Prod_precio: saleForm.value.price,
            Prod_cantidad: saleForm.value.existences,
            Prod_IVA: saleForm.value.iva,
            Mun_nombre: saleForm.value.municipality,
            Emp_codigo: saleForm.value.client,
        }

        console.log("Submit from: ", item)
        if (await inventoryStore.updateData(item)) {
            swal("Actualizado", "Se actualizo el item", "success")
            router.push({name: 'inventory'})
        } else {
            console.log("Error, no se pudo actualizar el item")
            swal("Error", "No se pudo actualizar el item", "error")
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