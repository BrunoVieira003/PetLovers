import { FormEvent, useState } from "react"
import Modal from "./Modal"
import EmailInput from "./form/EmailInput"
import TextInput from "./form/TextInput"
import axios from "axios"
import EnderecoInput from "./form/EnderecoInput"
import {Cliente, Endereco } from "../types/Cliente"

type propsType = {
    id: string | number
    cliente: Cliente
}

function AtualizaCliente(props: propsType){
    const {id, cliente} = props

    const [nome, setNome] = useState<string>(cliente.nome)
    const [nomeSocial, setNomeSocial] = useState<string>(cliente.nomeSocial)
    const [email, setEmail] = useState<string>(cliente.email)
    const [endereco, setEndereco] = useState<Endereco>(cliente.endereco)

    async function enviar(e: FormEvent){
        e.preventDefault()
        await axios.put('http://localhost:32831/cliente/atualizar', {
            id: cliente.id,
            nome,
            nomeSocial,
            email,
            endereco
        })
    }

    return (
        <Modal id={`atualizaCliente${id}`} title="Cadastro de cliente">
            <form onSubmit={enviar}>
                <TextInput state={[nome, setNome]} label="Nome" id="nome" required/>
                <TextInput state={[nomeSocial, setNomeSocial]} label="Nome social" id="nomeSocial" required/>
                <EmailInput state={[email, setEmail]} label="Email" id="email" required/>
                <EnderecoInput state={[endereco, setEndereco]}  required/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}

export default AtualizaCliente