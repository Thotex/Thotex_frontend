<template>
    <div class="container">
        <h1>Create Employee</h1>
        <div class="card-global">
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Tipo de Identificación</h2>
                    <input required v-model="employeeForm.typeId" class="input" type="text" placeholder="Tipo de Identificación" />
                    <h2 class="label">Nombre</h2>
                    <input required v-model="employeeForm.name" class="input" type="text" placeholder="Nombre" />
                    <h2 class="label">Correo Electronico</h2>
                    <input required v-model="employeeForm.email" class="input" type="email" placeholder="Correo Electronico" />
                    <h2 class="label">Cargo</h2>
                    <input required v-model="employeeForm.position" class="input" type="text" placeholder="Cargo" />
                    <h2 class="label">Fecha de ingreso</h2>
                    <input required v-model="employeeForm.joinDate" class="input" type="date" placeholder="Fecha de ingreso" />
                </div>
                <div class="column">
                    <h2 class="label">Número de identificación</h2>
                    <input required v-model="employeeForm.id" class="input" type="number" placeholder="Número de identificación" />
                    <h2 class="label">Apellido</h2>
                    <input required v-model="employeeForm.lastname" class="input" type="text" placeholder="Apellido" />
                    <h2 class="label">Teléfono</h2>
                    <input required v-model="employeeForm.phoneNumber" class="input" type="number" placeholder="Teléfono" />
                    <h2 class="label">Salario</h2>
                    <input required v-model="employeeForm.salary" class="input" type="number" placeholder="Salario" />
                </div>
                <!--
                <div class="column">
                    <h2 class="label">Fecha de nacimiento</h2>
                    <input class="input" type="date" placeholder="Fecha de nacimiento" />
                    <h2 class="label">Fecha de registro</h2>
                    <input class="input" type="date" placeholder="Fecha de registro" />
                    <h2 class="label">Fecha de inicio de contrato</h2>
                    <input class="input" type="date" placeholder="Fecha de inicio de contrato" />
                </div>
                -->
                <div class="column">
                    <router-link class="button-global-light" :to="{name: 'payroll'}">Atrás</router-link>
                    <button @click="submitFrom" class="button-global">Crear</button>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref } from 'vue';
    import { IEmployeeClean } from '@/interfaces/IPayroll';
    import { usePayrollStore } from '@/stores/payroll';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';
    
    const router = useRouter();
    const payrollStore = usePayrollStore();

    interface IForm {
        typeId: string
        name: string
        email: string
        position: string
        joinDate: Date
        id : number
        lastname: string 
        phoneNumber: number 
        salary: number
    }

    const employeeForm: Ref<IForm> = ref({
        typeId: '',
        name: '',
        email: '',
        position: '',
        joinDate: new Date(),
        id: NaN,
        lastname: '',
        phoneNumber: NaN,
        salary: NaN
    })

    const submitFrom = async () => {
        const employee : IEmployeeClean = {
            Emp_codigo: 0, //Se asigna automaticamente
            Per_codigo: 0, //Se asigna automaticamente
            Per_tipoId: employeeForm.value.typeId,
            Per_id: employeeForm.value.id,
            Per_nombre: employeeForm.value.name,
            Per_apellido: employeeForm.value.lastname,
            Per_correo: employeeForm.value.email,
            Per_telefono: employeeForm.value.phoneNumber,
            Emp_cargo: employeeForm.value.position,
            Emp_salario: employeeForm.value.salary,
            Emp_fechaingreso: employeeForm.value.joinDate
        }

        if (await payrollStore.createData(employee)) {
            router.push({name: 'payroll'})
        } else {
            console.log("Error, no se pudo crear el empleado")
            swal("Error", "No se pudo crear el empleado", "error")
        }
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