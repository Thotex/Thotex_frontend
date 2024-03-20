<template lang="">
	<div class="header">
		<nav class="nav">
			<ul class="left item-container">	
				<li class="logo-container">
					<router-link to="/">
						<div class="logo">
							<img src="../assets/logoamarillo.png" alt="logo">
							<h1 class="logo-text">Thot<span>ex</span></h1>
						</div>
					</router-link>
				</li>
				<li class="item"><router-link to="/">Home</router-link></li>
				<li class="item"><router-link to="/about">About</router-link></li>
				<li class="item"><router-link to="/conocenos">Conocenos</router-link></li>
			</ul>
			<ul class="right">
				<li class="item button-container"><button @click="toggleLoginView">Ingresar</button></li>
				<li class="item button-container"><button @click="$router.push('/register')">Registrarse</button></li>
			</ul>
		</nav>
		<div class="modal" v-if="showLogin">
			<div class="modal-overlay" @click="$emit('toggleLoginView')">
				<div class="modal-background"></div>
				<div class="modal-content">
					<LoginView v-if="showLogin" @close="toggleLoginView" />
					<div class="modal-close" @click="toggleLoginView">X</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginView from '@/views/LoginView.vue';

export default defineComponent({
	name: 'NavBarHomepage',
	components: {
		LoginView,
	},
	data() {
		return {
			showLogin: false,
		};
	},
	methods: {
		toggleLoginView() {
			this.showLogin = !this.showLogin;
		}
	}
});
</script>

<style scoped lang="scss">
h1 span {
	color: var(--custom-blue);
}

nav {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .right {
	justify-content: flex-end;

  }
  button {
	text-transform: uppercase;
	outline: 0;
	background: var(--custom-blue);
	width: 100%;
	border: 0;
	padding: 15px;
	color: #FFFFFF;
	font-size: 14px;
	border-radius:15px;
	-webkit-transition: all 0.3 ease;
	transition: all 0.3 ease;
	cursor: pointer;
  }

}

nav ul .right li {
  margin-left: 10px;
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

.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999; /* Ensure modal is on top of other content */
}

.modal-background {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
	backdrop-filter: blur(5px); /* Apply blur effect */
	z-index: -1; /* Place behind modal content */
}

.modal-content {
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	z-index: 1; /* Place above background */
}


.login-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>