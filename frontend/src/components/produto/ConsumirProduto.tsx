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

export default function ConsumirProduto(props: propsType){
    const {clienteId, petId} = useParams()
    const {afterSubmit} = props
    const [produtos, setProdutos] = useState<Produto[]>([])

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

    async function getProdutos(){
        try{ 
            const response = await axios.get(`http://localhost:8000/produtos`)
            setProdutos(response.data.produtos)
            console.log(response.data.produtos)
        }catch(error: any){
            console.log(error)
        }
    }

    useEffect(()=>{
        getProdutos()
    }, [])

    return (
        <Modal id="consumirProduto" title="Consumir produto">
            <form onSubmit={enviar} className="d-flex flex-column">
                <select id="consumido" name="consumido">
                    {produtos.length}
                    {produtos.map(prod => {
                        return (<option value={prod.id}>{prod.nome}</option>)
                    })}
                </select>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}