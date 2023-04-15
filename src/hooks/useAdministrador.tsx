import { useState, useCallback } from 'react';
import { IUsuario, UsuarioParams } from '../interfaces/IUsuario';
import { PagamentosService } from '../service/Pagamentos';
import { UsuarioService } from '../service/Usuario';
import { AdministradorService } from '../service/Adminsitrador';

export const useAdministrador = () => {

  const [administrador, setAdministrador] = useState<any>();

  const getAdministrador = useCallback(async(params: any) => {

    const { status, data } = await AdministradorService.getAdministrador(params);
    if (status != 200) throw new Error();
    setAdministrador(data);
    return data
  }, []);

  const putAdministrador = useCallback(async(body: any) => {
    const { status, data } = await AdministradorService.putAdministrador(body);
    if (status != 200) throw new Error();
    setAdministrador(data);
    return status
  }, []);

  return {
    administrador,
    getAdministrador,
    putAdministrador
  }
}