import { Cpf } from "../../types/Cpf"

type propsType = {
    required?: boolean
    defaultValue?: Cpf
}

export default function CpfInput(props: propsType){
    const {required, defaultValue} = props
    const defaultDataEmissao = defaultValue ? defaultValue.dataEmissao.substring(0, 10) : ''

    return (
        <div className="input-group">
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="cpfValor" placeholder="" name="cpfValor" required={required} defaultValue={defaultValue?.valor}/>
                <label htmlFor="cpfValor">CPF</label>
            </div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="cpfDataEmissao" placeholder="" name="cpfDataEmissao" required={required} defaultValue={defaultDataEmissao}/>
                <label htmlFor="cpfDataEmissao">Data de emissão</label>
            </div>
        </div>
        )
}