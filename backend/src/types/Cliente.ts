import { Cpf } from "./Cpf"
import { Rg } from "./Rg"
import { Telefone } from "./Telefone"

type Cliente = {
    id?: number
    nome: string
    nomeSocial: string
    cpf: Cpf
    rgs: Array<Rg>
    dataCadastro: Date
    telefones: Array<Telefone>
}

export type {Cliente}