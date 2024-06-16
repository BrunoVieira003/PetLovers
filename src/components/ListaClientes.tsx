import axios from "axios"
import { useEffect, useState } from "react"
import ClienteItem from "./ClienteItem"
import styles from './ListaClientes.module.css'

interface Cliente{
    id: number
    nome: string
    nomeSocial: string
    email: string
    telefones: Array<any>
    links: Array<any>
    endereco: {
        id: number
        bairro: string
        cidade: string
        codigoPostal: string
        rua: string
        numero: string
        informacoesAdicionais: number
    }
}

function ListaClientes(){
    const [clientes, setClientes] = useState<Cliente[]>([])

    async function getClientes(){
        try{ 
            const response = await axios.get('http://localhost:32831/cliente/clientes')
            console.log(response)
        }catch(error: any){
            console.log(error.response.data)
            setClientes(error.response.data)
        }

    }

    useEffect(()=>{
        getClientes()
       console.log(clientes)
    }, [])

    return (
        <div className={styles.ListaClientes}>
            <h1>Clientes</h1>
            {clientes.map((cli: Cliente) => {
                return (
                    <ClienteItem cliente={cli}/>
                )
            })}
        </div>
    )
}

export default ListaClientes