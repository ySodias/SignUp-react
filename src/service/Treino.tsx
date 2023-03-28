import { TreinoParams } from '../interfaces/ITreino'
import { Api } from '../providers'

const getTreino = (params: TreinoParams) => Api
  .get("treino", {params})


export const TreinoService = {
    getTreino
}
