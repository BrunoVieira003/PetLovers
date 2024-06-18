import axios from "axios"
import { useEffect, useState } from "react"
import { Produto } from "../../types/Produto"
import CadastroProduto from "./CadastroProduto"

export default function ListaProdutos(){
    const [produtos, setProdutos] = useState<Produto[]>([])

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
        <div className="d-flex flex-column align-items-around container gap-3 mt-5">
            <h1 className="mb-3">Produtos</h1>
            <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#cadastroProduto">
                Novo Produto
            </button>
            <div>
                {produtos.length > 0 && produtos.map(prod => {
                    return (
                        <div className="d-flex gap-5 align-items-center">
                            <p className="fs-4 mb-0">{prod.nome}</p>
                            <a className="" href={`/produtos/${prod.id}`}>Ver detalhes</a>
                        </div>
                    )
                })}
            </div>
            <CadastroProduto afterSubmit={getProdutos}/>
        </div>
    )
}