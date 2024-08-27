<template>
    <div class="container">
        <h1>Crear Empleado</h1>
        <div class="card-global">
            <h2>Información personal</h2>
            
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Tipo de Identificación</h2>
                    <select required v-model.number="employeeForm.typeId" class="input">
                        <option value="1">Cédula de ciudadania</option>
                        <option value="2">Tarjeta de identidad</option>
                        <option value="3">Cédula de extranjería</option>
                        <option value="4">Pasaporte</option>
                        <option value="5">Registro Civil</option>
                        <option value="6">Tarjeta de Extranjería</option>
                        <option value="7">Documento de identificación extranjero</option>
                        <option value="8">PEP</option>
                        <option value="9">NUIP</option>
                        <option value="10">NIT</option>
                    </select>
                    <h2 class="label">Nombres</h2>
                    <input required v-model="employeeForm.name" class="input" type="text" placeholder="Nombre" />
                </div>
                <div class="column">
                    <h2 class="label">Número de identificación</h2>
                    <input required v-model="employeeForm.id" class="input" type="number" placeholder="Número de identificación" />
                    <h2 class="label">Apellidos</h2>
                    <input required v-model="employeeForm.lastname" class="input" type="text" placeholder="Apellido" />
                </div>
            </form>
            <h2>Dirección y contacto</h2>
            
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
                    <select :disabled="employeeForm.department === null" required v-model.number="employeeForm.municipality" name="Municipio" id="Municipio" class="input">
                        <option v-for="municipio in placesStore.municipios" :key="municipio.Mun_id" :value="municipio.Mun_id">{{municipio.Mun_nombre}}</option>
                    </select>
                    <h2 class="label">Correo Electrónico</h2>
                    <input required v-model="employeeForm.email" class="input" type="email" placeholder="Correo Electrónico" />
                </div>
            </form>
            <h2>Contrato</h2>
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Tipo de Contrato</h2>
                    <select required v-model.number="employeeForm.contractType" class="input" >
                        <option selected value="1">Término fijo</option>
                        <option value="2">Término Indefinido</option>
                        <option value="3">Obra o Labor</option>
                        <option value="4">Aprendizaje</option>
                        <option value="5">Prácticas o Pasantías</option>
                    </select>
                    <div class="grid-layout">
                        <div>
                            <h2 class="label">Salario</h2>
                            <input required v-model.number="employeeForm.salary" class="input" type="number" placeholder="Salario" />
                        </div>
                        <div>
                            <h2 class="label invisible">N</h2>
                            <label class="checkbox-container"><input :disabled="disabledIntegral" required v-model="employeeForm.integralSalary" class="input-checkbox" type="checkbox">Salario Integral</label>    
                        </div>
                    </div>
                    <h2 class="label">Tipo de trabajador</h2>
                    <select required v-model.number="employeeForm.workerType" class="input" >
                        <option value="1">Dependiente</option>
                        <option value="2">Servicio doméstico</option>
                        <option value="3">Madre comunitaria</option>
                        <option value="4">Aprendices del Sena en etapa lectiva</option>
                        <option value="5">Funcionarios públicos sin tope máximo de IBC</option>
                        <option value="6">Aprendices del SENA en etapa productiva</option>
                        <option value="7">Estudiantes de postgrado en salud</option>
                        <option value="8">Profesor de establecimiento particular</option>
                        <option value="9">Estudiantes aportes solo riesgos laborales</option>
                        <option value="10">Dependiente entidades o universidades públicas con régimen especial en salud</option>
                        <option value="11">Cooperados o pre cooperativas de trabajo asociado</option>
                        <option value="12">Trabajador dependiente de entidad beneficiaria del sistema general de participaciones - aportes patronales</option>
                        <option value="13">Trabajador de tiempo parcial</option>
                        <option value="14">Pre pensionado con aporte voluntario a salud</option>
                        <option value="15">Pre pensionado de entidad en liquidación</option>
                        <option value="16">Estudiantes de prácticas laborales en el sector público</option>
                    </select>
                    <div class="grid-layout">
                        <div>
                            <h2 class="label">Auxilio de transporte</h2>
                            <label class="checkbox-container"><input :disabled="disabledTransport" required v-model="employeeForm.transport" class="input-checkbox" type="checkbox">Si aplica</label>
                        </div>
                        <div>
                            <h2 class="label">Sábado laboral</h2>
                            <label class="checkbox-container"><input required v-model="employeeForm.saturdays" class="input-checkbox" type="checkbox">Si aplica</label>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div :class="{'grid-layout': employeeForm.contractType !== 2}">
                        <div>
                            <h2 class="label">Fecha de inicio</h2>
                            <input required v-model="employeeForm.joinDate" class="input" type="date" placeholder="Fecha de inicio" />
                        </div>
                        <div v-if="(employeeForm.contractType !== 2)">
                            <h2 class="label">Fecha de terminación</h2>
                            <input required v-model="employeeForm.endDate" class="input" type="date" placeholder="Fecha de terminación" />
                        </div>
                    </div>
                    <h2 class="label">Frecuencia de pago</h2>
                    <select required v-model.number="employeeForm.paymentFrequency" class="input" >
                        <option value="1">Mensual</option>
                        <option value="2">Quincenal</option>
                    </select>
                    <h2 class="label">Subtipo de trabajador</h2>
                    <select required v-model.number="employeeForm.workerSubType" class="input">
                        <option value="1">No aplica</option>
                        <option value="2">Dependiente pensionado por vejez activo</option>
                    </select>
                    <h2 class="label">Nivel de riesgo</h2>
                    <select required v-model.number="employeeForm.riskLevel" class="input">
                        <option value="1">Riesgo I - 0,522%</option>
                        <option value="2">Riesgo II - 1,044%</option>
                        <option value="3">Riesgo III - 2,436%</option>
                        <option value="4">Riesgo IV - 4,350%</option>
                        <option value="5">Riesgo V - 6,960%</option>
                    </select>
                </div>
            </form>
            <h2>Puesto de trabajo</h2>
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Cargo</h2>
                    <input required v-model="employeeForm.position" class="input" type="text" placeholder="Cargo"/>
                    <h2 class="label">Días de vacaciones acumuladas</h2>
                    <input required v-model="employeeForm.vacationDays" class="input" type="number" placeholder="Días de vacaciones acumuladas" />
                </div>
                <div class="column">
                    <h2 class="label">Área</h2>
                    <select required v-model.number="employeeForm.area" class="input" >
                        <option value="1">Admnistrativa</option>
                        <option value="2">Operativa</option>
                        <option value="3">Finanzas</option>
                    </select>
                </div>
            </form>
            <h2>Datos de pago</h2>
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Método de pago</h2>
                    <select required v-model.number="employeeForm.paymentMethod" class="input" >
                        <option value="1">Efectivo</option>
                        <option value="2">Transferencia débito</option>
                        <option value="3">Cheque</option>
                        <option value="4">Consignación bancaria</option>
                        <option value="5">Bonos</option>
                        <option value="6">Instrumento no definido</option>
                        <option value="7">Crédito ACH</option>
                        <option value="8">Débito ACH</option>
                        <option value="9">Reversión débito de demanda ACH</option>
                        <option value="10">Reversión crédito de demanda ACH</option>
                        <option value="11">Crédito de demanda ACH</option>
                        <option value="12">Débito de demanda ACH</option>
                        <option value="13">Mantener</option>
                        <option value="14">Clearing nacional o regional</option>
                        <option value="15">Reversión crédito ahorro</option>
                        <option value="16">Reversión débito ahorro</option>
                        <option value="17">Crédito ahorro</option>
                        <option value="18">Débito ahorro</option>
                        <option value="19">Bookentry crédito</option>
                        <option value="20">Bookentry débito</option>
                        <option value="21">Concentración de la demanda en efectivo/Desembolso crédito (CCD)</option>
                        <option value="22">Concentración de la demanda en efectivo /Desembolso (CCD) débito</option>
                        <option value="23">Crédito pago negocio corporativo (CTP)</option>
                        <option value="24">Poyecto bancario</option>
                        <option value="25">Proyecto bancario certificado</option>
                        <option value="26">Cheque bancario</option>
                        <option value="27">Nota cambiaria esperando aceptación</option>
                        <option value="28">Cheque certificado</option>
                        <option value="29">Cheque local</option>
                        <option value="30">Débito Pago Negocio Corporativo (CTP)</option>
                        <option value="31">Crédito Negocio Intercambio Corporativo (CTX)</option>
                        <option value="32">Débito Negocio Intercambio Corporativo (CTX)</option>
                        <option value="33">Transferencia crédito</option>
                        <option value="34">Concentración efectivo / Desembolso crédito plus (CCD+)</option>
                        <option value="35">Concentración efectivo / Desembolso débito plus (CCD+)</option>
                        <option value="36">Pago y depósito pre acordado (PPD)</option>
                        <option value="37">Concentración efectivo ahorros / Desembolso crédito (CCD)</option>
                        <option value="38">Concentración efectivo ahorros / Desembolso crédito (CCD)</option>
                        <option value="39">Pago negocio corporativo ahorros crédito (CTP)</option>
                        <option value="40">Pago negocio corporativo ahorros débito (CTP)</option>
                        <option value="41">Crédito negocio intercambio corporativo (CTX)</option>
                        <option value="42">Débito negocio intercambio corporativo (CTX)</option>
                        <option value="43">Concentración efectivo/Desembolso crédito plus (CCD+)</option>
                        <option value="44">Concentración efectivo / Desembolso débito plus (CCD+)</option>
                        <option value="45">Nota cambiaria</option>
                        <option value="46">Transferencia crédito bancario</option>
                        <option value="47">Transferencia débito interbancario</option>
                        <option value="48">Transferencia débito bancaria</option>
                        <option value="49">Tarjeta crédito</option>
                        <option value="50">Tarjeta débito</option>
                        <option value="51">Postgiro</option>
                        <option value="52">Telex estándar bancario francés</option>
                        <option value="53">Pago comercial urgente</option>
                        <option value="54">Pago tesorería urgente</option>
                        <option value="55">Nota promisoria</option>
                        <option value="56">Nota promisoria firmada por el acreedor</option>
                        <option value="57">Nota promisoria firmada por el acreedor, avalada por el banco</option>
                        <option value="58">Nota promisoria firmada por el acreedor, avalada por un tercero</option>
                        <option value="59">Nota promisoria firmada por el banco</option>
                        <option value="60">Nota promisoria firmada por un banco avalada por otro banco</option>
                        <option value="61">Nota promisoria firmada</option>
                        <option value="62">Nota promisoria firmada por un tercero avalada por un banco</option>
                        <option value="63">Retiro de nota por el acreedor</option>
                        <option value="64">Vales</option>
                        <option value="65">Retiro de nota por el acreedor sobre un banco</option>
                        <option value="66">Retiro de nota por el acreedor, avalada por otro banco</option>
                        <option value="67">Retiro de nota por el acreedor, sobre un banco avalada por un tercero</option>
                        <option value="68">Retiro de una nota por el acreedor sobre un tercero</option>
                        <option value="69">Retiro de una nota por el acreedor sobre un tercero avalada por un banco</option>
                        <option value="70">Nota bancaria transferible</option>
                        <option value="71">Cheque local transferible</option>
                        <option value="72">Giro referenciado</option>
                        <option value="73">Giro urgente</option>
                        <option value="74">Giro formato abierto</option>
                        <option value="75">Método de pago solicitado no usado</option>
                        <option value="76">Clearing entre partners</option>
                        <option value="77">Acuerdo mutuo</option>
                        <option value="78">Cuentas de Ahorro de Tramite Simplificado (CATS)(Nequi, Daviplata, etc)</option>
                    </select>
                </div>
            </form>
            <h2>Afiliación</h2>
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">EPS</h2>
                    <select required v-model="employeeForm.eps" class="input" >
                        <option value="1">ESSC24-COOSALUD ESS EPS-S</option>
                        <option value="2">EPS037-NUEVA EPS S.A - NUEVA EMPRESA PROMOTORA DE SALUD NUEVA EPS S.A</option>
                        <option value="3">ESSC07-EPS-S MUTUAL SER</option>
                        <option value="4">EPS001-COLMÉDICA EPS - ALIANSALUD DESDE EL 01/01/2011</option>
                        <option value="5">EPS002-SALUD TOTAL S.A. ENTIDAD PROMOTORA DE SALUD</option>
                        <option value="6">EPS005-ENTIDAD PROMOTORA DE SALUD SANITAS S.A.</option>
                        <option value="7">EPS010-EPS-SURA</option>
                        <option value="8">EPS017-ENTIDAD PROMOTORA DE SALUD FAMISANAR LIMITADA CAFAM-COLSUBSIDIO</option>
                        <option value="9">EPS018-ENTIDAD PROMOTORA DE SALUD SERVICIO OCCIDENTAL DE SALUD S.A. S.O.S.</option>
                        <option value="10">EPS046-SALUD MIA EPS</option>
                        <option value="11">EPS012-COMFENALCO VALLE E.P.S.</option>
                        <option value="12">EPS008-COMPENSAR ENTIDAD PROMOTORA DE SALUD</option>
                        <option value="13">EPM - Empresas públicas de Medellín</option>
                        <option value="14">Fondo de pasivo social de ferrocarriles nacionales de Colombia</option>
                        <option value="15">CCFC55-EPS-S CAJACOPI</option>
                        <option value="16">EPSC25-CAPRESOCA EPS</option>
                        <option value="17">Comfachoco</option>
                        <option value="18">CCFC23-EPS-CCFC COM GUAJIRA</option>
                        <option value="19">CCFC50-EPS-S COMFAORIENTE</option>
                        <option value="20">EPS Familiar de Colombia (Antes ComfaSucre)</option>
                        <option value="21">ESSC62-ASMET SALUD EPS SAS</option>
                        <option value="22">ESSC91-ENTIDAD COOPERATIVA SOLIDARIA 'ECOOPSOS'</option>
                        <option value="23">ESSC18-CMRC RECAUDO FOSYGA-EMSSANAR E.S.S</option>
                        <option value="24">EPSC34-RECAUDO FOSYGA CAPITAL SALUD</option>
                        <option value="25">EPS040-ALIANZA MEDELLIN ANTIOQUIA EPS SAS (SAVIA SALUD)</option>
                        <option value="26">EPSIC1-DUSAKAWI EPS</option>
                        <option value="27">EPSIC3-ASOCIACION INDIGENA DEL CAUDA 'A.I.C'</option>
                        <option value="28">EPSIC4-ANAS WAYUU E P S I FOSYGA</option>
                        <option value="29">EPSIC5-ENTIDAD PROMOTORA DE SALUD MALLAMAS</option>
                        <option value="30">EPSIC6-ENTIDAD PROMOTORA DE SALUD PIJAOSALUD E</option>
                        <option value="31">ESSC02-EMP MUTUAL PARA EL DESAR ENDISALUD ESS</option>
                        <option value="32">EPS042-COOSALUD EPS S.A.</option>
                        <option value="33">EPS041-NUEVA EPS S.A.</option>
                        <option value="34">FMS001-FUERZAS MILITARES</option>
                        <option value="35">POL001-POLICIA NACIONAL</option>
                        <option value="36">RES002-ECOPETROL</option>
                        <option value="37">RES004-MAGISTERIO</option>
                        <option value="38">RES005-UNIVERSIDAD DEL ATLANTICO</option>
                        <option value="39">RES006-UNIVERSIDAD INDUSTRIAL DE SANTANDER</option>
                        <option value="40">RES007-UNIVERSIDAD DEL VALLE</option>
                        <option value="41">RES008-UNIVERSIDAD NACIONAL DE COLOMBIA</option>
                        <option value="42">RES009-UNIVERSIDAD DEL CAUCA</option>
                        <option value="43">RES010-UNIVERSIDAD DE CARTAGENA</option>
                        <option value="44">RES011-UNIVERSIDAD DE ANTIOQUIA</option>
                        <option value="45">RES012-UNIVERSIDAD DE CORDOBA</option>
                        <option value="46">RES013-UNIVERSIDAD DE NARIÑO</option>
                        <option value="47">RES014-UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA - UPT</option>
                    </select>
                    <h2 class="label">Fondo de prensiones</h2>
                    <select class="input" v-model="employeeForm.insurance">
                        <option value="1">25-14-COLPENSIONES</option>
                        <option value="2">231001-COLFONDOS</option>
                        <option value="3">230201-PROTECCIÓN</option>
                        <option value="4">230901-OLD MUTUAL (ANTES SKANDIA)</option>
                        <option value="5">230301-PORVENIR</option>
                    </select>
                </div>
                <div class="column">
                    <h2 class="label">Banco</h2>
                    <select class="input" v-model="employeeForm.bank">
                        <option value="1">Bancamía</option>
                        <option value="2">Bancolombia</option>
                        <option value="3">Bancoomeva</option>
                        <option value="4">Banco Agrario</option>
                        <option value="5">Banco Av Villas</option>
                        <option value="6">Banco Caja Social</option>
                        <option value="7">Banco Credifinanciera</option>
                        <option value="8">Banco de Bogotá</option>
                        <option value="9">Banco de Occidente</option>
                        <option value="10">Banco Falabella</option>
                        <option value="11">Banco Finandina</option>
                        <option value="12">Banco GNB Sudameris</option>
                        <option value="13">Banco J.P. MORGAN</option>
                        <option value="14">Banco Mundo Mujer</option>
                        <option value="15">Banco NU</option>
                        <option value="16">Banco Pichincha</option>
                        <option value="17">Banco Popular</option>
                        <option value="18">Banco Santander</option>
                        <option value="19">Banco Serfinanza</option>
                        <option value="20">Banco W</option>
                        <option value="21">BBVA</option>
                        <option value="22">Citibank</option>
                        <option value="23">Coopcentral</option>
                        <option value="24">Cooperativa Confiar</option>
                        <option value="25">Cooperativa Cootramed</option>
                        <option value="26">Cooperativa Cotrafa</option>
                        <option value="27">Cooperativa de Ahorro y Crédito Nacional</option>
                        <option value="28">Cooperativa Financiera de Antioquia</option>
                        <option value="29">Cooperativa Utrahuilca</option>
                        <option value="30">Cooprofesores</option>
                        <option value="31">Davivienda</option>
                        <option value="32">Daviplata</option>
                        <option value="33">Mibanco</option>
                        <option value="34">Nequi</option>
                        <option value="35">Itaú</option>
                        <option value="36">Scotiabank Colpatria</option>
                        <option value="37">Juriscoop</option>
                        <option value="38">DALE</option>
                        <option value="39">Crediflores</option>
                        <option value="40">Lulo Bank</option>
                        <option value="41">Global66</option>
                        <option value="42">RappiPay</option>
                    </select>
                    <h2 class="label">Fondo de Cesantías</h2>
                    <select class="input" v-model="employeeForm.illness">
                        <option value="1">230201-PROTECCIÓN</option>
                        <option value="2">230301-PORVENIR</option>
                        <option value="3">230901-OLD MUTUAL (ANTES SKANDIA)</option>
                        <option value="4">231001-COLFONDOS</option>
                        <option value="5">Fondo nacional del ahorro</option>
                        <option value="6">Fondo de prestaciones sociales del magisterio</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref, onMounted, watch } from 'vue';
    import { IEmployeeClean } from '@/interfaces/IPayroll';
    import { usePayrollStore } from '@/stores/payroll';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';
    import { usePlacesStore } from '@/stores/places';
    import { IDepartamento } from '@/interfaces/IPlaces';

    // IMPORTANTE; TAL VEZ CAMBIAR LUEGO
    const minimumWage = 1650000
    
    const router = useRouter();
    const payrollStore = usePayrollStore();
    const placesStore = usePlacesStore();

    // const { departamentos, municipios } = storeToRefs(placesStore)

    const getMunicipios = ( department: IDepartamento ) => {
        employeeForm.value.municipality = 0
        placesStore.fetchMunicipios(department.Dep_id)
    }

    onMounted(() => {
        placesStore.municipios = []
        placesStore.fetchDepartamentos();
    })

    interface IEmployeeForm {
        typeId: number
        id: number | null
        name: string 
        lastname: string

        department: number | null
        municipality: number | null
        phoneNumber: number | null
        email: string

        contractType: number
        joinDate: Date
        endDate?: Date
        salary: number | null
        integralSalary: boolean
        paymentFrequency: number
        workerType: number
        workerSubType: number
        transport: boolean
        saturdays: boolean
        riskLevel: number

        position: string
        area: number
        vacationDays: number | null

        paymentMethod: number

        eps: number
        bank: number
        insurance: number
        illness: number
    }



    const employeeForm: Ref<IEmployeeForm> = ref({
        typeId: 1,
        id: null,
        name: "",
        lastname: "",
        department: null,
        municipality: null,
        phoneNumber: null,
        email: "",
        contractType: 1,
        joinDate: new Date(),
        endDate: new Date(),
        salary: null,
        integralSalary: false,
        paymentFrequency: 1,
        workerType: 1,
        workerSubType: 1,
        transport: false,
        saturdays: false,
        riskLevel: 1,
        position: "",
        area: 1,
        vacationDays: null,
        paymentMethod: 1,
        eps: 1,
        bank: 1,
        insurance: 1,
        illness: 1
    })

    // Computed value for integral salary
    const disabledIntegral : Ref<boolean> = ref(true)
    const disabledTransport : Ref<boolean> = ref(false)
    
    const disableIntegralSalary = () => {
        const salary = Number(employeeForm.value.salary);
        if (!isNaN(salary)) {
            if (salary < minimumWage * 10) {
                disabledIntegral.value = true;
                employeeForm.value.integralSalary = false;
                if (salary < minimumWage * 2) {
                    disabledTransport.value = false;
                } else {
                    disabledTransport.value = true;
                    employeeForm.value.transport = false;
                }
            } else {
                disabledIntegral.value = false;
            }
        } else {
            // Handle the case where salary is not a number
            disabledIntegral.value = true;
            employeeForm.value.integralSalary = false;
            disabledTransport.value = true;
            employeeForm.value.transport = false;
        }
    };

    watch(
        () => employeeForm.value.salary,
        () => {
            disableIntegralSalary();
        }
    );



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
    .grid-layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px; /* Adjust the gap as needed */
    }

    .checkbox-container {
        display: flex;
        align-items: center;
    }

    .spaced {
        margin-top: 32px;
    }

    .invisible {
        visibility: hidden !important;
    
    }
 </style>