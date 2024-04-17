<template>
  <div class="login modal" @click="closeComponent">
      <div class="logo">
          <img src="@/assets/LogoThotex.png" alt="logo">
      </div>
      <div class="login-box">
          <div class="form" @click.stop>
              <form class="login-form">   
                  <h1>Iniciar sesión</h1>   
                  <h2>Correo electrónico</h2>
                  <input required type="email" placeholder="Correo electrónico" v-model="userForm.email" @input="errors.email = false; error_messages.email = ''"/>
                  <p class="error" v-if="errors.email">{{ error_messages.email }}</p>
                  <h2>Contraseña</h2>
                  <input required type="password" placeholder="Contraseña" v-model="userForm.password" @input="errors.password = false; error_messages.password = ''"/>
                  <p class="error" v-if="errors.password">{{ error_messages.password }}</p>
                  <p class="message">Olvidaste tu contraseña? <a href="#">Recuperar contraseña</a></p>
                  <button @click.prevent="authUser" >Iniciar sesión</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref } from 'vue';
  import { defineEmits } from 'vue';
  import AuthService from '@/services/AuthService';
  import { IUserForm } from '@/interfaces/IUsers';

  const userForm: Ref<IUserForm> = ref({
    email: '',
    password: '',
  })

  const errors : Ref<{email: boolean, password: boolean}> = ref({
      email: false,
      password: false,
  })

  const error_messages : Ref<{email: string, password: string}> = ref({
      email: '',
      password: '',
  })

  const verifyEmail = () : boolean => {
      if (userForm.value.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          return true
      }
      else {
          errors.value.email = true
          error_messages.value.email = 'Email no valido'
          return false
      }
  }

  const verifyPassword = () : boolean => {
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    if (!userForm.value.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      errors.value.password = true
      error_messages.value.password = 'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
      return false
    }
    else {
      return true
    }
  }

  const checkNonEmptyInputs = () : boolean => {
      const defaultValues : IUserForm = {
          email: '',
          password: '',
      }

      let isFormValid = true

      if (userForm.value.email === defaultValues.email) {
          errors.value.email = true
          error_messages.value.email = 'El correo electrónico es obligatorio'
          isFormValid = false
      }

      if (userForm.value.password === defaultValues.password) {
          errors.value.password = true
          error_messages.value.password = 'La contraseña es obligatoria'
          isFormValid = false
      }

      return isFormValid
      
  }

  /**
   * Verify the form by checking non-empty inputs, email, and password validity.
   *
   * @return {boolean} the validity of the form inputs
   */
  const verifyForm = () : boolean => {
      if (checkNonEmptyInputs()) {
          //Verify at a time
          let validInputs = true
          if (!verifyEmail()) {
              validInputs = false
          }
          if (!verifyPassword()) {
              validInputs = false
          }
          return validInputs
      }
      else {
          return false
      }
  }

  const emits = defineEmits(['closeFormLogin'])

  const closeComponent = () => {
      emits('closeFormLogin')
  }

  const authUser = async () : Promise<boolean> => {
    if (verifyForm()) {
      const auth : AuthService = new AuthService();
      //TODO : MOVER A UNA INTERFAZ APARTE Y MODIFICAR EL AUTH PARA RECIBIR OBJETO USER
      const response : boolean = await auth.login(userForm.value);
      if (response) {
        alert('Login correcto');
        return true;
      } else {
        alert('Login incorrecto');
        return false;
      } 
    }
    else {
      return false
    }
  }
      

</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Poppins:300);

.login-box {
  justify-content: center;
  align-items: center;
  display: flex;
}

.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  overflow: auto;
}

.form {
  position: relative;
  background: #FFFFFF;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius:15px;
}
.form h2{
  position: relative;
  text-align: left;
  font-size: 12px;
  color: $custom-dark-blue;

}
.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius:15px;
}
.form button {
  margin-top: 10px;
  text-transform: uppercase;
  outline: 0;
  background: $custom-blue;
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

.form button:hover,.form button:active,.form button:focus {
  background: $custom-dark-blue;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: $custom-dark-blue;
  text-decoration: none;
}

.terms {
  margin-top: 10px;
  display: block;
  text-align: left;
  font-size: 12px;
  color: $custom-dark-blue;
}

input[type=checkbox] {
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  vertical-align: bottom;
  position: relative;
  top: -1px;
}

input[type=number] {
  -moz-appearance: textfield;
}

input[type=number]::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.error {
  display: block;
  background-color: lightcoral;
  border-radius: 15px;
  padding: 5px;
  font-size: 10px;
  color: white;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 240px;
}


</style>


