<template lang="">
	<div class="header">
		<nav class="nav">
			<ul class="left item-container">	
				<li class="logo-container">
					<router-link :to="{name: 'home'}">
						<div class="logo">
							<img src="@/assets/logoamarillo.png" alt="logo">
							<h1 class="logo-text">Thot<span>ex</span></h1>
						</div>
					</router-link>
				</li>
				<li class="item" v-for="item in props.navBarRouterNames" :key="item.name"><router-link :to="{name: item.name}">{{ item.shownName }}</router-link></li>
			</ul>
			<ul class="right item-container" v-if="!isAuthenticated">
				<li class=" button-container"><button class="login-button" @click="toggleLoginView">Ingresar</button></li>
				<li class=" button-container"><button class="register-button" @click="toggleRegisterView">Registrarse</button></li>
			</ul>
			<ul class="right item-container" v-else>
				<router-link :to="{name: 'portal'}"><li class=" button-container"><button class="login-button">Portal</button></li></router-link>
				<li class=" button-container"><button class="register-button" @click="logout">Cerrar sesión</button></li>
			</ul>
		</nav>
	</div>
	<div class="form-container">
		<LoginForm class="modal-form" v-if="showLogin" @closeFormLogin="closeFormLogin"/>
		<RegistrationForm class="modal-form" v-if="showRegister" @closeFormRegister="closeFormRegister" @successRegister="successRegister"/>
	</div>
</template>

<script setup lang="ts">
import { Ref, ref, defineProps } from 'vue';
import RegistrationForm from '@/views/HomePageViews/RegistrationForm.vue';
import LoginForm from '@/views/HomePageViews/LoginForm.vue';
// import { useRouter } from 'vue-router';
import IRouterShownName from '@/interfaces/IRouter';
import { useCookies } from 'vue3-cookies';
import swal from 'sweetalert';
// Auth
import AuthService from '@/services/AuthService';

// const router = useRouter()
const { cookies } = useCookies();
const isAuthenticated : Ref<boolean> = ref(cookies.isKey('jwt'))

const showLogin : Ref<boolean> = ref(false);
const showRegister : Ref<boolean> = ref(false);


const successRegister = () => {
	swal("¡Genial!", "Se ha registrado exitosamente", "success");
	closeFormRegister();
};

const props = defineProps({
	navBarRouterNames: {
		type: Array as () => IRouterShownName[],
		},
	})



const toggleRegisterView = () => {
	showRegister.value = !showRegister.value;
	// router.push('/register')
};

const toggleLoginView = () => {
	showLogin.value = !showLogin.value;
	// router.push('/login')
};

const closeFormLogin = () => {
	toggleLoginView()
	// router.push('/')
}

const closeFormRegister = () => {
	toggleRegisterView()
	// router.push('/')
}

const logout = async () => {
	const auth : AuthService = new AuthService();
	if (await auth.logout()) {
		isAuthenticated.value = false
		swal("Se ha cerrado la sesión exitosamente");
	} else {
		console.log("Error al cerrar la sesión")
		console.log(auth.getError)
		swal("Error al cerrar la sesión");
	}
}


</script>

<style scoped lang="scss">
div.header {
  width: 100%;
  height: $nav-bar-height;
  background-color: rgb(255, 255, 255);
  border-width: 2px 10px 5px;
  border-color: black;
  z-index: 10;
}

nav.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
}

ul.item-container {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
}

.item-container li.item {
  margin: 0.5rem;
  :hover {
    display: flex;
    border-radius: 5px;
    color: $custom-blue;
    background-color: #f9f9f9;
  }
  
  a {
    font-weight: bold;
    display: block;
    padding: 10px;
    text-decoration: none;
    color: $custom-gray;
  }

  a.router-link-exact-active {
    text-decoration: none;
    color: $custom-blue;
    background-color: #f9f9f9;
    border-radius: 5px;
  }
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;

  .logo {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding-right: 10px;

    img {
      width: 50px;
      height: 50px;
      margin-right: 5px;
    }
  }
  
  :hover {
    background-color: #f9f9f9;
    border-radius: 5px;
  }
  
  a.router-link-exact-active {
    text-decoration: none;
    color: $custom-blue;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
  }
}

.logo-text {
  font-style: normal;
  text-decoration: none !important;
  color: $custom-gray;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0;

  span {
    color: $custom-blue;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.login-button, .register-button {
  margin-top: 10px;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }
}

.login-button {
  background: $custom-blue;
  color: #ffffff;

  :hover {
    background-color: #2957d6;
  }
}

.register-button {
  background: white;
  color: $custom-gray;

  :hover {
    background-color: #f9f9f9;
  }
}

.button-container {
  display: flex;
  align-items: center;

  .register-button:hover, .login-button:hover {
    cursor: pointer;
  }
}

.modal-form {
  z-index: 4;
}

</style>