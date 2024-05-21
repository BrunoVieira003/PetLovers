import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import CadastroProdutosConsumidos from '../negocio/cadastroProdutoConsumido';
import CadastroServicosConsumidos from '../negocio/cadastroServicoConsumido';
import ListagemProdutosConsumidos from '../negocio/listagemProdutosConsumidos';
import ListagemServicosConsumidos from '../negocio/listagemServicosConsumidos';
import RankingClientesPorServico from '../negocio/rankingClientePorServico';
import Submenu from './submenu'

class RankingMenu extends Submenu{
    empresa: Empresa
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    open(): void {
        let opcao
        let entrada = new Entrada()
        console.clear()
        while(true){
            console.log('--------------- Rankings ---------------')
            console.log(`1 - Clientes que mais contrataram serviços`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 5)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagemProdutos = new RankingClientesPorServico(this.empresa.getClientes)
                    listagemProdutos.listar()
                    break
        }
            
        }
    }
    
}

export default RankingMenu