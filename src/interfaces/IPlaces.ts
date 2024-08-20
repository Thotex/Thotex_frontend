export interface IDepartamento {
    Dep_id: number,
    Dep_nombre: string,
    municipios: IMunicipio[]
}

export interface IMunicipio {
    Mun_id: number,
    Mun_nombre: string
}