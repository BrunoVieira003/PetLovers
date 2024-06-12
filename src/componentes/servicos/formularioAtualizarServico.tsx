import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type props = {
    tema: string
    id: number
    nome: string
    preco: string
}

export default class FormularioAtualizarServico extends Component<props> {

    render() {
        const {tema, id, nome, preco} = this.props
        return (
            <div className="container-fluid">
                <Modal title="Atualizar serviço" id={`atualizarServico${id}`}>
                    <form>
                        <TextInput label="Nome" placeholder="Ex: Shampoo, Ração, etc" id="nome" valor={nome}/>
                        <TextInput label="Preço" placeholder="R$ 00,00" id="preco" valor={preco}/>
                    </form>
                </Modal>
            </div>
        )
    }
}