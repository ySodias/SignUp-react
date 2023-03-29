import { useState, useCallback } from 'react';
import { ITreino, TreinoParams } from '../interfaces/ITreino';
import { TreinoService } from '../service/Treino';

export const useTreino = () => {

  const [treino, setTreino] = useState<ITreino[]>();

  const getTreino = useCallback(async(id: number) => {
    console.log(id)
    const { status, data } = await TreinoService.getTreino(id);
    if (status != 200) throw new Error();
    setTreino(data);
    return data
  }, []);

  

  return {
    treino,
    getTreino,
  }
}