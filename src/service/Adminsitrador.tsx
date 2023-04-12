import { Api } from '../providers'


const postAdministrador = (body: any) => Api
  .post("administrador", JSON.stringify(body))

export const AdministradorService = {
    postAdministrador
}
