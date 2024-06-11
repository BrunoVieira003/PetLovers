import { Component } from "react";

type props = {
    id?: string
    label?: string
    placeholder?: string
    valor?: string
}

export default class TextInput extends Component<props>{
    render(){
        const {id, label, placeholder, valor} = this.props
        return (
            <div className="input-group mb-3">
                <label htmlFor={id} className="form-label">{label}</label>
                <input id={id} type="text" className="form-control w-100" value={valor} placeholder={placeholder} aria-label={placeholder} aria-describedby="basic-addon1" />
            </div>
        )
    }
}