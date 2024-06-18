import Modal from "./Modal"
import axios from "axios"
import TextInput from "./form/TextInput"
import CpfInput from "./form/CpfInput"
import { Cliente } from "../types/Cliente"

type propsType = {
    cliente: Cliente
    afterSubmit?: any
}

export default function UpdateCliente(props: propsType){
    const {cliente, afterSubmit} = props
    
    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.put('http://localhost:8000/clientes/'+cliente.id, {
            nome: formData.get('nome'),
            nomeSocial: formData.get('nomeSocial'),
            cpf: {
                valor: formData.get('cpfValor'),
                dataEmissao: formData.get('cpfDataEmissao')
            },
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
    }

    return (
        <Modal id="updateCliente" title="Atualizar cliente">
            <form onSubmit={enviar} className="d-flex flex-column">
                <TextInput id="nome" defaultValue={cliente.nome} required label="Nome"/>
                <TextInput id="nomeSocial" defaultValue={cliente.nomeSocial} required label="Nome social"/>
                <CpfInput defaultValue={cliente.cpf}/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}