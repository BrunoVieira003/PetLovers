import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type props = {
    tema: string
    id: number
    nome: string
}

export default class FormularioAtualizarPet extends Component<props> {

    render() {
        const {tema, id, nome} = this.props
        return (
            <div className="container-fluid">
                <Modal title="Atualizar pet" id={`atualizarPet${id}`}>
                    <form>
                        <TextInput label="Nome" placeholder="Ex: Double Tó, Café, etc" id="nome" valor={nome}/>
                        <TextInput label="Tipo" placeholder="Ex: Cachorro, Gato, etc" id="tipo" valor="Gato"/>
                        <TextInput label="Raça" placeholder="Ex: Siamês, Pinscher, etc" id="raca" valor="Siamês"/>
                        <select className="form-select mb-3" aria-label="Gênero">
                            <option>Escolha o gênero do pet</option>
                            <option value="m">Macho</option>
                            <option selected value="f">Fêmea</option>
                        </select>
                    </form>
                </Modal>
            </div>
        )
    }
}