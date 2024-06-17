import { Component } from "react";

type propsType = {
    id?: string
    label?: string
    placeholder?: string
    valor?: string
}

export default function TextInput(props: propsType){
    const {id, label, placeholder, valor} = props
    return (
        <div className="input-group mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input id={id} type="text" className="form-control w-100" value={valor} placeholder={placeholder} aria-label={placeholder} aria-describedby="basic-addon1" />
        </div>
    )
}