import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import IconButton from "../IconButton"
import { Pet } from "../../types/Pet"
import VoltarButton from "../VoltarButton"
import UpdatePet from "./UpdatePet"

export default function DetalhesPet(){
    const {clienteId, petId} = useParams()
    const [pet, setPet] = useState<Pet>({nome: '', genero: '', raca: '', tipo: ''})
    const navigate = useNavigate();

    async function getPet(){
        try{
            const response = await axios.get(`http://localhost:8000/clientes/${clienteId}/pets/${petId}`)
            setPet(response.data.pet)
        }catch(error){
            console.log(error);
        }
    }

    async function excluir() {
        try{
            await axios.delete(`http://localhost:8000/clientes/${clienteId}/pets/${petId}`)
            navigate(`/clientes/${clienteId}`)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getPet()
    }, [])

    return (
        <div className="d-flex flex-column align-items-around container">
            <VoltarButton link={`/clientes/${clienteId}`}/>
            {pet.id &&
                <div>
                    <h1 className="mb-1">{pet.nome}</h1>
                    <div className="d-flex align-items-center mb-5 gap-3">
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#updatePet">
                            <i className="bi-pencil-square">Editar</i>
                        </button>
                        <IconButton 
                        className="btn-outline-danger" 
                        icon={<i className="bi-trash">Excluir</i>}
                        onClick={excluir}
                        />
                    </div>
                    <h2 className="fs-5 mb-0 fw-light fst-italic">Tipo</h2>
                    <p className="mb-2 fs-2">{pet.tipo}</p>
                    <h2 className="fs-5 mb-0 fw-light fst-italic">Raça</h2>
                    <p className="mb-2 fs-2">{pet.raca}</p>
                    <h2 className="fs-5 mb-0 fw-light fst-italic">Gênero</h2>
                    <p className="mb-2 fs-2">{pet.genero}</p>
                </div>
            }
            <UpdatePet pet={pet}/>
        </div>
    )
}