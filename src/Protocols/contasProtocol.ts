export type ContaEntity = {
    id: number,
    descricao: string,
    valor: string,
    responsavel: string,
    status: boolean
}

export type Conta = Omit<ContaEntity, "id">

export type UpConta = Partial<ContaEntity>