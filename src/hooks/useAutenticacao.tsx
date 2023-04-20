import { useCallback, useState } from "react";
import { AutenticacaoService } from "../service/Autenticacao";


export const useAutenticacao = () => {

  const [funcionario, setFuncionario] = useState<any>();

  const postLogin = useCallback(async(body: any) => {

    const { status, data } = await AutenticacaoService.postLogin(body);
    if (status != 200) throw new Error();
    setFuncionario(data);
    sessionStorage.setItem("token", data.token)
    sessionStorage.setItem("nivelPermissao", data.nivel_permissao)
    return {status: status, data: data}
  }, []);

  return {
    funcionario,
    postLogin
  }
}