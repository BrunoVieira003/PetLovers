import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Cliente } from "../types/Cliente"

export default function DetalhesCliente(){
    const {clienteId} = useParams()
    const [cliente, setCliente] = useState<Cliente>({nome: '', nomeSocial: '', cpf: {valor: '', dataEmissao: ''} })

    async function getCliente(){
        try{
            const response = await axios.get(`http://localhost:8000/clientes/${clienteId}`)
            setCliente(response.data.cliente)
            console.log(response)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getCliente()
    }, [])

    return (
        <div>
            <h1>{cliente.nome}</h1>
            <h2>{cliente.nomeSocial}</h2>
        </div>
    )
}