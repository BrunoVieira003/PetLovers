/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, ReactNode } from "react";
import FormularioCadastroCliente from "./formularioCadastroCliente";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        let items: Array<ReactNode> = []
        for(let i = 1; i < 7; i++){
            items.push(
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Cliente {i}</div>
                        cliente0{i}@gmail.com
                    </div>
                </li>
            )
        }

        return (
            <div className="container-fluid">
                <button type="button" className="btn btn-primary mb-4 mt-3" data-bs-toggle="modal" data-bs-target="#cadastroCliente">Cadastrar novo cliente</button>
                <FormularioCadastroCliente tema={tema}/>
                <div className="list-group">
                    {items}
                </div>
            </div>
        )
    }
}