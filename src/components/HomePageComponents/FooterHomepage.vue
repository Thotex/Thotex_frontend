<template>
    <footer>
        <ul class="footer-left">
            <li>
                <router-link to="/" class="direccion">
                    <div class="logo">
                        <img src="@/assets/logoamarillo.png" alt="logo">
                        <h1>Thot<span>ex</span></h1>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="informacion">
            <label>Manual de usuario</label>
            <label>thotexweb@gmail.com</label>
            <div class="redes-contenedor">
                <nav class="redes">
                    <a href="https://www.facebook.com/profile.php?id=61556720878564" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="streamline:computer-logo-facebook-2-media-facebook-social" color="white" width="35px" height="20px"></IconifyIcon>
                    </a>
                    <a href="https://twitter.com/Thotex223715" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ph:x-logo" color="white" width="35px" height="20px"></IconifyIcon>
                    </a>
                    <a href="https://www.tiktok.com/@thotexonline" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ph:tiktok-logo" color="white" width="35px" height="20px"></IconifyIcon>
                    </a>
                    <a href="https://www.instagram.com/thopage37/" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ph:instagram-logo" color="white" width="35px" height="20px"></IconifyIcon>
                    </a>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// No necesitas agregar código en este bloque si no tienes lógica en el componente.
</script>

<style lang="scss" scoped>
footer {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: $custom-blue;
    padding: 10px 0;
    z-index: 3;
    flex-wrap: wrap; // Permite que los elementos se ajusten en dispositivos móviles
}

.informacion {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 200px;
    background-color: $custom-blue;
}

.redes-contenedor {
    display: flex;
    justify-content: center;
}

.redes {
    display: flex;
}

label {
    margin-bottom: 10px;
    color: white;
}

.button-side {
    background-color: #4D6FB3;
    width: 35px;
    padding: 2px;
    display: grid;
    border-radius: 30%; // Mejora la forma de los botones
    margin: 0 5px; // Espaciado entre los iconos
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    width: 220px;
}

h1 {
    color: white;
    margin-left: 10px;
}

@media (max-width: 768px) {
    footer {
        flex-direction: column;
        height: auto;
        padding: 20px 0;
    }

    .logo {
        justify-content: center;
    }

    .informacion {
        align-items: center;
        width: 100%;
    }

    .redes {
        justify-content: center;
        margin-top: 10px;
    }
}

@media (max-width: 480px) {
    .logo h1 {
        font-size: 18px;
    }

    .button-side {
        width: 30px;
        height: 30px;
    }
}
</style>
