import axios from "axios"

type propsType = {
    id: number
    afterSubmit?: any
}

function ExcluirClienteBotao(props: propsType){
    const { id, afterSubmit } = props

    async function excluir(){
        await axios.delete('http://localhost:32831/cliente/excluir', {
            data: {
                "id": id
            }
        })

        afterSubmit()
        
    }
    return <button className="btn btn-danger" onClick={excluir}>Excluir</button>
}

export default ExcluirClienteBotao