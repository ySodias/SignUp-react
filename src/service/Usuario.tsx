import { useNavigate } from 'react-router-dom'
import { UsuarioParams } from '../interfaces/IUsuario'
import { Api, cookies } from '../providers'
import { toast } from 'react-toastify'

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
