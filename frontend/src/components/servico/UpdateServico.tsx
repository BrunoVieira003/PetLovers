import Modal from "../Modal"
import axios from "axios"
import TextInput from "../form/TextInput"
import { useParams } from "react-router-dom"
import { Servico } from "../../types/Servico"
import NumberInput from "../form/NumberInput"

type propsType = {
    servico: Servico
    afterSubmit?: any
}

export default function UpdateServico(props: propsType){
    const {servicoId} = useParams()
    const {servico, afterSubmit} = props
    
    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.put(`http://localhost:8000/servicos/${servicoId}`, {
                nome: formData.get('nome'),
                preco: formData.get('preco'),
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
    }

    return (
        <Modal id="updateServico" title="Atualizar serviço">
            <form onSubmit={enviar} className="d-flex flex-column">
                <TextInput label="Nome" id="nome" defaultValue={servico.nome} required/>
                <NumberInput label="Preço" id="preco"  defaultValue={servico.preco} required/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}