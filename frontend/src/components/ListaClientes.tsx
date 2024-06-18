import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Cliente } from "../types/Cliente"

function ListaClientes(){
    const [clientes, setClientes] = useState<Cliente[]>([])

    async function getClientes(){
        try{ 
            const response = await axios.get('http://localhost:8000/clientes')
            setClientes(response.data.clientes)
        }catch(error: any){
            console.log(error)
        }
    }

    useEffect(()=>{
        getClientes()
    }, [])

    return (
        <div className="d-flex flex-column align-items-around container gap-3">
            <h1 className="mb-5">Clientes</h1>
            <div>
                {clientes.length > 0 && clientes.map(cli => {
                    return (
                        <div className="d-flex gap-5 align-items-center">
                            <p className="fs-4 mb-0">{cli.nome}</p>
                            <a className="" href={`/clientes/${cli.id}`}>Ver detalhes</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListaClientes