import { defineStore } from 'pinia'
import { IDepartamento, IMunicipio } from '@/interfaces/IPlaces'
import { useCookies } from 'vue3-cookies';

const url = process.env.VUE_APP_BACKEND_URL

export const usePlacesStore = defineStore('places', {
    state: () => ({
        departamentos: [] as IDepartamento[],
        municipios: [] as IMunicipio[],
    }),
    actions : {
        async fetchDepartamentos() {
            // Aquí no se usa fetcservice porque es muy diferente a las otras
            try {
                const { cookies } = useCookies();
                console.log("Fetching departamentos")
                const responseRaw : Response = await fetch( url + '/departamentos/', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + cookies.get('jwt')
                    }
                })
                const response = await responseRaw.json();
                console.log("Response: ")
                console.log(response)
                if (response.errors) {
                    console.log("Errors: ")
                    console.log(response.errors)
                    return false
                }
                else if (response) {
                    console.log("Success")
                    this.departamentos = response
                    console.log(this.departamentos)
                    return true
                }
                console.log("Maybe the api is not working")
                return false
            } catch (error) {
                console.log(error)
            }
        },
        async fetchMunicipios( depId : number ) {
            try {
                const { cookies } = useCookies();
                const responseRaw : Response = await fetch( url + '/departamento/' + String(depId) + '/municipios/', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + cookies.get('jwt')
                    }
                })
                const response = await responseRaw.json();
                if (response.errors) {
                    console.log(response.errors)
                    return false
                }
                else if (response.data) {
                    this.municipios = response.data.municipios
                    return true
                }
                console.log("Maybe the api is not working")
                return false
            } catch (error) {
                console.log(error)
            }
        }
    }
})