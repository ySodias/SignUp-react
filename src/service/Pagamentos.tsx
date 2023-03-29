import { Api } from '../providers'

const getUsuariosPagamentos = (estado_matricula: boolean) => Api
  .get(`listar_pagamentos?${estado_matricula}`)

const postPagamento = (body: any) => Api
  .post('pagamento/usuario', JSON.stringify(body))

export const PagamentosService = {
  getUsuariosPagamentos, postPagamento
}