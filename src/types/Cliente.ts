interface Endereco{
    id?: number
    bairro: string
    cidade: string
    estado: string
    codigoPostal: string
    rua: string
    numero: string
    informacoesAdicionais: string
}

interface Telefone{
    id: number
    ddd: string
    numero: string
}

interface Cliente{
    id: number
    nome: string
    nomeSocial: string
    email: string
    telefones: Array<Telefone>
    links: Array<any>
    endereco: Endereco
}

const EnderecoVazio: Endereco = {
    bairro: '',
    cidade: '',
    estado: '',
    codigoPostal: '',
    rua: '',
    numero: '',
    informacoesAdicionais: ''
}

const ClienteVazio: Cliente = {
    id: 0,
    nome: '',
    nomeSocial: '',
    email: '',
    telefones: [],
    links: [],
    endereco: EnderecoVazio
}

export {EnderecoVazio as EmptyEndereco, ClienteVazio as EmptyCliente}

export type {Cliente, Telefone, Endereco}