import axios from "axios"

type propsType = {
    id: number
    afterSubmit?: any
    className?: string
}

function ExcluirClienteBotao(props: propsType){
    const { id, afterSubmit, className } = props

    async function excluir(){
        await axios.delete('http://localhost:32831/cliente/excluir', {
            data: {
                "id": id
            }
        })

        afterSubmit()
        
    }
    return <button className={"btn btn-danger "+className} onClick={excluir}>Excluir</button>
}

export default ExcluirClienteBotao