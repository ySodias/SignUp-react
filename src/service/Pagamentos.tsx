import { Api } from '../providers'

const getUsuariosPagamentos = (estado_matricula: boolean) => Api
  .get(`listar_pagamentos?estado_matricula=${estado_matricula}`)

const getPagamento = (cpf_usuario: string) => Api
  .get(`pagamento/usuario?cpf_usuario=${cpf_usuario}`)

const postPagamento = (body: any) => Api
  .post('pagamento/usuario', JSON.stringify(body))

const putPagamento = (body: any) => Api
  .put('pagamento/usuario', JSON.stringify(body))

export const PagamentosService = {
  getUsuariosPagamentos, postPagamento, putPagamento, getPagamento
}