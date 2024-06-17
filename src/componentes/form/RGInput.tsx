import { Component } from "react";

export default function RGInput(){
    return (
        <div className="input-group mb-3">
            <label htmlFor='rg' className="form-label">RG</label>
            <input id='rg' type="text" className="form-control w-100 mb-1" placeholder='00 000 000-0' aria-label='00 000 000-0' aria-describedby="basic-addon1" />
            <label htmlFor='dataEmissao' className="form-label">Data de emissão</label>
            <input id='dataEmissao' type="date" className="form-control w-100" aria-describedby="basic-addon1" />
        </div>
    )
}