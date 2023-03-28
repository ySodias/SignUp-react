import { Api } from '../providers'

const getUsuariosPagamentos = (estado_matricula: boolean) => Api
  .get(`listar_pagamentos?${estado_matricula}`)

export const PagamentosService = {
  getUsuariosPagamentos,
}