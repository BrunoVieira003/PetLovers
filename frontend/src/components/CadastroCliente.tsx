import { FormEvent, useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { Cpf } from "../types/Cpf"
import TextInput from "./form/TextInput"
import CpfInput from "./form/CpfInput"

type propsType = {
    afterSubmit?: any
}

function CadastroCliente(props: propsType){
    const {afterSubmit} = props

    const [nome, setNome] = useState<string>('')
    const [nomeSocial, setNomeSocial] = useState<string>('')
    const [cpf, setCpf] = useState<Cpf>({dataEmissao: '', valor: ''})

    async function enviar(e: FormEvent){
        e.preventDefault()
        try{
            await axios.post('http://localhost:8000/clientes', {
            nome,
            nomeSocial,
            cpf,
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
        reset()
    }

    function reset(){
        setNome('')
        setNomeSocial('')
        setCpf({dataEmissao: '', valor: ''})
    }

    return (
        <Modal id="cadastroCliente" title="Novo cliente">
            <form onSubmit={enviar} className="d-flex flex-column">
                <h3>Nome</h3>
                <TextInput state={[nome, setNome]} label="Nome" id="nome" required/>
                <TextInput state={[nomeSocial, setNomeSocial]} label="Nome social" id="nomeSocial" required/>
                <CpfInput state={[cpf, setCpf]} />
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}

export default CadastroCliente