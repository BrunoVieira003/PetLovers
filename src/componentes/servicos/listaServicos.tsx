import { Component, ReactNode } from "react";
import FormularioAtualizarServico from "./formularioAtualizarServico";
import FormularioCadastroServico from "./formularioCadastroServico";

type propsType = {
    tema: string
}

export default function ListaServicos(props: propsType){
        const {tema} = props
        const items: Array<ReactNode> = []
        for(let i = 1; i < 7; i++){
            let itemData = {
                id: i,
                nome: `Serviço ${i}`,
                preco: `R$ ${i}${i},${i}0`
            }
            items.push(
                <div className="list-group-item d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap">
                    <div className="fw-bold">{itemData.nome} - {itemData.preco}</div>
                    <div className="ms-2 d-flex flex-wrap flex-sm-nowrap justify-content gap-2 align-items-stretch">
                        <button type="button" className="btn btn-warning mb-4 mt-3 mx-1" data-bs-toggle="modal" data-bs-target={`#atualizarServico${i}`}>Atualizar</button>
                        <button type="button" className="btn btn-danger mb-4 mt-3 mx-1">Excluir</button>
                        <FormularioAtualizarServico tema={tema} id={i} nome={itemData.nome} preco={itemData.preco}/>
                    </div>
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <button type="button" className="btn btn-primary mb-4 mt-3" data-bs-toggle="modal" data-bs-target="#cadastroServico">Cadastrar novo serviço</button>
                <FormularioCadastroServico tema={tema}/>
                <div className="list-group">
                    {items}
                </div>
            </div>
        )
}