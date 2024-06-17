/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, ReactNode } from "react";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioAtualizarCliente from "./formularioAtualizarCliente";
import FormularioCadastroVenda from "../venda/formularioCadastroVenda";
import FormularioCadastroTelefone from "./formularioCadastroTelefone";
import FormularioCadastroRG from "./formularioCadastroRG";

type propsType = {
    tema: string
}

export default function ListaCliente(props: propsType){
    const {tema} = props
    let items: Array<ReactNode> = []
    for(let i = 1; i < 7; i++){
        let itemData = {
            id: i,
            nome: `Cliente ${i}`,
            nomeSocial: `Cliente ${i} Silva`,
            email: `cliente0${i}@gmail.com`,
            cpf: `${i}23.456.789/0${i}`,
            cpfData: `2024-06-0${i}`
        }
        items.push(
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{itemData.nome}</div>
                    <div className="btn-group">
                    </div>
                        <div className="d-flex flex-wrap flex-sm-nowrap justify-content gap-2 align-items-stretch">
                            <button className="btn btn-outline-primary flex-fill" type="button" data-bs-toggle="collapse" data-bs-target={`#telefones${i}`} aria-expanded="false" aria-controls="telefones">
                                Telefones
                            </button>
                            <button className="btn btn-outline-primary flex-fill" type="button" data-bs-toggle="collapse" data-bs-target={`#rgs${i}`} aria-expanded="false" aria-controls="rgs">
                                RGs
                            </button>
                        </div>
                        <div className="collapse" id={`telefones${i}`}>
                        <div className="card card-body">
                            <h4>Telefones</h4>
                            <ul className="list-group">
                                <li className="list-group-item">(12){i} 23456789</li>
                                <li className="list-group-item">(21){i} 2345678{i}</li>
                                <li className="list-group-item">
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target='#cadastroTelefone'>
                                        Adicionar telefone
                                    </button>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="collapse" id={`rgs${i}`}>
                        <div className="card card-body">
                            <h4>RGs</h4>
                            <ul className="list-group">
                                <li className="list-group-item">0{i} 234 567-8</li>
                                <li className="list-group-item">{i}{i} 234 567-8</li>
                                <li className="list-group-item">
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target='#cadastroRG'>
                                        Adicionar RG
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <FormularioAtualizarCliente tema={tema} valores={itemData}/>
                    <div className="d-flex flex-wrap flex-sm-nowrap justify-content gap-2 align-items-stretch">
                        <button type="button" className="btn btn-warning flex-fill" data-bs-toggle="modal" data-bs-target={`#atualizarCliente${itemData.id}`}>
                            Atualizar
                        </button>
                        <button type="button" className="btn btn-danger flex-fill">
                            Excluir
                        </button>
                    </div>



            </li>
        )
    }

    return (
        <div className="container-fluid">
            <button type="button" className="btn btn-primary mb-4 mt-3 mx-1" data-bs-toggle="modal" data-bs-target="#cadastroCliente">Cadastrar novo cliente</button>
            <button type="button" className="btn btn-primary mb-4 mt-3 mx-1" data-bs-toggle="modal" data-bs-target="#cadastroVendaProduto">Cadastrar nova venda de produto</button>
            <button type="button" className="btn btn-primary mb-4 mt-3 mx-1" data-bs-toggle="modal" data-bs-target="#cadastroVendaServico">Cadastrar nova venda de serviço</button>
            <FormularioCadastroCliente tema={tema}/>
            <FormularioCadastroVenda tema={tema} tipo="produto" id="cadastroVendaProduto"/>
            <FormularioCadastroVenda tema={tema} tipo="servico" id="cadastroVendaServico"/>
            <FormularioCadastroTelefone tema={tema}/>
            <FormularioCadastroRG tema={tema}/>
            <div className="list-group">
                {items}
            </div>
        </div>
    )
}