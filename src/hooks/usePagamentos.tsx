import { useState, useCallback } from 'react';
import { PagamentosService } from '../service/Pagamentos';

export const usePagamentos = () => {

  const [pagamentos, setPagamentos] = useState<any[]>([]);

  const getPagamentos = useCallback(async(estado_matricula: boolean) => {

    const { status, data } = await PagamentosService.getUsuariosPagamentos(estado_matricula);
    if (status != 200) throw new Error();
    setPagamentos(data);
    return data
  }, []);

  return {
    pagamentos,
    getPagamentos,
  }
}