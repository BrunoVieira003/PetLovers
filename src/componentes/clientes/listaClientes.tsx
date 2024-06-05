/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, ReactNode } from "react";

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
                    <span className="badge text-bg-primary rounded-pill">14</span>
                </li>
            )
        }

        return (
            <div className="container-fluid">
                <div className="list-group">
                    {items}
                </div>
            </div>
        )
    }
}