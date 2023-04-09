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


  const getPagamentosUsuario = useCallback(async(cpf_usuario: string) => {
    const { status, data } = await PagamentosService.getPagamento(cpf_usuario);
    if (status != 200) throw new Error();
    setPagamentos(data);
    return data
  }, []);

  const putPagamentosUsuario = useCallback(async(body: any) => {
    const { status, data } = await PagamentosService.putPagamento(body);
    if (status != 200) throw new Error();
    setPagamentos(data);
    return data
  }, []);

  return {
    pagamentos,
    getPagamentos,
    getPagamentosUsuario,
    putPagamentosUsuario
  }
}