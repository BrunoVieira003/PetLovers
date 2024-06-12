import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type props = {
    tema: string
}

export default class FormularioCadastroTelefone extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Modal title="Cadastro de telefone" id="cadastroTelefone">
                    <form>
                        <TextInput label="DDD" placeholder="00" id="dd"/>
                        <TextInput label="Número" placeholder="0 00000000" id="numero"/>
                    </form>
                </Modal>
            </div>
        )
    }
}