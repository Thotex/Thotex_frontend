import { defineStore } from 'pinia'
import { IDepartamento, IMunicipio } from '@/interfaces/IPlaces'
import { useCookies } from 'vue3-cookies';

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
                const responseRaw : Response = await fetch('https://thotex-d214cd515eaf.herokuapp.com/api/v1.0/departamentos', {
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
                    this.departamentos = response.data
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
                const responseRaw : Response = await fetch('https://thotex-d214cd515eaf.herokuapp.com/api/v1.0/departamentos/' + String(depId) + '/municipios', {
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
                    this.municipios = response.data
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