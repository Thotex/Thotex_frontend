<template lang="">
<div>
    <nav>
				<ul>	
					<li>
							<router-link to="/">
								<div class="logo">
									<img src="../assets/logoamarillo.png" alt="logo">
									<h1>Thotex</h1>
								</div>
							</router-link>
					</li>
					
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/about">About</router-link></li>
				</ul>
    </nav>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBarHomepage',
});

</script>
<style scoped lang="scss">
    nav {
        background-color: #333;
        overflow: hidden;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        align-items: center;
        display: flex; /* Add this line */
        align-items: center; /* Add this line */
    }
    
    nav li {
        float: left;
    }
    
    nav li a{
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    .logo {
        display: flex;
        align-items: center;
    }
    
    nav li a:hover {
        background-color: #111;
    }
</style>