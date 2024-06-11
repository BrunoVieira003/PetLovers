import { Component } from "react";

type props = {
    label?: string
}

export default class EmailInput extends Component<props>{
    render(){
        const {label} = this.props
        return (
            <div className="input-group mb-3">
                <label htmlFor='email' className="form-label">{label}</label>
                <input id='email' type="email" className="form-control w-100" placeholder='nome@exemplo.com' aria-label='nome@exemplo.com' aria-describedby="basic-addon1" />
            </div>
        )
    }
}