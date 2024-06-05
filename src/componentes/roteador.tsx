import { Component, ReactNode } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./clientes/listaClientes";
import FormularioCadastroCliente from "./clientes/formularioCadastroCliente";
import ListaProduto from "./produtos/listaProdutos";
import ListaServico from "./servicos/listaServicos";
import ListaPet from "./pets/listaPets";

type state = {
    tela: string
}

type TRotas = {
    [key: string]: ReactNode;
  };

export default class Roteador extends Component<{}, state>{
    private rotas: TRotas
    private tema = "#0dcaf0"

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }

        this.rotas = {
            'Clientes': <ListaCliente tema={this.tema}/>,
            'Pets': <ListaPet tema={this.tema}/>,
            'Produtos': <ListaProduto tema={this.tema}/>,
            'Serviços': <ListaServico tema={this.tema}/>,
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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema={this.tema} botoes={Object.keys(this.rotas)} />
        let currentView: ReactNode = this.rotas[this.state.tela]
        
        return (
            <>
                {barraNavegacao}
                {currentView}
            </>
        )
    }
}