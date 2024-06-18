import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Cpf } from "../../types/Cpf"

type propsType = {
    required?: boolean
    state: [Cpf, Dispatch<SetStateAction<Cpf>>]
}

export default function CpfInput(props: propsType){
    const {required} = props
    const [state, setState] = props.state

    const [valor, setValor] = useState(state.valor)
    const [dataEmissao, setDataEmissao] = useState(state.dataEmissao)

    useEffect(()=>{
        setState({valor, dataEmissao})
    }, [valor, dataEmissao, setState])

    return (
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="valor" placeholder="" name="valor" required={required} value={valor} onChange={(e) => {setValor(e.target.value)}}/>
            <label htmlFor="valor">Valor</label>
            <input type="date" className="form-control" id="dataEmissao" placeholder="" name="dataEmissao" required={required} value={dataEmissao} onChange={(e) => {setDataEmissao(e.target.value)}}/>
            <label htmlFor="dataEmissao">Valor</label>
        </div>
    )
}