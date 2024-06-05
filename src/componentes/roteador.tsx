import { Component, ReactNode } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProduto from "./listaProdutos";
import ListaServico from "./listaServicos";
import ListaPet from "./listaPets";

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
            'Produtos': <ListaProduto tema="#e3f2fd"/>,
            'Serviços': <ListaServico tema="#e3f2fd"/>,
            'Cadastro': <FormularioCadastroCliente tema="#e3f2fd"/>,
            'Clientes': <ListaCliente tema={this.tema}/>,
            'Pets': <ListaPet tema={this.tema}/>,
            'Produtos': <ListaProduto tema={this.tema}/>,
            'Serviços': <ListaServico tema={this.tema}/>,
            'Cadastro de cliente': <FormularioCadastroCliente tema={this.tema}/>,
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