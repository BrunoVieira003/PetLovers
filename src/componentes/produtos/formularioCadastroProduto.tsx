import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Modal title="Cadastro de produto" id="cadastroProduto">
                    <form>
                        <TextInput label="Nome" placeholder="Ex: Shampoo, Ração, etc" id="nome"/>
                        <TextInput label="Preço" placeholder="R$ 00,00" id="preco"/>
                    </form>
                </Modal>
            </div>
        )
    }
}