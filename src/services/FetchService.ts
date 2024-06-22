// TODO
import { useCookies } from "vue3-cookies";

// Types
import { Epic } from "@/interfaces/IProject";
import { EpicName } from "@/interfaces/IProject";

class FetchService <T extends Epic> {
    private data : Array<T>
    private url : string
    private mode : string
    private singleData : T

    constructor(mode: EpicName) {
        this.data = [];
        this.singleData = {} as T
        //this.url = process.env.VUE_APP_API_URL;
        //this.url = "http://127.0.0.1:8000/api/v1.0"
        this.url = "https://thotex-d214cd515eaf.herokuapp.com/api/v1.0"
        switch (mode) {
            case 'sales':
                this.mode = 'ventas'
                break
            case 'products':
                this.mode = 'productos'
                break
            case 'employees':
                this.mode = 'empleados'
                break
            case 'shopping':
                this.mode = 'compras'
                break
            case 'thirdParties':
                this.mode = 'clientes' //TODO: Cuadrar esto con la API
                break
            case 'calendar':
                this.mode = 'calendar'
                break
            default:
                console.log("Mode" + mode + " not found, defaulting to 'none'")
                alert("Mode" + mode + " not found, defaulting to 'none'")
                this.mode = 'none'
                break
        }
    }

    getSingleData = () : T => {
        return this.singleData
    }

    getData = () : Array<T> => {
        return this.data
    }
    
    fetchSingleData = async (id: number) : Promise<boolean> => {
        try {
            const { cookies } = useCookies();
            const responseRaw : Response = await fetch(this.url + "/" + this.mode + "/" + id + "/", {
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
                this.data = response.data
                return true
            }
            console.log("Maybe the api is not working")
            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    fetchData = async () : Promise<boolean> => {
        try {
            const { cookies } = useCookies();
            const responseRaw : Response = await fetch(this.url + "/" + this.mode + "/", {
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
                this.data = response.data
                return true
            }
            console.log("Maybe the api is not working")
            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    insertData = async ( data : T ) : Promise<boolean> => {
        try {
            const { cookies } = useCookies();
            const responseRaw : Response = await fetch(this.url + "/" + this.mode + "/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + cookies.get('jwt')
                },
                body: JSON.stringify(data)
            })
            const response = await responseRaw.json();
            if (response.errors) {
                console.log(response.errors)
                return false
            }
            else if (response.data) {
                this.data = response.data
                return true
            }
            console.log("Maybe the api is not working")
            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    updateData = async ( id : number, to : T) : Promise<boolean> => {
        try {
            const { cookies } = useCookies();
            const responseRaw : Response = await fetch(this.url + "/" + this.mode + "/" + id + "/", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + cookies.get('jwt')
                },
                body: JSON.stringify(to)
            })
            const response = await responseRaw.json();
            if (response.errors) {
                console.log(response.errors)
                return false
            }
            else if (response.data) {
                this.data = response.data
                return true
            }
            console.log("Maybe the api is not working")
            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    deleteData = async ( id : number ) : Promise<boolean> => {
        try {
            const { cookies } = useCookies();
            const responseRaw : Response = await fetch(this.url + "/" + this.mode + "/" + id + "/", {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + cookies.get('jwt')
                },
            })
            const response = await responseRaw.json();
            if (response.errors) {
                console.log(response.errors)
                return false
            }
            else if (response.data) {
                this.data = response.data
                return true
            }
            console.log("Maybe the api is not working")
            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default FetchService