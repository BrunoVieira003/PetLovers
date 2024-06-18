import Modal from "./Modal"
import axios from "axios"
import TextInput from "./form/TextInput"
import { useParams } from "react-router-dom"

type propsType = {
    afterSubmit?: any
}

export default function CadastroPet(props: propsType){
    const {clienteId} = useParams()
    const {afterSubmit} = props

    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.post(`http://localhost:8000/clientes/${clienteId}/pets`, {
            nome: formData.get('nome'),
            tipo: formData.get('tipo'),
            raca: formData.get('raca'),
            genero: formData.get('genero'),
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
    }

    return (
        <Modal id="cadastroPet" title="Novo pet">
            <form onSubmit={enviar} className="d-flex flex-column">
                <TextInput label="Nome" id="nome" required/>
                <TextInput label="Tipo" id="tipo" required/>
                <TextInput label="Raça" id="raca" required/>
                <TextInput label="Gênero" id="genero" required/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}