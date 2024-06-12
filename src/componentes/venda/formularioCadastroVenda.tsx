import { Component, ReactNode } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type props = {
    tema: string,
    tipo: 'produto' | 'servico'
    id: string
}

export default class FormularioCadastroServico extends Component<props> {

    render() {
        const {tema, tipo, id} = this.props
        const clientes: Array<ReactNode> = []
        for(let i = 1; i < 7; i++){
            clientes.push(<option value={i}>Cliente {i}</option>)
        }

        const pets: Array<ReactNode> = []
        for(let i = 1; i < 7; i++){
            pets.push(<option value={i}>Pet {i}</option>)
        }

        const produto: Array<ReactNode> = []
        for(let i = 1; i < 7; i++){
            produto.push(<option value={i}>Produto {i} - R$ {i}{i},{i}0</option>)
        }

        const servicos: Array<ReactNode> = []
        for(let i = 1; i < 7; i++){
            servicos.push(<option value={i}>Serviço {i} - R$ {i}{i},{i}0</option>)
        }
        return (
            <div className="container-fluid">
                <Modal title="Cadastro de venda" id={id}>
                    <form>
                        <label htmlFor="vendaCliente" className="form-label mb-2">Cliente</label>
                        <select className="form-select mb-3" aria-label="Cliente" id="vendaCliente">
                            {clientes}
                        </select>
                        <label htmlFor="vendaCliente" className="form-label mb-2">Pet</label>
                        <select className="form-select mb-3" aria-label="Pet" id="vendaPet">
                            {pets}
                        </select>
                        {tipo === 'produto' &&
                            <div>
                                <label htmlFor="vendaProduto" className="form-label mb-2">Produto</label>
                                <select className="form-select mb-3" aria-label="Produto" id="vendaProduto">
                                    {produto}
                                </select>
                            </div>
                        }
                        {tipo === 'servico' &&
                            <div>
                                <label htmlFor="vendaServico" className="form-label mb-2">Serviço</label>
                                <select className="form-select mb-3" aria-label="Servico" id="vendaServico">
                                    {servicos}
                                </select>
                            </div>
                        }
                    </form>
                </Modal>
            </div>
        )
    }
}