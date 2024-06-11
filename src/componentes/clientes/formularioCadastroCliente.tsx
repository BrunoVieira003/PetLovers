import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";
import EmailInput from "../form/EmailInput";

type props = {
    tema: string,

}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Modal title="Cadastro de cliente" id="cadastroCliente">
                    <form>
                        <TextInput label="Nome" placeholder="Ex: Brenno, Maria, etc"/>
                        <TextInput label="Nome social" placeholder="Ex: Márcio, Janete, etc"/>
                        <EmailInput label="Email"/>
                        <TextInput label="Cpf" placeholder="000.000.000/00"/>
                    </form>
                </Modal>
            </div>
        )
    }
}