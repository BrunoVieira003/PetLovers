import { Telefone } from "../../types/Cliente"

function formatarTelefones(telefones: Array<Telefone>){
    const telefonesF = telefones.map(formatarTelefone)

    return telefonesF
}

function formatarTelefone(telefone: Telefone){
    return `(${telefone.ddd}) ${telefone.numero}`
}

export {formatarTelefone, formatarTelefones}