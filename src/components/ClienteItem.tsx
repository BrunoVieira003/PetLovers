import { Cliente, Endereco, Telefone } from "../types/Cliente"
import AtualizaCliente from "./AtualizaCliente"
import ExcluirClienteBotao from "./ExcluirClienteBotao"

type propsType = {
    cliente: Cliente
}

function ClienteItem(props: propsType){
    const { cliente } = props

    function formatarEndereco(endereco: Endereco){
        return `${endereco.rua}, ${endereco.numero} - ${endereco.bairro} - ${endereco.cidade}` || ''
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
                <p className='fs-6 fw-medium'>{formatarEndereco(cliente.endereco)}</p>
                <span className='fs-6 fst-italic'>{cliente.endereco.informacoesAdicionais}</span>
            </div>
            <div>
                <button type="button" className="btn btn-warning mx-auto" data-bs-toggle="modal" data-bs-target={`#atualizaCliente${cliente.id}`}>
                    Atualizar cliente
                </button>
                <ExcluirClienteBotao id={cliente.id}/>
            </div>
            <AtualizaCliente cliente={cliente} id={cliente.id}/>
        </div>
    )
}

export default ClienteItem