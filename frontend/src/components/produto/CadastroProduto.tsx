import Modal from "../Modal"
import axios from "axios"
import TextInput from "../form/TextInput"
import NumberInput from "../form/NumberInput"

type propsType = {
    afterSubmit?: any
}

export default function CadastroProduto(props: propsType){
    const {afterSubmit} = props

    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.post(`http://localhost:8000/produtos`, {
                nome: formData.get('nome'),
                preco: formData.get('preco'),
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
    }

    return (
        <Modal id="cadastroProduto" title="Novo produto">
            <form onSubmit={enviar} className="d-flex flex-column">
                <TextInput label="Nome" id="nome" required/>
                <NumberInput label="Preço" id="preco" required/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}