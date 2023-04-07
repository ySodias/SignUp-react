import { useState, useCallback } from 'react';
import { ITreino, TreinoParams } from '../interfaces/ITreino';
import { TreinoService } from '../service/Treino';

export const useTreino = () => {

  const [treino, setTreino] = useState<ITreino[]>();

  const getTreino = useCallback(async(cpf_usuario: string) => {
    const { status, data } = await TreinoService.getTreino(cpf_usuario);
    if (status != 200) throw new Error();
    setTreino(data);
    return data
  }, []);

  

  return {
    treino,
    getTreino,
  }
}