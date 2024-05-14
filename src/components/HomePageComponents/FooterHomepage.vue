<template>
    <div>
        <ul  class="footer-left">
            <li>
                <router-link to="/">
                    <div class="logo">
                        <img src="@/assets/logoamarillo.png" alt="logo">
                        <h1>Thot<span>ex</span></h1>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="footer-right">
            <li>
                wdsa
            </li>
            <li>
                <router-link to="/precios">Precios</router-link>
            </li>
        </ul>
        <div class="informacion">
            <label>Manual de usuario</label>
            <label>thotexweb@gmail.com</label>
            <div class="redes">
                <RouterLink :to="{name: 'third'}" class="button-side">
                    <IconifyIcon class="iconos" icon="streamline:computer-logo-facebook-2-media-facebook-social" color="white" width="35px" heigth="20px" ></IconifyIcon>
                </RouterLink>
                <RouterLink :to="{name: 'third'}" class="button-side">
                    <IconifyIcon class="iconos" icon="ph:x-logo" color="white" width="35px" heigth="20px" ></IconifyIcon>
                </RouterLink>
                <RouterLink :to="{name: 'third'}" class="button-side">
                    <IconifyIcon class="iconos" icon="ph:tiktok-logo" color="white" width="35px" heigth="20px" ></IconifyIcon>
                </RouterLink>
                <nav class="button-side" >
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
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
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: $custom-blue;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
    }
    .informacion{
        width: 400px;
        position: relative;
        background-color: white ;
        display: flex;
        flex-direction: column;
    }
    .redes{
        height: 40px;
        background-color: $custom-blue;
        padding: 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    label{
        margin-bottom: 10px;
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
        h1 {
            color: white;
            margin-left: 10px;
        }
    }
    
</style>