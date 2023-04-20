import { UsuarioParams } from '../interfaces/IUsuario'
import { Api } from '../providers'

const getUsuario = (params: UsuarioParams) => Api
  .get("usuario", {params})

const postUsuario = (body: any) => Api
  .post('usuario', JSON.stringify(body))

const putUsuario = (body: any) => Api
  .put('usuario', JSON.stringify(body))

export const UsuarioService = {
    getUsuario,
    postUsuario,
    putUsuario
}
