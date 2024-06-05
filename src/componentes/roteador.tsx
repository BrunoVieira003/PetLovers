import { Component, ReactNode } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";

type state = {
    tela: string
}

type TRotas = {
    [key: string]: ReactNode;
  };

export default class Roteador extends Component<{}, state>{
    private rotas: TRotas

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }

        this.rotas = {
            'Clientes': <ListaCliente tema="#e3f2fd"/>,
            'Cadastro': <FormularioCadastroCliente tema="#e3f2fd"/>
        }

        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={Object.keys(this.rotas)} />
        let currentView: ReactNode = this.rotas[this.state.tela]
        
        return (
            <>
                {barraNavegacao}
                {currentView}
            </>
        )
    }
}