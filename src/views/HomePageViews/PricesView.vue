<template>
    <div class="contenedor">
        <h1>Precios</h1>
        <section>
            <!-- Tarjeta del Plan Mensual -->
            <div class="card">
                <img src="https://i.imgur.com/LwOBLeM.png" alt="Plan Mensual" />
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
            <!-- Tarjeta del Plan Anual -->
            <div class="card">
                <img src="https://i.imgur.com/LwOBLeM.png" alt="Plan Anual" />
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
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .contenedor {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: #f5f5f5;
    }

    h1 {
        margin-bottom: 1.5rem;
        color: #333;
        font-size: 2rem;
        text-align: center;
    }

    section {
        display: flex;
        gap: 1rem;
    }

    .card {
        width: 300px;
        padding: 1rem;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .card h2 {
        margin: 1rem 0;
        color: #333;
        font-size: 1.5rem;
    }

    .card p {
        color: #666;
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .highlight {
        font-weight: bold;
        color: #d9534f !important;  /* Color para destacar */
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    .card ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .card li {
        color: #444;
        font-size: 0.9rem;
        margin: 0.5rem 0;
    }
</style>
