import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Telefone } from "../../types/Cliente"

type propsType = {
    id?: string
    label?: string
    required?: boolean
    state: [Telefone[], Dispatch<SetStateAction<Telefone[]>>]
    index: number
}

function TelefoneInput(props: propsType){
    const {label, id, required, index} = props
    const[state, setState] = props.state

    const [ddd, setDdd] = useState<string>(state[index].ddd)
    const [numero, setNumero] = useState<string>(state[index].numero)

    useEffect(()=>{
        const newTelefones = state.map(tel => tel)
        const novoTelefone: Telefone = {
            ddd: ddd,
            numero: numero
        }

        if(state[index].id !== 0) novoTelefone.id = state[index].id

        newTelefones.splice(index, 1, novoTelefone)

        setState(newTelefones)
    }, [ddd, numero])

    return (
        <div className="input-group">
            <div className="form-floating form-floating-group mb-3 w-25">
                <input type="text" className="form-control" id='ddd' placeholder="" maxLength={2} name='ddd' required={required} value={ddd} onChange={(e) => {setDdd(e.target.value)}}/>
                <label htmlFor='ddd'>DDD</label>
            </div>
            <div className="form-floating form-floating-group mb-3 w-75">
                <input type="text" className="form-control" id='numero' placeholder="" name='numero' maxLength={9} required={required} value={numero} onChange={(e) => {setNumero(e.target.value)}}/>
                <label htmlFor='numero'>N</label>
            </div>
        </div>
    )
}

export default TelefoneInput