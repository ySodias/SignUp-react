import { Api } from '../providers'

const getUsuariosPagamentos = (estado_matricula: boolean) => Api
  .get(`relacao_aluno_pagamento?estado_matricula=${estado_matricula}`)

export const PagamentosService = {
  getUsuariosPagamentos,
}