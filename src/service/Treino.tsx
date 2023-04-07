import { TreinoParams } from '../interfaces/ITreino'
import { Api } from '../providers'

const getTreino = (cpf_usuario: string) => Api
  .get(`treino?nome_cliente=${cpf_usuario}`)

const postTreino = (body: any) => Api
  .post('treino', JSON.stringify(body))

export const TreinoService = {
    getTreino,
    postTreino
}
