import { useNavigate } from 'react-router-dom'
import { UsuarioParams } from '../interfaces/IUsuario'
import { Api, cookies } from '../providers'

const getUsuario = (params: UsuarioParams) => Api
  .get("usuario", {params})

  const postUsuario = (body: any) => Api
  .post('usuario', JSON.stringify(body))

export const UsuariooService = {
    getUsuario,
    postUsuario
}
