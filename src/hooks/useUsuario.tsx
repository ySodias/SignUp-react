import { useState, useCallback } from 'react';
import { IUsuario, UsuarioParams } from '../interfaces/IUsuario';
import { PagamentosService } from '../service/Pagamentos';
import { UsuarioService } from '../service/Usuario';

export const useUsuario = () => {

  const [usuario, setUsuario] = useState<IUsuario>();

  const getUsuario = useCallback(async(params: UsuarioParams) => {

    const { status, data } = await UsuarioService.getUsuario(params);
    if (status != 200) throw new Error();
    setUsuario(data);
    return data
  }, []);

  return {
    usuario,
    getUsuario,
  }
}