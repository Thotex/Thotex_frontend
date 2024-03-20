<template>
    <div>
        <ul  class="footer-left">
            <li>
                <router-link to="/">
                    <div class="logo">
                        <img src="../assets/logoamarillo.png" alt="logo">
                        <h1>Thot<span>ex</span></h1>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="footer-right">
            <h1>Footer</h1>
        </ul>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: var(--custom-blue);
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
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

        h1 {
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