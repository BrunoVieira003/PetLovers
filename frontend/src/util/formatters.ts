import { Telefone } from "../types/Telefone"

function formatarTelefone(telefone: Telefone){
    return `(${telefone.ddd}) ${telefone.numero}`
}

function formatarData(data: Date | undefined){
    return data ? new Date(data).toLocaleDateString("pt-BR") : ''
}

export {formatarTelefone, formatarData}