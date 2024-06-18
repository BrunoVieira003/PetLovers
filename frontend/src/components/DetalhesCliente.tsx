import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Cliente } from "../types/Cliente"
import { formatarData, formatarTelefone } from "../util/formatters"
import { Telefone } from "../types/Telefone"

export default function DetalhesCliente(){
    const {clienteId} = useParams()
    const [cliente, setCliente] = useState<Cliente>({nome: '', nomeSocial: '', cpf: {valor: '', dataEmissao: ''}, telefones: [] })

    async function getCliente(){
        try{
            const response = await axios.get(`http://localhost:8000/clientes/${clienteId}`)
            setCliente(response.data.cliente)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getCliente()
    }, [])

    return (
        <div className="d-flex flex-column container">
            {cliente.id ?
                <>
                    <h2>Nome</h2>
                    <p className="fst-italic my-1">{cliente.nome}</p>
                    <h2>Nome social</h2>
                    <p className="fst-italic my-1">{cliente.nomeSocial}</p>
                    <h2>CPF</h2>
                    <p>{cliente.cpf.valor}</p>
                    <p>{formatarData(new Date(cliente.cpf.dataEmissao))}</p>
                    <h2>Telefones</h2>
                    <div className="container list-group-flush">
                        {cliente.telefones.map((tel: Telefone) => {
                            return (
                                <div className="list-group-item">
                                    <p>{formatarTelefone(tel)}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            : <h1>Cliente não disponível</h1>}
        </div>
    )
}