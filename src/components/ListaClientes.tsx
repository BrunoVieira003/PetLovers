import axios from "axios"
import { useEffect, useState } from "react"
import ClienteItem from "./ClienteItem"
import CadastroCliente from "./CadastroCliente"
import 'bootstrap/dist/css/bootstrap.css'
import { Cliente } from "../types/Cliente"

function ListaClientes(){
    const [clientes, setClientes] = useState<Cliente[]>([])

    async function getClientes(){
        try{ 
            const response = await axios.get('http://localhost:32831/cliente/clientes')
        }catch(error: any){
            setClientes(error.response.data)
        }

    }

    useEffect(()=>{
        getClientes()
    }, [])

    return (
        <div className="d-flex flex-column justify-content-between mt-5 mb-3 mx-5 gap-3">
            <h1 className="mb-4 mx-auto">Clientes</h1>
            <button type="button" className="btn btn-primary mx-auto mb-5" data-bs-toggle="modal" data-bs-target="#cadastroCliente">
                Cadastrar cliente
            </button>
            <CadastroCliente afterSubmit={getClientes}/>
            {clientes.map((cli: Cliente) => {
                return (
                    <ClienteItem cliente={cli} afterAnySubmit={getClientes}/>
                )
            })}
        </div>
    )
}

export default ListaClientes