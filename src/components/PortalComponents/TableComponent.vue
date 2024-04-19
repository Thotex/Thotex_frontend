<template>
    <div    >
        <table v-if="props.data && props.headers" class="table-bordered  w-100">
            <tr class="table-header">
                <th scope="col" v-for="(header, index) in props.headers" :key="index">{{header}}</th>
                <th scope="col" class="w-25">Acciones</th>
            </tr>
            <tr class="table-row" v-for="(row, index) in props.data" :key="index" @click="selectRow(row)">
                <td v-for="(header, index) in props.headers" :key="index">{{row[header]}}</td>
                <td  class="w-25">
                    <button class="btn btn-danger" @click="deleteRow(row)">Eliminar</button>
                    <button class="btn btn-primary" @click="editRow(row)">Editar</button>
                </td>
            </tr>
            
        </table>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        headers: {
            type: Array
        },
        data: {
            type: Array
        }
    })

    const emit = defineEmits(['returnSelectedRow', 'deleteCurrentRow', 'editCurrentRow']);
    const selectRow = (row) => {
        emit('returnSelectedRow', row);
    }

    const deleteRow = (row) => {
        emit('deleteCurrentRow', row);
    }

    const editRow = (row) => {
        emit('editCurrentRow', row);
    }
</script>

<style scoped>
.btn-danger {
    background-color: red;
    color: white;
}

.btn-primary {
    background-color: blue;
    color: white;
}

.table-bordered {
    border: 1px solid #ccc;
}

.table-row:hover {
    background-color: #ccc;
    cursor: pointer;
}
</style>