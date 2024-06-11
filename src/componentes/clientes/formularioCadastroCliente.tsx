import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";
import EmailInput from "../form/EmailInput";
import CPFInput from "../form/CpfInput";

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
                        <TextInput label="Nome" placeholder="Ex: Brenno, Maria, etc" id="nome"/>
                        <TextInput label="Nome social" placeholder="Ex: Márcio, Janete, etc" id="nomeSocial"/>
                        <EmailInput label="Email"/>
                        <CPFInput/>
                    </form>
                </Modal>
            </div>
        )
    }
}