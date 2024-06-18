import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import IconButton from "../IconButton"
import VoltarButton from "../VoltarButton"
import UpdateProduto from "./UpdateProduto"
import { Produto } from "../../types/Produto"

export default function DetalhesProduto(){
    const {produtoId} = useParams()
    const [produto, setProduto] = useState<Produto>({nome: '', preco: 0})
    const navigate = useNavigate();

    async function getProduto(){
        try{
            const response = await axios.get(`http://localhost:8000/produtos/${produtoId}`)
            setProduto(response.data.produto)
            console.log(response.data)
        }catch(error){
            console.log(error);
        }
    }

    async function excluir() {
        try{
            await axios.delete(`http://localhost:8000/produtos/${produtoId}`)
            navigate(`/produtos`)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getProduto()
    }, [])

    return (
        <div className="d-flex flex-column align-items-around container">
            <VoltarButton link='/produtos'/>
            {produto.id &&
                <div>
                    <h1 className="mb-1">{produto.nome}</h1>
                    <div className="d-flex align-items-center mb-5 gap-3">
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#updateProduto">
                            <i className="bi-pencil-square">Editar</i>
                        </button>
                        <IconButton 
                        className="btn-outline-danger" 
                        icon={<i className="bi-trash">Excluir</i>}
                        onClick={excluir}
                        />
                    </div>
                    <h2 className="fs-5 mb-0 fw-light fst-italic">Preço</h2>
                    <p className="mb-2 fs-2">{produto.preco}</p>
                </div>
            }
            <UpdateProduto produto={produto}/>
        </div>
    )
}