//Interface of user
export interface IUserForm {
    email: string;
    password: string;
}

export interface IUserFormRegister {
    name: string,
    lastName: string,
    phoneNumber: number | null,
    email: string,
    password: string,
    checkedTerms: boolean
}

/*
export interface IResponse {
    errors?: { 
        message: string 
    }[];
    data?: {
        access_token: string
    };
}
*/
export interface IResponse {
    mensaje?: string
    jwt?: string
}