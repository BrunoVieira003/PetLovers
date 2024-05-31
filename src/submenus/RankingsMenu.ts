import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import RankingClientesPorProduto from '../negocio/rankingClientePorProduto';
import RankingClientesPorServico from '../negocio/rankingClientePorServico';
import RankingProdutosConsumidos from '../negocio/rankingProdutosConsumidos';
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
            console.log(`2 - Clientes que mais compraram produtos`);
            console.log(`3 - Produtos mais consumidos`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 5)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagemServicos = new RankingClientesPorServico(this.empresa.getClientes)
                    listagemServicos.listar()
                    break
                case 2:
                    let listagemProdutos = new RankingClientesPorProduto(this.empresa.getClientes)
                    listagemProdutos.listar()
                    break
                case 3:
                    let produtosConsumidos = new RankingProdutosConsumidos(this.empresa.getClientes)
                    produtosConsumidos.listar()
                    break
        }
            
        }
    }
    
}

export default RankingMenu