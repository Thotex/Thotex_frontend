<template>
    <div class="table-container">
        <table v-if="props.data && props.headers" class="table-bordered">
            <thead class="table-header">
                <tr>
                    <th scope="col" v-for="(header, index) in props.headers" :key="index">{{header.name}}</th>
                    <th scope="col" class="w-25">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-row" v-for="(row, index) in props.data" :key="index" @click="selectRow(row)">
                    <td v-for="(header, index) in props.headers" :key="index">{{row[header.dbName]}}</td>
                    <td  class="w-25">
                        <button class="btn btn-danger" @click="deleteRow(row)"><IconifyIcon icon="mdi:delete" />Eliminar</button>
                        <button class="btn btn-primary" @click="editRow(row)"><IconifyIcon icon="mdi:pencil" /> Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    import { Headers } from '@/interfaces/IProject';
    import { defineProps, defineEmits } from 'vue';

    // TODO: Encontrar solucion más adecuada
    // Solucion fea pero funcional
    interface T {
        [key: string]: string | number | boolean | Date
    }
    
    const props = defineProps({
        headers: {
            type: Array as () => Headers[]
        },
        data: {
            //TODO change any
            type: Array as () => T[],
        }
    })

    const emit = defineEmits(['returnSelectedRow', 'deleteCurrentRow', 'editCurrentRow']);

    const selectRow = (row: T) => {
        emit('returnSelectedRow', row);
    }

    const deleteRow = (row: T) => {
        emit('deleteCurrentRow', row);
    }

    const editRow = (row: T) => {
        emit('editCurrentRow', row);
    }
</script>

<style scoped lang="scss">
.btn-danger {
    background-color: red;
    color: white;
}

.btn-primary {
    background-color: blue;
    color: white;
}

.table-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border-radius: 5px; 
}

.table-bordered {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    th,
    td {
        padding: 12px 15px;
    }

    thead th {
        background-color: $custom-blue;
        color: #ffffff;
        text-align: left;
    }

    tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    tbody tr:nth-of-type(even):hover {
        background-color: #ddd;
    }

    tbody tr:last-of-type {
        border-bottom: 2px solid $custom-blue;
    }
    
}


.table-row:hover {
    background-color: #ccc;
    cursor: pointer;
}
</style>