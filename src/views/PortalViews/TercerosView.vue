<template>
    <div class="container">
        <h1>Terceros</h1>
        <div class="card-global">
            <form class="form-global flex-column">
                <div>
                    <h2 class="label padding-label">Nombre del tercero</h2>
                    <input v-model="thirPartyForm.name" required class="input" type="text" placeholder="Nombre del producto">
                </div>
                <div class="flex-centered-button">
                    <button @click.prevent="submitFrom" class="button-global ">Registrar</button>
                </div>
            </form>
        </div>
        <div>
        <h1>Lista de terceros</h1>

        </div>
        <div class="card-container">
                <div v-for="thirdParty in thirdPartiesStore.dataList" :key="thirdParty.Cl_codigo" class="card-global card-size">
                    <p class="label">{{ thirdParty.Cl_nombre }}</p>
                    <div class="buttons">
                        <button class="btn btn-primary" @click="editItem(thirdParty)"><IconifyIcon icon="mdi:pencil" width="20px"/></button>
                        <button class="btn btn-danger" @click="deleteItem(thirdParty)"><IconifyIcon icon="mdi:delete" width="20px" /></button>
                    </div>
                </div>
            </div>
    </div>
    <div class="modal" v-if="clientModal" @click="closeModal">
        <div class=" popup-card">
            <h1>Editar tercero</h1>
            <div class="">
            <form class="form-global flex-column">
                <div>
                    <h2 class="label padding-label">Nombre del tercero</h2>
                    <input v-model="thirPartyForm.name" required class="input" type="text" placeholder="Nombre del producto">
                </div>
                <div class="flex-centered-button">
                    <button @click.prevent="submitEditFrom" class="button-global ">Registrar</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useThirdPartiesStore } from '@/stores/thirdParties';
    import { IThirdParty } from '@/interfaces/IThirdParties';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';

    const thirdPartiesStore = useThirdPartiesStore();
    const router = useRouter();

    const thirPartyForm = ref({
        name: '',
    })

    const submitFrom = async () => {
        const item : IThirdParty = {
            Cl_codigo: 0,
            Cl_nombre: editForm.value.name,
        }
        if (await thirdPartiesStore.createData(item)) {
            router.push({name: 'terceros'})
        } else {
            console.log("Error, no se pudo actualizar el tercero")
            swal("Error", "No se pudo actualizar el tercero", "error")
        }
    }

    const submitEditFrom = async () => {
        const item : IThirdParty = {
            Cl_codigo: 0,
            Cl_nombre: thirPartyForm.value.name,
        }
        if (await thirdPartiesStore.updateData(item)) {
            router.push({name: 'terceros'})
        } else {
            console.log("Error, no se pudo actualizar el tercero")
            swal("Error", "No se pudo actualizar el tercero", "error")
        }
    }

    const editItem = async( item: IThirdParty ) => {
        console.log(item)
        if ( await thirdPartiesStore.fetchSingleData(item.Cl_codigo)) {
            // Open modal with the data
            openClientModal(item)
            // Actualizar la tabla
            thirdPartiesStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el tercero")
        }
    }

    const deleteItem = async ( item: IThirdParty ) => {
        console.log(item)
        if (await thirdPartiesStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            swal("¡Genial!", "Se ha eliminado exitosamente", "success")
            thirdPartiesStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
            swal("Error", "No se pudo borrar el item", "error")
        }
    }

    // EDITAR

    const editForm = ref({
        name: '',
    })

    const clientModal = ref(false)
    const openClientModal = (tercero: IThirdParty) => {
        clientModal.value = !clientModal.value
        editForm.value.name = tercero.Cl_nombre
    }

    const closeModal = (event : Event ) => {
        if (event.target !== event.currentTarget) return;
        clientModal.value = false;
    }


</script>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 10px;
    }
    .flex-column{
        display: flex;
        flex-direction: column;
    }
    .padding-label{
        padding-bottom: 10px;
        padding-left: 10px;
    }
    .label{
        font-weight: bold;
    }

    .card-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%s;
    }
    .card-size{
        width: 300px;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px;
    }

    .btn {
    margin: 5px;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
}

    .btn-danger {
        background-color: $custom-red;
        color: white;
    }

    .btn-primary {
        background-color: $custom-blue;
        color: white;
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