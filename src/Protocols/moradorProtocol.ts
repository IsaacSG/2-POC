export type MoradorEntity = {
    id: number,
    nome: string,
    telefone: string,
    quarto: string
}

export type Morador = Omit<MoradorEntity, "id">

export type DellMorador = Partial<MoradorEntity>