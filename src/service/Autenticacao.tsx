import { useNavigate } from 'react-router-dom'
import { Api, cookies } from '../providers'


const postLogin = (body: any) => Api
  .post("autenticacao", JSON.stringify(body))


export const AutenticacaoService = {
    postLogin
}
