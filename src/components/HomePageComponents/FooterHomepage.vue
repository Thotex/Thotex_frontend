<template>
    <div>
        <ul  class="footer-left">
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
                        <IconifyIcon class="iconos" icon="streamline:computer-logo-facebook-2-media-facebook-social" color="white" width="35px" heigth="20px" ></IconifyIcon>
                    </a>
                    <a href="https://twitter.com/Thotex223715" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ph:x-logo" color="white" width="35px" heigth="20px" ></IconifyIcon>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ph:tiktok-logo" color="white" width="35px" heigth="20px" ></IconifyIcon>
                    </a>
                    <a href="https://www.instagram.com/thopage37/" target="_blank" rel="noreferrer" class="button-side">
                        <IconifyIcon class="iconos" icon="ph:instagram-logo" color="white" width="35px" heigth="20px" ></IconifyIcon>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
    div {
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: $custom-blue;
        padding: 10px 0;
        z-index: 3;
    }
    .informacion{
        width: 200px;
        background-color: white ;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content:space-evenly;
        background-color: $custom-blue;
    }
    .redes-contenedor{
        height: 40px;

        padding: 0;
        display: flex;
        justify-content: center;
        position: sticky;
        
    }
    .redes{
        display: flex;
    }
    label{
        margin-bottom: 20px;
        color: white
    }
    .button-side{
        background-color: #4D6FB3;
        width: 35px;
        padding: 2px;
        display: grid;
        border-radius: 90%;
        
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    li {
        display: inline-block;
    }
    
    .footer-left {
        display: flex;
        justify-content: flex-start; // Aligns items to the left

    }

    .footer-right {
        display: flex;
        justify-content: flex-end; // Aligns items to the right
        background-color: red; // Add this for testing

        li {
            color: white;
            margin-right: 10px;
        }
    }
    .logo {
        display: flex;
        align-items: center;
        width: 220px;
        h1 {
            color: white;
            margin-left: 10px;
            
        }
    }
    
</style>