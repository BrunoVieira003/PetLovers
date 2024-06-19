import axios from "axios"
import { useEffect, useState } from "react"
import { Cliente } from "../types/Cliente"

function RankingMaisConsumiram(){
    const [rank, setRank] = useState<Array<{total: number, cliente: Cliente}>>([])

    async function getRank(){
        try{ 
            const response = await axios.get('http://localhost:8000/ranking/maisConsumiram')
            setRank(response.data.rank)
        }catch(error: any){
            console.log(error)
        }
    }

    useEffect(()=>{
        getRank()
    }, [])

    return (
        <div className="d-flex flex-column align-items-around container gap-3">
            <h1 className="mb-5">Clientes que mais consumiram em quantidade</h1>
            <div className="container">
                <div className="row">
                    <p className="col fs-3">Posição</p>
                    <p className="col fs-3">Total</p>
                    <p className="col fs-3">Cliente</p>
                    <p className="col fs-3">Detalhes</p>
                </div>
                {rank.length > 0 && rank.map((r, index) => {
                    return (
                        <div className="row">
                            <p className="fs-4 mb-0 col">{index+1}</p>
                            <p className="fs-4 mb-0 col">{r.total}</p>
                            <p className="fs-4 mb-0 col">{r.cliente.nome}</p>
                            <a className=" col" href={`/clientes/${r.cliente.id}`}>Ver mais</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RankingMaisConsumiram