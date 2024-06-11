import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type props = {
    tema: string
}

export default class FormularioCadastroPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Modal title="Cadastro de pet" id="cadastroPet">
                    <form>
                        <TextInput label="Nome" placeholder="Ex: Double Tó, Café, etc" id="nome"/>
                        <TextInput label="Tipo" placeholder="Ex: Cachorro, Gato, etc" id="tipo"/>
                        <TextInput label="Raça" placeholder="Ex: Siamês, Pinscher, etc" id="raca"/>
                        <select className="form-select mb-3" aria-label="Gênero">
                            <option selected>Escolha o gênero do pet</option>
                            <option value="m">Macho</option>
                            <option value="f">Fêmea</option>
                        </select>
                    </form>
                </Modal>
            </div>
        )
    }
}