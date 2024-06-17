import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";
import EmailInput from "../form/EmailInput";
import CPFInput from "../form/CpfInput";

type propsType = {
    tema: string,

}

export default function FormularioCadastroCliente(props: propsType){
    const {tema} = props

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