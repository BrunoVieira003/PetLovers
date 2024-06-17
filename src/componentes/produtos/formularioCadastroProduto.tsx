import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";

type propsType = {
    tema: string
}

export default function FormularioCadastroProduto(props: propsType){
    const {tema} = props
    
    return (
        <div className="container-fluid">
            <Modal title="Cadastro de produto" id="cadastroProduto">
                <form>
                    <TextInput label="Nome" placeholder="Ex: Shampoo, Ração, etc" id="nome"/>
                    <TextInput label="Preço" placeholder="R$ 00,00" id="preco"/>
                </form>
            </Modal>
        </div>
    )
}