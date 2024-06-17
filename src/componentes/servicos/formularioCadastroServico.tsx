import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type propsType = {
    tema: string
}

export default function FormularioCadastroServico(props: propsType){
    const {tema} = props
    
    return (
        <div className="container-fluid">
            <Modal title="Cadastro de serviço" id="cadastroServico">
                <form>
                    <TextInput label="Nome" placeholder="Ex: Tosa, Banho, etc" id="nome"/>
                    <TextInput label="Preço" placeholder="R$ 00,00" id="preco"/>
                </form>
            </Modal>
        </div>
    )
}