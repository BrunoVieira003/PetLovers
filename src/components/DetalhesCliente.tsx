import { Cliente, Telefone } from "../types/Cliente";
import Modal from "./Modal";
import { formatarTelefone, formatarTelefones } from "./util/formatters";

type propsType = {
    cliente: Cliente
}

function DetalhesCliente(props: propsType){
    const { cliente } = props
    return (
        <Modal title={cliente.nome} id={`detalhesCliente${cliente.id}`}>
            <div className="d-flex flex-column container">
                <h2>Nome social</h2>
                <p className="fst-italic my-1">{cliente.nomeSocial}</p>
                {cliente.email && <h2>Email</h2>}
                <p>{cliente.email}</p>
                <h2>Endereço</h2>
                <div className="container">
                    <div className="row mb-0 fw-bold">
                        <p className="col">Rua</p>
                        <p className="col">N</p>
                        <p className="col">Bairro</p>
                    </div>
                    <div className="row mt-0">
                        <p className="col">{cliente.endereco.rua}</p>
                        <p className="col">{cliente.endereco.numero}</p>
                        <p className="col">{cliente.endereco.bairro}</p>
                    </div>
                    <div className="row mb-0 fw-bold">
                        <p className="col">Cidade</p>
                        <p className="col">Estado</p>
                        <p className="col">Código postal</p>
                    </div>
                    <div className="row">
                        <p className="col">{cliente.endereco.cidade}</p>
                        <p className="col">{cliente.endereco.estado}</p>
                        <p className="col">{cliente.endereco.codigoPostal}</p>
                    </div>
                    <div className="row mb-0 fw-bold">
                        <p className="col">Informações adicionais</p>
                    </div>
                    <p>{cliente.endereco.informacoesAdicionais}</p>
                </div>
                <h2>Telefones</h2>
                <div className="container list-group-flush">
                    {cliente.telefones.map((tel: Telefone) => {
                        return (
                            <div className="list-group-item">
                                <p>{formatarTelefone(tel)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Modal>
    )
}

export default DetalhesCliente