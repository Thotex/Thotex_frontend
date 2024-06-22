export interface IEmployee {
    Emp_codigo: number,
    Persona: {
        Per_codigo: number,
        Per_tipoId: string,
        Per_id: number,
        Per_nombre: string,
        Per_apellido: string,
        Per_correo: string,
        Per_telefono: number
    },
    Emp_cargo: string,
    Emp_salario: number,
    Emp_fechaingreso: Date,
    Usr_codigo?: number
}

export interface IEmployeeClean {
    Emp_codigo: number,
    Per_codigo: number,
    Per_tipoId: string,
    Per_id: number,
    Per_nombre: string,
    Per_apellido: string,
    Per_correo: string,
    Per_telefono: number
    Emp_cargo: string,
    Emp_salario: number,
    Emp_fechaingreso: Date
}

export function cleanEmployee(employee: IEmployee): IEmployeeClean {
    return {
        Emp_codigo: employee.Emp_codigo,
        Per_codigo: employee.Persona.Per_codigo,
        Per_tipoId: employee.Persona.Per_tipoId,
        Per_id: employee.Persona.Per_id,
        Per_nombre: employee.Persona.Per_nombre,
        Per_apellido: employee.Persona.Per_apellido,
        Per_correo: employee.Persona.Per_correo,
        Per_telefono: employee.Persona.Per_telefono,
        Emp_cargo: employee.Emp_cargo,
        Emp_salario: employee.Emp_salario,
        Emp_fechaingreso: employee.Emp_fechaingreso
    }
}

export function formEmployee(employee: IEmployeeClean): IEmployee {
    return {
        Emp_codigo: employee.Emp_codigo,
        Persona: {
            Per_codigo: employee.Per_codigo,
            Per_tipoId: employee.Per_tipoId,
            Per_id: employee.Per_id,
            Per_nombre: employee.Per_nombre,
            Per_apellido: employee.Per_apellido,
            Per_correo: employee.Per_correo,
            Per_telefono: employee.Per_telefono
        },
        Emp_cargo: employee.Emp_cargo,
        Emp_salario: employee.Emp_salario,
        Emp_fechaingreso: employee.Emp_fechaingreso
    }
}