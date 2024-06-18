import Modal from "../Modal"
import axios from "axios"
import TextInput from "../form/TextInput"
import { useParams } from "react-router-dom"
import NumberInput from "../form/NumberInput"
import { Produto } from "../../types/Produto"

type propsType = {
    produto: Produto
    afterSubmit?: any
}

export default function UpdateProduto(props: propsType){
    const {produtoId} = useParams()
    const {produto, afterSubmit} = props
    
    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.put(`http://localhost:8000/produtos/${produtoId}`, {
                nome: formData.get('nome'),
                preco: formData.get('preco'),
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
    }

    return (
        <Modal id="updateProduto" title="Atualizar serviço">
            <form onSubmit={enviar} className="d-flex flex-column">
                <TextInput label="Nome" id="nome" defaultValue={produto.nome} required/>
                <NumberInput label="Preço" id="preco" defaultValue={produto.preco} required/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}