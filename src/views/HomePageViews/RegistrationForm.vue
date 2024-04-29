<template>
    <div class="registration modal" @click="closeComponent">
        <div class="logo">
            <img src="@/assets/LogoThotex.png" alt="logo">
        </div>
        <div class="registration-box">
            <div class="form" @click.stop>
                <form class="registration-form">   
                    <h1>Registrarse</h1>   
                    <h2>Nombre</h2>
                    <input required type="text" placeholder="Nombre" v-model="userForm.name" @input="errors.name = false; error_messages.name = ''"/>
                    <p class="error" v-if="errors.name">{{ error_messages.name }}</p>
                    <h2>Apellido</h2>
                    <input required type="text" placeholder="Apellido" v-model="userForm.lastName" @input="errors.lastName = false; error_messages.lastName = ''"/>
                    <p class="error" v-if="errors.lastName">{{ error_messages.lastName }}</p>
                    <h2>Número telefónico</h2>
                    <input required type="number" placeholder="Número de telefónico" v-model="userForm.phoneNumber" @input="errors.phoneNumber = false; error_messages.phoneNumber = ''"/>
                    <p class="error" v-if="errors.phoneNumber">{{ error_messages.phoneNumber }}</p>
                    <h2>Correo electrónico</h2>
                    <input required type="email" placeholder="Correo electrónico" v-model="userForm.email" @input="errors.email = false; error_messages.email = ''"/>
                    <p class="error" v-if="errors.email">{{ error_messages.email }}</p>
                    <h2>Contraseña</h2>
                    <input required type="password" placeholder="Contraseña" v-model="userForm.password" @input="errors.password = false; error_messages.password = ''"/>
                    <p class="error" v-if="errors.password">{{ error_messages.password }}</p>
                    <h2>Confirmar contraseña</h2>
                    <input required type="password" placeholder="Confirmar contraseña" v-model="confirmPassword" />
                    <p class="error" v-if="errors.confirmPassword">{{ error_messages.confirmPassword }}</p>
                    <div>
                        <label class="terms">
                            <input required type="checkbox" class="checkbox" v-model="userForm.checkedTerms" @input="errors.checkedTerms = false; error_messages.checkedTerms = ''"/>Acepto los términos de política y privacidad
                            <p class="error" v-if="errors.checkedTerms">{{ error_messages.checkedTerms }}</p>
                        </label>
                    </div>
                    <p class="message">Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
                    <button @click.prevent="registerUser" >Registrarse</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
  <script setup lang="ts">
    import { Ref, ref } from 'vue';
    import { defineEmits } from 'vue';
    import AuthService from '@/services/AuthService';
    import { IUserFormRegister } from '@/interfaces/IUsers';
    import swal from 'sweetalert';

    const emits = defineEmits(['closeFormRegister', 'successRegister'])

    /*
    interface IUserFormRegister {
      name: string,
      lastName: string,
      phoneNumber: number | null,
      email: string,
      password: string,
      confirmPassword: string,
      checkedTerms: boolean
    }
    */
  
    const userForm: Ref<IUserFormRegister> = ref({
      name: '',
      lastName: '',
      phoneNumber: null,
      email: '',
      password: '',
      checkedTerms: false
    })

    let confirmPassword: Ref<string> = ref('')

    const errors : Ref<{name: boolean, lastName: boolean, phoneNumber: boolean, email: boolean, password: boolean, confirmPassword: boolean, checkedTerms: boolean}> = ref({
        name: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        password: false,
        confirmPassword: false,
        checkedTerms: false
    })

    const error_messages : Ref<{name: string, lastName: string, phoneNumber: string, email: string, password: string, confirmPassword: string, checkedTerms: string}> = ref({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkedTerms: ''
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
        if (userForm.value.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            if (userForm.value.password === confirmPassword.value) {
                return true
            }
            else {
                errors.value.confirmPassword = true
                error_messages.value.confirmPassword = 'Las contraseñas no coinciden'
                return false
            }
        }
        else {
            errors.value.password = true
            error_messages.value.password = 'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
            return false
        }
    }

    const verifyPhoneNumber = () : boolean => {
        if (userForm.value.phoneNumber === null) {
            errors.value.phoneNumber = true
            error_messages.value.phoneNumber = 'El número es obligatorio'
            return false
        }
        else if (userForm.value.phoneNumber.toString().length === 10) {
            return true
        }
        else {
            errors.value.phoneNumber = true
            error_messages.value.phoneNumber = 'El número debe ser de 10 digitos'
            return false
        }
    }

    const checkNonEmptyInputs = () : boolean => {
        const defaultValues : {name: string, lastName: string, phoneNumber: number | null, email: string, password: string, confirmPassword: string, checkedTerms: boolean} = {
            name: '',
            lastName: '',
            phoneNumber: null,
            email: '',
            password: '',
            confirmPassword: '',
            checkedTerms: false
        }

        let isFormValid = true

        if (userForm.value.name === defaultValues.name) {
            errors.value.name = true
            error_messages.value.name = 'El nombre es obligatorio'
            isFormValid = false
        }

        if (userForm.value.lastName === defaultValues.lastName) {
            errors.value.lastName = true
            error_messages.value.lastName = 'El apellido es obligatorio'
            isFormValid = false
        }

        if (userForm.value.phoneNumber === defaultValues.phoneNumber) {
            errors.value.phoneNumber = true
            error_messages.value.phoneNumber = 'El número es obligatorio'
            isFormValid = false
        }

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

        if (confirmPassword.value === defaultValues.confirmPassword) {
            errors.value.confirmPassword = true
            error_messages.value.confirmPassword = 'La contraseña es obligatoria'
            isFormValid = false
        }

        if (!userForm.value.checkedTerms) {
            errors.value.checkedTerms = true
            error_messages.value.checkedTerms = 'Debes aceptar los terminos y condiciones'
            isFormValid = false
        }

        return isFormValid
        
    }


    const verifyForm = () : boolean => {
        if (checkNonEmptyInputs()) {
            //Verify at a time
            let validInputs = true
            if (!verifyEmail()) {
                validInputs = false
            }
            if (!verifyPhoneNumber()) {
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

    const registerUser = async () : Promise<boolean> => {
    if (verifyForm()) {
      const auth : AuthService = new AuthService();
      //TODO : MOVER A UNA INTERFAZ APARTE Y MODIFICAR EL AUTH PARA RECIBIR OBJETO USER
      const response : boolean = await auth.register(userForm.value);
      if (response) {
        emits('successRegister')
        return true;
      } else {
        swal("¡Registro fallido!", auth.getError().value , "error");
        return false;
      } 
    }
    else {
      return false
    }
  }


    const closeComponent = () => {
        emits('closeFormRegister')
    }

  </script>
  
  <style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Poppins:300);
  
  .registration-box {
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
  
  
  