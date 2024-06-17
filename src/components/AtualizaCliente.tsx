import { FormEvent, useState } from "react"
import Modal from "./Modal"
import EmailInput from "./form/EmailInput"
import TextInput from "./form/TextInput"
import axios from "axios"
import EnderecoInput from "./form/EnderecoInput"
import {Cliente, Endereco, Telefone } from "../types/Cliente"
import TelefoneInput from "./form/TelefoneInput"
import IconButton from "./IconButton"

type propsType = {
    id: string | number
    cliente: Cliente
    afterSubmit?: any
}

function AtualizaCliente(props: propsType){
    const {id, cliente, afterSubmit} = props

    const [nome, setNome] = useState<string>(cliente.nome)
    const [nomeSocial, setNomeSocial] = useState<string>(cliente.nomeSocial)
    const [email, setEmail] = useState<string>(cliente.email)
    const [endereco, setEndereco] = useState<Endereco>(cliente.endereco)
    const [telefones, setTelefones] = useState<Telefone[]>(cliente.telefones)

    async function enviar(e: FormEvent){
        e.preventDefault()
        await axios.put('http://localhost:32831/cliente/atualizar', {
            id: cliente.id,
            nome,
            nomeSocial,
            email,
            endereco,
            telefones
        })

        afterSubmit()
    }

    function addTelefoneInput(){
        const newTelefones: Telefone[] = [...telefones, {ddd: '', numero: '', id: 0}]
        setTelefones(newTelefones)
    }

    return (
        <Modal id={`atualizaCliente${id}`} title="Cadastro de cliente">
            <form onSubmit={enviar}>
                <TextInput state={[nome, setNome]} label="Nome" id="nome" required/>
                <TextInput state={[nomeSocial, setNomeSocial]} label="Nome social" id="nomeSocial" required/>
                <EmailInput state={[email, setEmail]} label="Email" id="email"/>
                <EnderecoInput state={[endereco, setEndereco]}  required/>
                {telefones.map((tel: Telefone, index) => {
                    return <TelefoneInput state={[telefones, setTelefones]} index={index}/>
                }
                )}
                <IconButton 
                    className="btn-outline-secondary justify-content-center w-100" 
                    icon={<i className="bi-plus-circle-fill fs-5 fw-bold"></i>}
                    text="Adicionar telefone"
                    onClick={addTelefoneInput}
                />
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}

export default AtualizaCliente