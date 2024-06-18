import Modal from "./Modal"
import axios from "axios"
import TextInput from "./form/TextInput"
import CpfInput from "./form/CpfInput"
import { Cliente } from "../types/Cliente"
import { Pet } from "../types/Pet"
import { useParams } from "react-router-dom"

type propsType = {
    pet: Pet
    afterSubmit?: any
}

export default function UpdateCliente(props: propsType){
    const {clienteId} = useParams()
    const {pet, afterSubmit} = props
    
    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.put(`http://localhost:8000/clientes/${clienteId}/pets/${pet.id}`, {
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
        <Modal id="updatePet" title="Atualizar pet">
            <form onSubmit={enviar} className="d-flex flex-column">
                <TextInput label="Nome" id="nome" defaultValue={pet.nome} required/>
                <TextInput label="Tipo" id="tipo" defaultValue={pet.tipo} required/>
                <TextInput label="Raça" id="raca" defaultValue={pet.raca} required/>
                <TextInput label="Gênero" id="genero" defaultValue={pet.genero} required/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}