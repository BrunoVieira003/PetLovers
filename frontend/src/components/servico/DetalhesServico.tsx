import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import IconButton from "../IconButton"
import VoltarButton from "../VoltarButton"
import { Servico } from "../../types/Servico"
import UpdateServico from "./UpdateServico"

export default function DetalhesServico(){
    const {servicoId} = useParams()
    const [servico, setServico] = useState<Servico>({nome: '', preco: 0})
    const navigate = useNavigate();

    async function getServico(){
        try{
            const response = await axios.get(`http://localhost:8000/servicos/${servicoId}`)
            setServico(response.data.servico)
        }catch(error){
            console.log(error);
        }
    }

    async function excluir() {
        try{
            await axios.delete(`http://localhost:8000/servicos/${servicoId}`)
            navigate(`/servicos`)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getServico()
    }, [])

    return (
        <div className="d-flex flex-column align-items-around container">
            <VoltarButton link='/servicos'/>
            {servico.id &&
                <div>
                    <h1 className="mb-1">{servico.nome}</h1>
                    <div className="d-flex align-items-center mb-5 gap-3">
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#updateServico">
                            <i className="bi-pencil-square">Editar</i>
                        </button>
                        <IconButton 
                        className="btn-outline-danger" 
                        icon={<i className="bi-trash">Excluir</i>}
                        onClick={excluir}
                        />
                    </div>
                    <h2 className="fs-5 mb-0 fw-light fst-italic">Preço</h2>
                    <p className="mb-2 fs-2">{servico.preco}</p>
                </div>
            }
            <UpdateServico servico={servico}/>
        </div>
    )
}