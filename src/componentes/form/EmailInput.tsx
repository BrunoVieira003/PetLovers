import { Component } from "react";

type props = {
    id?: string
    label?: string
    valor?: string
}

export default class EmailInput extends Component<props>{
    render(){
        const {label, valor} = this.props
        return (
            <div className="input-group mb-3">
                <label htmlFor='email' className="form-label">{label}</label>
                <input id='email' type="email" className="form-control w-100" value={valor} placeholder='nome@exemplo.com' aria-label='nome@exemplo.com' aria-describedby="basic-addon1" />
            </div>
        )
    }
}