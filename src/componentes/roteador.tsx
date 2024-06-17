import { Component, ReactNode, useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./clientes/listaClientes";
import FormularioCadastroCliente from "./clientes/formularioCadastroCliente";
import ListaProduto from "./produtos/listaProdutos";
import ListaServico from "./servicos/listaServicos";
import ListaPet from "./pets/listaPets";
import ClientePorConsumo from "./rankings/ClientePorConsumo";
import RankingsHome from "./rankings/RankingsHome";

type TRotas = {
    [key: string]: ReactNode;
};

export default function Roteador(){
    const tema = "#0dcaf0"
    const rotas: TRotas = {
        'Rankings': <RankingsHome tema={tema}/>,
        'Clientes': <ListaCliente tema={tema}/>,
        'Pets': <ListaPet tema={tema}/>,
            'Produtos': <ListaProduto tema={tema}/>,
            'Serviços': <ListaServico tema={tema}/>,
        }

    const [telaAtual, setTelaAtual] = useState<string>('Rankings')

    function selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        setTelaAtual(novaTela)
    }
        
        return (
            <>
                <BarraNavegacao seletorView={selecionarView} tema={tema} botoes={Object.keys(rotas)}/>
                {rotas[telaAtual]}
            </>
        )

}