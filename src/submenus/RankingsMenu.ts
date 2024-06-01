import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import RankingClientePorConsumo from '../negocio/rankingClientePorConsumo';
import RankingMaisConsumidos from '../negocio/rankingMaisConsumidos';
import RankingMaisConsumidosPorTipo from '../negocio/rankingMaisConsumidosPorTipo';
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
            console.log(`1 - Clientes que mais consumiram`);
            console.log(`2 - Produtos ou serviços mais consumidos`);
            console.log(`3 - Produtos ou serviços mais consumidos (por tipo)`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 5)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let rankingConsumo = new RankingClientePorConsumo(this.empresa.getVendas)
                    rankingConsumo.listar()
                    break
                case 2:
                    let produtosConsumidos = new RankingMaisConsumidos(this.empresa.getVendas)
                    produtosConsumidos.listar()
                    break
                case 3:
                    let produtosConsumidosPorTipo = new RankingMaisConsumidosPorTipo(this.empresa.getVendas)
                    produtosConsumidosPorTipo.listar()
                    break
        }
            
        }
    }
    
}

export default RankingMenu