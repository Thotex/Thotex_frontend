<template lang="">
	<div>
		<nav>
			<ul>	
				<li>
					<router-link to="/">
						<div class="logo">
							<img src="../assets/logoamarillo.png" alt="logo">
							<h1>Thot<span>ex</span></h1>
						</div>
					</router-link>
				</li>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/about">About</router-link></li>
				<li><router-link to="/conocenos">Conocenos</router-link></li>
				<li><ButtonRounded msg="Contacto">dsa</li>
			</ul>
		</nav>
	</div>
	<router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ButtonRounded from '@/components/ButtonRounded.vue';

export default defineComponent({
	name: 'NavBarHomepage',
	components: {
		ButtonRounded
	},
}

)
;

</script>
<style scoped lang="scss">
h1 span {
	color: var(--custom-blue);
}

nav {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
}

nav li {
  display: inline-block;
}

nav li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

nav li a.router-link-exact-active {
  color: var(--custom-blue);
}

nav li a:hover {
  background-color: #f5f5f5;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 24px;
  margin: 0;
}
</style>