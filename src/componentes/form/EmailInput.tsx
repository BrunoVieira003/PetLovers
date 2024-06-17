import { Component } from "react";

type propsType = {
    id?: string
    label?: string
    valor?: string
}

export default function EmailInput(props: propsType){
    const {label, valor} = props
    
    return (
        <div className="input-group mb-3">
            <label htmlFor='email' className="form-label">{label}</label>
            <input id='email' type="email" className="form-control w-100" value={valor} placeholder='nome@exemplo.com' aria-label='nome@exemplo.com' aria-describedby="basic-addon1" />
        </div>
    )
}