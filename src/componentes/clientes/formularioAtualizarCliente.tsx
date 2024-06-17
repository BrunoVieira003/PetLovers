import { Component } from "react";
import Modal from "../modal";
import TextInput from "../form/TextInput";
import EmailInput from "../form/EmailInput";
import CPFInput from "../form/CpfInput";

type propsType = {
    tema: string,
    valores: {
        id: number,
        nome: string,
        nomeSocial: string,
        email: string,
        cpf: string,
        cpfData: string
    }
}

export default function FormularioAtualizarCliente(props: propsType){

    const {tema, valores} = props
    return (
        <div className="container-fluid">
            <Modal title="Atualizar cliente" id={`atualizarCliente${valores.id}`}>
                <form>
                    <TextInput label="Nome" valor={valores.nome} id={`nome${valores.id}`}/>
                    <TextInput label="Nome social" valor={valores.nomeSocial} id={`nomeSocial${valores.id}`}/>
                    <EmailInput label="Email" valor={valores.email} id={`email${valores.id}`}/>
                    <CPFInput valorCPF={valores.cpf} valorData={valores.cpfData}/>
                </form>
            </Modal>
        </div>
    )
}