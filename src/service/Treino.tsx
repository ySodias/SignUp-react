import { TreinoParams } from '../interfaces/ITreino'
import { Api } from '../providers'

const getTreino = (params: any) => Api
  .get(`treino`, {params})

const postTreino = (body: any) => Api
  .post('treino', JSON.stringify(body))

const putTreino = (body: any) => Api
  .put('treino', JSON.stringify(body))


export const TreinoService = {
    getTreino,
    postTreino,
    putTreino
}
