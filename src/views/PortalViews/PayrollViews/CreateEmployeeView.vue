<template>
    <div class="container">
        <h1>Crear Empleado</h1>
        <h2>Información personal</h2>
        <div class="card-global">
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Tipo de Identificación</h2>
                    <select required v-model="employeeForm.typeId" class="input" >
                        <!-- <option value="" disabled selected>Select your option</option> -->
                        <option value="Cédula de ciudadania">Cédula de ciudadania</option>
                        <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                        <option value="Cédula de extranjería">Cédula de extranjería</option>
                        <option value="Pasaporte">Pasaporte</option>
                        <option value="Registro Civil">Registro Civil</option>
                        <option value="Tarjeta de Extranjería">Tarjeta de Extranjería</option>
                        <option value="Documento de identificación extranjero">Documento de identificación extranjero</option>
                        <option value="PEP">PEP</option>
                        <option value="NUIP">NUIP</option>
                        <option value="NIT">NIT</option>
                    </select>
                    <h2 class="label">Nombres</h2>
                    <input required v-model="employeeForm.name" class="input" type="text" placeholder="Nombre" />
                    <!--
                    <h2 class="label">Correo Electronico</h2>
                    <input required v-model="employeeForm.email" class="input" type="email" placeholder="Correo Electronico" />
                    <h2 class="label">Cargo</h2>
                    <input required v-model="employeeForm.position" class="input" type="text" placeholder="Cargo" />
                    <h2 class="label">Fecha de ingreso</h2>
                    <input required v-model="employeeForm.joinDate" class="input" type="date" placeholder="Fecha de ingreso" />
                    -->
                </div>
                <div class="column">
                    <h2 class="label">Número de identificación</h2>
                    <input required v-model="employeeForm.id" class="input" type="number" placeholder="Número de identificación" />
                    <h2 class="label">Apellidos</h2>
                    <input required v-model="employeeForm.lastname" class="input" type="text" placeholder="Apellido" />
                    <!--
                    <h2 class="label">Teléfono</h2>
                    <input required v-model="employeeForm.phoneNumber" class="input" type="number" placeholder="Teléfono" />
                    <h2 class="label">Salario</h2>
                    <input required v-model="employeeForm.salary" class="input" type="number" placeholder="Salario" />
                    -->
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
                
            </form>
        </div>
        <h2>Dirección y contacto</h2>

        <div class="card-global">
            <!--
            <div class="flex-centered-button">
                <button @click="submitFrom" class="button-global btn-center">Crear</button>
            </div>
            -->
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Departamento</h2>
                    <select required v-model="employeeForm.department" name="Departamento" id="Departamento" class="input">
                        <option @click="getMunicipios(department)" v-for="department in placesStore.departamentos" :key="department.Dep_id" :value="department.Dep_id">{{department.Dep_nombre}}</option>
                    </select>
                    <h2 class="label">Celular</h2>
                    <input required v-model="employeeForm.phoneNumber" class="input" type="number" placeholder="Celular" />
                </div>
                <div class="column">
                    <h2 class="label">Municipio</h2>
                    <select required v-model="employeeForm.municipality" name="Municipio" id="Municipio" class="input">
                        <option v-for="municipio in placesStore.municipios" :key="municipio.Mun_id" :value="municipio.Mun_id">{{municipio.Mun_nombre}}</option>
                    </select>
                    <h2 class="label">Correo Electrónico</h2>
                    <input required v-model="employeeForm.email" class="input" type="email" placeholder="Correo Electrónico" />
                </div>
            </form>
        </div>
        <h2>Contrato</h2>
        <div class="card-global">
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Tipo de Contrato</h2>
                    <select required v-model="employeeForm.contractType" class="input" >
                        <option value="Término fijo">Término fijo</option>
                        <option value="Término indefinido">Término indefinido</option>
                        <option value="Obra o Labor">Obra o Labor</option>
                        <option value="Aprendizaje">Aprendizaje</option>
                        <option value="Prácticas o Pasantías">Prácticas o Pasantías</option>
                    </select>
                </div>
                <div class="column">
                    <h2 class="label">Fecha de inicio</h2>
                    <input required v-model="employeeForm.startDate" class="input" type="date" placeholder="Fecha de inicio" />
                    <h2 class="label">Fecha de terminación</h2>
                    <input required v-model="employeeForm.endDate" class="input" type="date" placeholder="Fecha de terminación" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref, onMounted } from 'vue';
    import { IEmployeeClean } from '@/interfaces/IPayroll';
    import { usePayrollStore } from '@/stores/payroll';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';
    import { usePlacesStore } from '@/stores/places';
    import { IDepartamento, IMunicipio } from '@/interfaces/IPlaces';
    
    const router = useRouter();
    const payrollStore = usePayrollStore();
    const placesStore = usePlacesStore();

    // const { departamentos, municipios } = storeToRefs(placesStore)

    const getMunicipios = ( department: IDepartamento ) => {
        placesStore.fetchMunicipios(department.Dep_id)
    }

    onMounted(() => {
        placesStore.departamentos = []
        placesStore.municipios = []
        placesStore.fetchDepartamentos();
    })

    interface IEmployeeForm {
        typeId: number | null
        name: string | null 
        lastname: string | null
        email: string | null
        position: string
        joinDate: string
        id: number
        phoneNumber: number
        salary: number
        department: number
        municipality: number
        contractType: string
    }

    const employeeForm: Ref = ref({
        typeId: null,
        name: null,
        email: null,
        position: null,
        joinDate: null,
        id: null,
        lastname: null,
        phoneNumber: null,
        salary: null,
        department: null,
        municipality: null,
        contractType: null
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

 </style>