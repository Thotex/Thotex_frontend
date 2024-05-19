<template>

<div class="container">
    <h1>Registrar productos</h1>
    <div class="card-global">
        <form class="form-global">
            <div class="column">
                <h2>Nombre producto</h2>
                <input class="input" type="text" placeholder="Nombre producto" required>
                
                <h2>Descripción del producto</h2>
                <input class="input" type="text" placeholder="Descripción del producto">

                <h2>Proveedor</h2>
                <input class="input" type="text" placeholder="Proveedor" required>
                <!--
                    <h2>Código(opcional)</h2>
                    <input class="input" type="number" placeholder="Código">
                -->

                <h2>Categoria o tipo del producto</h2>
                <input class="input" type="text" placeholder="Categoria" required>

                <h2>Notas adicionales</h2>
                <input class="input" type="text" placeholder="Notas adicionales">

                
            </div>
            <div class="column">
                <h2>Cantidad disponible</h2>
                <input class="input" type="number" placeholder="Cantidad disponible">
                
                <h2>Precio unitario</h2>
                <input class="input" type="number" placeholder="Precio unitario" required>

                <h2>Valor total</h2>
                <input class="input" type="number" placeholder="Valor total">

                <h2>Fecha de adquisición</h2>
                <input class="input" type="date" placeholder="Fecha de adquisición" required>

                <h2>Fecha de vencimiento(Si aplica)</h2>
                <input class="input" type="date" placeholder="Fecha de vencimiento">
                <!--
                    <h2>Ubicación en el almacen</h2>
                    <input class="inpunt" type="text" placeholder="Ubicación en el almacen" >
                -->
            </div>
            <div class="column">
                <router-link class="button-global-light" :to="{name: 'inventory'}">Atrás</router-link>
                <button class="button-global">Registrar</button>
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
        width: auto;
        padding: 10px;
    }

</style>