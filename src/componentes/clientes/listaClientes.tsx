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
                    <div className="collapse" id={`telefones${i}`}>
                        <div className="card card-body">
                            <h4>Telefones</h4>
                            <ul className="list-group">
                                <li className="list-group-item">(12){i} 23456789</li>
                                <li className="list-group-item">(21){i} 2345678{i}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse" id={`rgs${i}`}>
                        <div className="card card-body">
                            <h4>RGs</h4>
                            <ul className="list-group">
                                <li className="list-group-item">0{i} 234 567-8</li>
                                <li className="list-group-item">{i}{i} 234 567-8</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#telefones${i}`} aria-expanded="false" aria-controls="telefones">
                            Ver telefones
                        </button>
                        <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#rgs${i}`} aria-expanded="false" aria-controls="rgs">
                            Ver RGs
                        </button>
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