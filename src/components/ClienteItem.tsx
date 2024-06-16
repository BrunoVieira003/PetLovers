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
        <div className={styles.ClienteItem}>
            <div className={styles.nomes}>
                <p>{cliente.nome}</p>
                <span>{cliente.nomeSocial}</span>
                <span>{cliente.email}</span>
                <span>{formatarTelefones(cliente.telefones).join(', ')}</span>
            </div>
            <div className={styles.endereco}>
                <p>{formatarEndereço(cliente.endereco)}</p>
                <span>{cliente.endereco.informacoesAdicionais}</span>
            </div>
        </div>
    )
}

export default ClienteItem