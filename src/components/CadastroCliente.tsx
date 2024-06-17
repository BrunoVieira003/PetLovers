import { FormEvent, useState } from "react"
import Modal from "./Modal"
import EmailInput from "./form/EmailInput"
import TextInput from "./form/TextInput"
import axios from "axios"
import EnderecoInput from "./form/EnderecoInput"
import {Endereco, EnderecoVazio } from "../types/Cliente"

type propsType = {
    afterSubmit?: any
}

function CadastroCliente(props: propsType){
    const {afterSubmit} = props

    const [nome, setNome] = useState<string>('')
    const [nomeSocial, setNomeSocial] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [endereco, setEndereco] = useState<Endereco>(EnderecoVazio)

    async function enviar(e: FormEvent){
        e.preventDefault()
        await axios.post('http://localhost:32831/cliente/cadastrar', {
            nome,
            nomeSocial,
            email,
            endereco
        })

        afterSubmit()
        reset()
    }

    function reset(){
        setNome('')
        setNomeSocial('')
        setEmail('')
        setEndereco(EnderecoVazio)
    }

    return (
        <Modal id="cadastroCliente" title="Cadastro de cliente">
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

export default CadastroCliente