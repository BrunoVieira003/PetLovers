import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Servico } from "../../types/Servico"

export default function ListaServicos(){
    const [servicos, setServicos] = useState<Servico[]>([])

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
        <div className="d-flex flex-column align-items-around container gap-3 mt-5">
            <h1 className="mb-3">Serviços</h1>
            <div>
                {servicos.length > 0 && servicos.map(serv => {
                    return (
                        <div className="d-flex gap-5 align-items-center">
                            <p className="fs-4 mb-0">{serv.nome}</p>
                            <a className="" href={`/servicos/${serv.id}`}>Ver detalhes</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}