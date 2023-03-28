export interface ITreino {
    id: Number;
    cpf_usuario: String;
    nome_exercicio: String;
    series: Number;
    repeticoes: Number;
    data_fim: String;
    modalidade: Number;
    frequencia: Number;
    carga: Number;
    created_at: String | null;
    updated_at: String | null;
    created_by: String | null;
    updated_by: String | null;
}

export interface TreinoParams {
    id: Number | null;
}