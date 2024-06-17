import { FormEvent, useState } from "react"
import Modal from "./Modal"
import EmailInput from "./form/EmailInput"
import TextInput from "./form/TextInput"
import axios from "axios"
import EnderecoInput from "./form/EnderecoInput"
import {Endereco, EnderecoVazio, Telefone } from "../types/Cliente"
import IconButton from "./IconButton"
import TelefoneInput from "./form/TelefoneInput"

type propsType = {
    afterSubmit?: any
}

function CadastroCliente(props: propsType){
    const {afterSubmit} = props

    const [nome, setNome] = useState<string>('')
    const [nomeSocial, setNomeSocial] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [endereco, setEndereco] = useState<Endereco>(EnderecoVazio)
    const [telefones, setTelefones] = useState<Telefone[]>([])

    async function enviar(e: FormEvent){
        e.preventDefault()
        const clearTelefones = telefones.map(tel => {
            delete tel.id
            return tel
        })
        await axios.post('http://localhost:32831/cliente/cadastrar', {
            nome,
            nomeSocial,
            email,
            endereco,
            telefones: clearTelefones
        })

        afterSubmit()
        reset()
    }

    function addTelefoneInput(){
        const newTelefones: Telefone[] = [...telefones, {ddd: '', numero: ''}]
        setTelefones(newTelefones)
    }

    function reset(){
        setNome('')
        setNomeSocial('')
        setEmail('')
        setEndereco(EnderecoVazio)
        setTelefones([])
    }

    return (
        <Modal id="cadastroCliente" title="Cadastro de cliente">
            <form onSubmit={enviar} className="d-flex flex-column">
                <TextInput state={[nome, setNome]} label="Nome" id="nome" required/>
                <TextInput state={[nomeSocial, setNomeSocial]} label="Nome social" id="nomeSocial" required/>
                <EmailInput state={[email, setEmail]} label="Email" id="email" required/>
                <EnderecoInput state={[endereco, setEndereco]}  required/>
                <IconButton 
                    className="btn-outline-secondary justify-content-center" 
                    icon={<i className="bi-plus-circle-fill fs-5 fw-bold"></i>}
                    text="Adicionar telefone"
                    onClick={addTelefoneInput}
                />
                {telefones.map((tel: Telefone, index) => {
                    return <TelefoneInput state={[telefones, setTelefones]} index={index}/>
                }
                )}
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}

export default CadastroCliente