import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Cliente } from "../../types/Cliente"
import CadastroCliente from "../cliente/CadastroCliente"
import { Pet } from "../../types/Pet"
import { useParams } from "react-router-dom"

export default function ListaPets(){
    const {clienteId} = useParams()
    const [pets, setPets] = useState<Pet[]>([])

    async function getPets(){
        try{ 
            const response = await axios.get(`http://localhost:8000/clientes/${clienteId}/pets`)
            setPets(response.data.pets)
        }catch(error: any){
            console.log(error)
        }
    }

    useEffect(()=>{
        getPets()
    }, [])

    return (
        <div className="d-flex flex-column align-items-around container gap-3 mt-5">
            <h1 className="mb-3">Pets</h1>
            <div>
                {pets.length > 0 && pets.map(pet => {
                    return (
                        <div className="d-flex gap-5 align-items-center">
                            <p className="fs-4 mb-0">{pet.nome}</p>
                            <a className="" href={`/clientes/${clienteId}/pets/${pet.id}`}>Ver detalhes</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}