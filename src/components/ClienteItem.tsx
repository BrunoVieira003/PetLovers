import styles from './ClienteItem.module.css'

interface Endereco{
    id: number
    bairro: string
    cidade: string
    codigoPostal: string
    rua: string
    numero: string
    informacoesAdicionais: number
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

type propsType = {
    cliente: Cliente
}

function ClienteItem(props: propsType){
    const { cliente } = props

    function formatarEndereço(enderco: Endereco){
        return `${cliente.endereco.rua}, ${cliente.endereco.numero} - ${cliente.endereco.bairro} - ${cliente.endereco.cidade}`
    }

    function formatarTelefones(telefones: Array<Telefone>){
        const telefonesF = telefones.map(tel => {
            return `(${tel.ddd}) ${tel.numero}`
        })

        return telefonesF
    }

    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column flex-wrap">
                <p className='fs-4 fw-medium'>{cliente.nome}</p>
                <span className='fs-6 fst-italic fw-regular'>{cliente.nomeSocial}</span>
                <span className='fs-6 fst-italic fw-regular'>{cliente.email}</span>
                <span className='fs-6 fst-italic fw-regular'>
                    {formatarTelefones(cliente.telefones).join(', ')}
                </span>
            </div>
            <div className="d-flex flex-column w-25">
                <p className='fs-6 fw-medium'>{formatarEndereço(cliente.endereco)}</p>
                <span className='fs-6 fst-italic'>{cliente.endereco.informacoesAdicionais}</span>
            </div>
        </div>
    )
}

export default ClienteItem