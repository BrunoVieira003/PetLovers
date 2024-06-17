import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type propsType = {
    tema: string
}

export default function FormularioCadastroTelefone(props: propsType){
    const {tema} = props
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