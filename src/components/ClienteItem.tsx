import { Cliente, Endereco, Telefone } from "../types/Cliente"
import AtualizaCliente from "./AtualizaCliente"
import DetalhesCliente from "./DetalhesCliente"
import ExcluirClienteBotao from "./ExcluirClienteBotao"
import { formatarTelefones } from "./util/formatters"

type propsType = {
    cliente: Cliente
    afterAnySubmit?: any
}

function ClienteItem(props: propsType){
    const { cliente, afterAnySubmit } = props

    function formatarEndereco(endereco: Endereco){
        return `${endereco.rua}, ${endereco.numero} - ${endereco.bairro} - ${endereco.cidade}` || ''
    }

    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column flex-wrap">
                <p className='fs-4 fw-medium'>{cliente.nome}</p>
                <span className='fs-6 fst-italic fw-regular'>{cliente.nomeSocial}</span>
            </div>
            <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-primary mx-auto" data-bs-toggle="modal" data-bs-target={`#detalhesCliente${cliente.id}`}>
                    Ver detalhes
                </button>
                <button type="button" className="btn btn-warning mx-auto" data-bs-toggle="modal" data-bs-target={`#atualizaCliente${cliente.id}`}>
                    Atualizar cliente
                </button>
                <ExcluirClienteBotao id={cliente.id} afterSubmit={afterAnySubmit}/>
            </div>
            <DetalhesCliente cliente={cliente}/>
            <AtualizaCliente cliente={cliente} id={cliente.id} afterSubmit={afterAnySubmit}/>
        </div>
    )
}

export default ClienteItem