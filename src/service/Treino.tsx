import { TreinoParams } from '../interfaces/ITreino'
import { Api } from '../providers'

const getTreino = (idUsuario: number) => Api
  .get(`treino?id=${idUsuario}`)

const postTreino = (body: any) => Api
  .post('treino', JSON.stringify(body))

export const TreinoService = {
    getTreino,
    postTreino
}
