<template>
    <div class="container">
        <h1>Create Employee</h1>
        <div class="card-global">
            <form class="form-global" onsubmit="event.preventDefault()">
                <div class="column">
                    <h2 class="label">Nombre</h2>
                    <input class="input" type="text" placeholder="Nombre" />
                    <h2 class="label">Apellido</h2>
                    <input class="input" type="text" placeholder="Apellido" />
                    <h2 class="label">Identificación</h2>
                    <input class="input" type="number" placeholder="Identificación" />
                </div>
                <div class="column">
                    <h2 class="label">Correo</h2>
                    <input class="input" type="email" placeholder="Correo" />
                    <h2 class="label">Rol</h2>
                    <input class="input" type="text" placeholder="Rol" />
                    <h2 class="label">Salario</h2>
                    <input class="input" type="number" placeholder="Salario" />
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
                    <button class="button-global">Crear</button>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    

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