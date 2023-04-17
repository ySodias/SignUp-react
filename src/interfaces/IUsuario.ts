export interface IUsuario {
    id: Number;
    cpf: String;
    nome_client: String;
    data_nascimento: String;
    endereco: String;
    forma_pagamento: Number;
    telefone: String;
    ativo: Boolean;
    plano: Number;
    created_at: String;
    updated_at: String;
    created_by: String;
    updated_by: String;
}


export interface UsuarioParams {
    id: Number | null;
    nome_cliente: String | null;
    cpf: String | null;
    ativo: Boolean | null;
}