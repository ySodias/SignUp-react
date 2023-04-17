import { Api } from '../providers'


const postAdministrador = (body: any) => Api
  .post("administrador", JSON.stringify(body))

const getAdministrador = (params: any) => Api
  .get("administrador", {params})

const putAdministrador = (body: any) => Api
  .put("administrador", JSON.stringify(body))

export const AdministradorService = {
    postAdministrador,
    getAdministrador,
    putAdministrador
}
