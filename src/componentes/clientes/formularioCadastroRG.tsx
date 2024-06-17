import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";
import RGInput from "../form/RGInput";

type propsType = {
    tema: string
}

export default function FormularioCadastroRG(props: propsType){
    const {tema} = props

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