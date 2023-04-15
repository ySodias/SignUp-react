import { useState, useCallback } from 'react';
import { ITreino, TreinoParams } from '../interfaces/ITreino';
import { TreinoService } from '../service/Treino';

export const useTreino = () => {

  const [treino, setTreino] = useState<ITreino[]>();

  const getTreino = useCallback(async(params: any) => {
    const { status, data } = await TreinoService.getTreino(params);
    if (status != 200) throw new Error();
    setTreino(data);
    return data
  }, []);

  const putTreino = useCallback(async(body: any) => {
    const { status, data } = await TreinoService.putTreino(body);
    if (status != 200) throw new Error();
    setTreino(data);
    return status
  }, []);
  
  const postTreino = useCallback(async(body: any) => {
    const { status, data } = await TreinoService.postTreino(body)
    if (status != 201) throw new Error();
    setTreino(data);
    return status
  }, []);

  return {
    treino,
    getTreino,
    putTreino,
    postTreino
  }
}