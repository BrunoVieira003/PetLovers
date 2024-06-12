/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, ReactNode } from "react";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioAtualizarPet from "./formularioAtualizarPet";

type props = {
    tema: string
}

export default class ListaPet extends Component<props>{
    render() {
        let tema = this.props.tema
        let items: Array<ReactNode> = []
        for(let i = 1; i < 7; i++){
            let itemData = {
                id: i,
                nome: `Pet ${i}`
            }
            items.push(
                <div className="list-group-item d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap">
                    <div className="fw-bold">{itemData.nome}</div>
                    <div className="ms-2 d-flex flex-wrap flex-sm-nowrap justify-content gap-2 align-items-stretch">
                        <button type="button" className="btn btn-warning flex-fill" data-bs-toggle="modal" data-bs-target={`#atualizarPet${i}`}>Atualizar</button>
                        <button type="button" className="btn btn-danger flex-fill">Excluir</button>
                        <FormularioAtualizarPet tema={tema} id={i} nome={itemData.nome}/>
                    </div>
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <button type="button" className="btn btn-primary mb-4 mt-3" data-bs-toggle="modal" data-bs-target="#cadastroPet">Cadastrar novo pet</button>
                <FormularioCadastroPet tema={tema}/>
                <div className="list-group">
                    {items}
                </div>
            </div>
        )
    }
}