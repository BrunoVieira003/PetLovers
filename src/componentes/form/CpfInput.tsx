import { Component } from "react";

type props = {
    id?: number
    valorCPF?: string
    valorData?: string
}

export default class CPFInput extends Component<props>{
    render(){
        const {valorCPF, valorData} = this.props
        return (
            <div className="input-group mb-3">
                <label htmlFor='cpf' className="form-label">CPF</label>
                <input id='cpf' type="text" className="form-control w-100 mb-1" placeholder='000.000.000-00' value={valorCPF} aria-label='000.000.000-00' aria-describedby="basic-addon1" />
                <label htmlFor='dataEmissao' className="form-label">Data de emissão</label>
                <input id='dataEmissao' type="date" className="form-control w-100" value={valorData} aria-describedby="basic-addon1" />
            </div>
        )
    }
}