// import { AxiosInstance } from 'axios'
import { Ref, ref } from 'vue'
import { IUserForm } from '@/interfaces/IUsers';
import { IUserFormRegister } from '@/interfaces/IUsers';
import { IResponse } from '@/interfaces/IUsers';
import { useCookies } from 'vue3-cookies';

//Interfaz de lo que esperamos de la API
/*
interface IResponse {
    errors?: { 
        message: string 
    }[];
    data?: {
        access_token: string
    };
}
*/

class AuthService {
    // axios: AxiosInstance
    private jwt: Ref<string>
    private error: Ref<string>
    constructor() {
        // this.axios = axios
        this.jwt = ref('')
        this.error = ref('')
    }

    // public sobra, el default es public
    getJwt = () : Ref<string> => {
        return this.jwt
    }

    getError = () : Ref<string> =>{
        return this.error
    }

    login = async (userForm: IUserForm) : Promise<boolean> => {
        // const response = await this.axios.post('/auth/login', {
        //     email,
        //     password
        // })
        // this.jwt = response.data.jwt
        
        
        try {
            // Cambiar localhost por localhost:8081 y desplegar la API
            const res : Response = await fetch('https://thotex-d214cd515eaf.herokuapp.com/api/v1.0/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    //Se puede dejar solo la variable, esta toma el nombre de la variable
                    {
                        correo: userForm.email,
                        contrasena: userForm.password
                    }
                )
            })
            
            //Obtenemos respuesta y la pasamos a JSON
            console.log('Recibimos respuesta')
            const response : IResponse = await res.json()

            // if ('errors' in response) {
            
            // Para tener buenas comparaciones
            // if (response.errors !== undefined && response.errors.length > 0) {
            if (response.mensaje) {
                //this.error = "Login failed"
                this.error.value = response.mensaje
                return false
            }
            
            // Para tener buenas comparaciones
            // if (response.data !== undefined) {
            else if (response.jwt) {
                // Esta es porque la api tiene un data que contiene el token
                this.jwt.value = response.jwt 
                const {cookies} = useCookies();
                cookies.set('jwt', response.jwt)
                return true
            }
    
            return false
        
        //Any by default, pero esta bien
        } catch (error) {
            console.log(error)
            return false
        }
    }

    register = async (userForm: IUserFormRegister) : Promise<boolean> => {
        // const response = await this.axios.post('/auth/login', {
        //     email,
        //     password
        // })
        // this.jwt = response.data.jwt
        
        
        try {
            // Cambiar localhost por localhost:8081 y desplegar la API
            const res : Response = await fetch('https://thotex-d214cd515eaf.herokuapp.com/api/v1.0/register', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    //Se puede dejar solo la variable, esta toma el nombre de la variable
                    {
                        first_name: userForm.name,
                        last_name: userForm.lastName,
                        telefono: userForm.phoneNumber,
                        correo: userForm.email,
                        contrasena: userForm.password,
                    }
                )
            })
            
            //Obtenemos respuesta y la pasamos a JSON
            console.log('Recibimos respuesta')
            const response : IResponse = await res.json()
            // if ('errors' in response) {
            
            // Para tener buenas comparaciones
            // if (response.errors !== undefined && response.errors.length > 0) {
            if (response.mensaje) {
                //this.error = "Login failed"
                if (response.mensaje == 'Registro exitoso') {
                    return true
                } else {
                    this.error.value = response.mensaje
                    return false
                }
            }
            
            // Para tener buenas comparaciones
            // if (response.data !== undefined) {
            /*
            else if (response.jwt) {
                // Esta es porque la api tiene un data que contiene el token
                this.jwt.value = response.jwt
                return true
            }
            */
    
            return false
        
        //Any by default, pero esta bien
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default AuthService