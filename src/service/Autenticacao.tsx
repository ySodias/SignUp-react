import { Auth } from '../providers'


const postLogin = (body: any) => Auth
  .post("autenticacao", JSON.stringify(body))

export const AutenticacaoService = {
    postLogin
}
