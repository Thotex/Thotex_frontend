// TODO
import { useCookies } from "vue3-cookies";

// Types
import { Epic } from "@/interfaces/IProject";
import { EpicName } from "@/interfaces/IProject";

class FetchService <T extends Epic> {
    private data : Array<T>
    private url : string
    private mode : EpicName
    private singleData : T

    constructor(mode: EpicName) {
        this.data = [];
        this.singleData = {} as T
        this.url = process.env.VUE_APP_API_URL;
        switch (mode) {
            case 'sales':
                this.mode = 'sales'
                break
            case 'products':
                this.mode = 'products'
                break
            default:
                console.log("Mode not found, defaulting to 'none'")
                alert("Mode not found, defaulting to 'none'")
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
            const responseRaw : Response = await fetch(this.url + this.mode + "/" + id, {
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
            const responseRaw : Response = await fetch(this.url + this.mode, {
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
            const responseRaw : Response = await fetch(this.url + "/insert/" + this.mode, {
                method: 'POST',
                headers: {
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

    updateData = async ( from : T, to : T) : Promise<boolean> => {
        try {
            const { cookies } = useCookies();
            const responseRaw : Response = await fetch(this.url + "/update/" + this.mode, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + cookies.get('jwt')
                },
                body: JSON.stringify({from, to})
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

    deleteData = async ( data : T ) : Promise<boolean> => {
        try {
            const { cookies } = useCookies();
            const responseRaw : Response = await fetch(this.url + "/delete/" + this.mode, {
                method: 'POST',
                headers: {
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
}

export default FetchService