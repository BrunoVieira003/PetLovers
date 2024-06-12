import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";
import RGInput from "../form/RGInput";

type props = {
    tema: string
}

export default class FormularioCadastroRG extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Modal title="Cadastro de telefone" id="cadastroRG">
                    <form>
                        <RGInput/>
                    </form>
                </Modal>
            </div>
        )
    }
}