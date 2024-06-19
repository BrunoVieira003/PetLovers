import Modal from "../Modal"
import axios from "axios"
import TextInput from "../form/TextInput"
import NumberInput from "../form/NumberInput"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Produto } from "../../types/Produto"

type propsType = {
    afterSubmit?: any
}

export default function ConsumirServico(props: propsType){
    const {clienteId, petId} = useParams()
    const {afterSubmit} = props
    const [servicos, setServicos] = useState<Produto[]>([])

    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.post(`http://localhost:8000/clientes/${clienteId}/consumirProduto`, {
                petId,
                consumidoId: formData.get('consumido'),
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
    }

    async function getServicos(){
        try{ 
            const response = await axios.get(`http://localhost:8000/servicos`)
            setServicos(response.data.servicos)
        }catch(error: any){
            console.log(error)
        }
    }

    useEffect(()=>{
        getServicos()
    }, [])

    return (
        <Modal id="consumirServico" title="Consumir servico">
            <form onSubmit={enviar} className="d-flex flex-column">
                <select className="form-select mb-3" id="consumido" name="consumido">
                    {servicos.length}
                    {servicos.map(serv => {
                        return (<option value={serv.id}>{serv.nome} - R${serv.preco}</option>)
                    })}
                </select>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}