export type TarefaEntity = {
    id: number,
    nome: string,
    descricao: string,
    dia: string,
    responsavel: string,
    status: boolean
}

export type Tarefa = Omit<TarefaEntity, "id">

export type UpTarefa = Partial<TarefaEntity>