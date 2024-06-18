import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Cliente } from "../types/Cliente"
import { formatarData, formatarTelefone } from "../util/formatters"
import { Telefone } from "../types/Telefone"
import UpdateCliente from "./UpdateCliente"

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
        <div className="d-flex flex-column align-items-around container">
            {cliente.id ?
                <div>
                    <h1 className="mb-1">{cliente.nome}</h1>
                    <p className="mb-5 fst-italic">Desde {formatarData(cliente.dataCadastro)}</p>
                    <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#updateCliente">
                        Editar
                    </button>
                    <h2 className="fs-5 mb-0 fw-light fst-italic">Nome social</h2>
                    <p className="mb-2 fs-2">{cliente.nomeSocial}</p>
                    <h2 className="fs-5 mb-0 fw-light fst-italic">CPF</h2>
                    <p className="mb-2 fs-2">{cliente.cpf.valor} - {formatarData(new Date(cliente.cpf.dataEmissao))} </p>
                    {cliente.telefones.length > 0 && 
                        <div>
                            <h2 className="fs-5 mb-0 fw-light fst-italic">Telefones</h2>
                            <div className="container list-group-flush">
                                {cliente.telefones.map((tel: Telefone) => {
                                    return (
                                        <div className="list-group-item">
                                            <p>{formatarTelefone(tel)}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            : <h1>Cliente não disponível</h1>}
            <UpdateCliente cliente={cliente}/>
        </div>
    )
}