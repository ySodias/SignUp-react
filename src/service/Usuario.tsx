import { useNavigate } from 'react-router-dom'
import { UsuarioParams } from '../interfaces/IUsuario'
import { Api, cookies } from '../providers'

const getUsuario = (params: UsuarioParams) => Api
  .get("usuario", {params})


export const UsuariooService = {
    getUsuario
}
