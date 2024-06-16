import { FormEvent, useState } from "react"
import Modal from "./Modal"
import EmailInput from "./form/EmailInput"
import TextInput from "./form/TextInput"
import axios from "axios"
import EnderecoInput from "./form/EnderecoInput"
import { EmptyEndereco, Endereco } from "../types/Cliente"

function CadastroCliente(){
    const [nome, setNome] = useState<string>()
    const [nomeSocial, setNomeSocial] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [endereco, setEndereco] = useState<Endereco>(EmptyEndereco)

    async function enviar(e: FormEvent){
        e.preventDefault()
        await axios.post('http://localhost:32831/cliente/cadastrar', {
            nome,
            nomeSocial,
            email,
            endereco
        })
    }

    return (
        <Modal id="cadastroCliente" title="Cadastro de cliente">
            <form onSubmit={enviar}>
                <TextInput setState={setNome} label="Nome" id="nome" required/>
                <TextInput setState={setNomeSocial} label="Nome social" id="nomeSocial" required/>
                <EmailInput setState={setEmail} label="Email" id="email" required/>
                <EnderecoInput setState={setEndereco} required/>
                <input type="submit" className="btn btn-primary" value="Enviar"/>
            </form>
        </Modal>
    )
}

export default CadastroCliente