/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import FormularioCadastroPet from "./formularioCadastroPet";

type props = {
    tema: string
}

export default class ListaPet extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <button type="button" className="btn btn-primary mb-4 mt-3" data-bs-toggle="modal" data-bs-target="#cadastroPet">Cadastrar novo pet</button>
                <FormularioCadastroPet tema={tema}/>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Pet 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 3</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 4</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Pet 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Pet 6</a>
                </div>
            </div>
        )
    }
}