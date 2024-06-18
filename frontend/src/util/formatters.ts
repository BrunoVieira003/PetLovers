import { Telefone } from "../types/Telefone"

function formatarTelefone(telefone: Telefone){
    return `(${telefone.ddd}) ${telefone.numero}`
}

function formatarData(data: Date){
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
}

export {formatarTelefone, formatarData}