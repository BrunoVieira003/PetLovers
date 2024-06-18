import Modal from "../Modal"
import axios from "axios"
import TextInput from "../form/TextInput"
import CpfInput from "../form/CpfInput"

type propsType = {
    afterSubmit?: any
}

function CadastroCliente(props: propsType){
    const {afterSubmit} = props

    async function enviar(e: any){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        try{
            await axios.post('http://localhost:8000/clientes', {
            nome: formData.get('nome'),
            nomeSocial: formData.get('nomeSocial'),
            cpf: {
                valor: formData.get('cpfValor'),
                dataEmissao: formData.get('cpfDataEmissao')
            },
        })
        }catch(error){
            console.log(error)
        }

        if(afterSubmit) afterSubmit()
    }

    return (
        <Modal id="cadastroCliente" title="Novo cliente">
            <form onSubmit={enviar} className="d-flex flex-column">
                <h3>Nome</h3>
                <TextInput label="Nome" id="nome" required/>
                <TextInput label="Nome social" id="nomeSocial" required/>
                <CpfInput/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
            </form>
        </Modal>
    )
}

export default CadastroCliente