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

  const putUsuario = useCallback(async(body: any) => {
    const { status, data } = await UsuarioService.putUsuario(body);
    if (status != 200) throw new Error();
    setUsuario(data);
    return data
  }, []);

  const postUsuario = useCallback(async(body: any) => {
    const { status, data } = await UsuarioService.postUsuario(body);
    if (status != 201) throw new Error();
    setUsuario(data);
    return {status:status, data:data}
  }, []);

  return {
    usuario,
    getUsuario,
    putUsuario,
    postUsuario
  }
}