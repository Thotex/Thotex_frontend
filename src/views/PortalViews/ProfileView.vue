<template>
    <div>
        <!-- Tarjeta de perfil -->
        <div class="card-global container-profile">
            <h1>Perfil</h1>
        </div>

        <!-- Tarjeta de suscripción con información del mes gratis, planes y MercadoPago -->
        <div class="card-global container-profile">
            <h1>Suscripción</h1>
            <div class="highlight-box">
                <p>Estás disfrutando de un mes gratis. ¡Aprovecha al máximo!</p>
            </div>
            <!-- Contenedor para los planes y MercadoPago dentro de la tarjeta de suscripción -->
            <div class="subscription-content">
                <!-- Tarjetas de planes -->
                <div class="plans-container">
                    <div class="card-global plan-card">
                <h2>Plan Mensual</h2>
                <p>$30.000 / mes</p>
                <p class="highlight">¡1 mes gratis!</p>
                <ul>
                    <li>Almacenamiento ilimitado</li>
                    <li>Acceso a gráficas</li>
                    <li>Acceso a historial</li>
                    <li>Calendario</li>
                    <li>Acceso a asistente virtual County</li>
                    <li>Integración con hojas de cálculo</li>
                </ul>
                    </div>
                    <div class="card-global plan-card">
                <h2>Plan Anual</h2>
                <p>$300.000 / año</p>
                <p class="highlight">¡1 mes gratis y ahorra un 16%!</p>
                <ul>
                    <li>Almacenamiento ilimitado</li>
                    <li>Acceso a gráficas</li>
                    <li>Acceso a historial</li>
                    <li>Calendario</li>
                    <li>Acceso a asistente virtual County</li>
                    <li>Integración con hojas de cálculo</li>
                </ul>
                    </div>
                </div>

                <!-- Componente de MercadoPago -->
                <div class="mercado-pago-container">
                    <MercadoPagoComponent />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import MercadoPagoComponent from '@/components/MercadoPagoComponent.vue';
</script>

<style scoped lang="scss">
    .container-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 10px;
        margin-bottom: 20px; /* Espacio debajo de la tarjeta */
    }

    .subscription-content {
        display: flex;
        gap: 20px; /* Espacio entre las tarjetas de planes y MercadoPago */
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }

    .plans-container {
        display: flex;
        flex-direction: row;
        gap: 20px; /* Espacio entre las tarjetas de planes */
    }

    .highlight-box {
        background-color: #ffeb3b; /* Color amarillo */
        padding: 15px;
        border-radius: 12px; /* Bordes redondeados */
        margin: 10px 0; /* Espacio arriba y abajo del recuadro */
        text-align: center;
        width: 100%;
        max-width: 500px; /* Opcional: Ajusta el ancho máximo si es necesario */
    }

    .plan-card {
        width: 200px; /* Ancho de las tarjetas de planes */
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .mercado-pago-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto; /* Ajusta el ancho según sea necesario */
    }
</style>
