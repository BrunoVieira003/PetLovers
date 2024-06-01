import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Venda from "../modelo/venda";
import Listagem from "./listagem";

export default class RankingMaisConsumidos extends Listagem {
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>) {
        super()
        this.vendas = vendas
    }
    public listar(): void {
        if (this.vendas.length === 0){
            console.log(`\nAinda não foi consumido nenhum produto ou serviço`);
            return
        }

        let maisConsumidos: Array<{consumido: Produto | Servico, qtd: number}> = []
        this.vendas.forEach(vend => {
            let oldConsumido = maisConsumidos.find(cli => cli.consumido == vend.consumido)
            if(oldConsumido){
                oldConsumido.qtd += 1
            }else{
                maisConsumidos.push({consumido: vend.consumido, qtd: 1})
            }
        })

        let ordenado = maisConsumidos.sort((a, b) => {
            return b.qtd - a.qtd
        })

        console.log("\n----- Produtos ou serviços mais consumidos -----")
        ordenado.forEach((cli, i) => {
            console.log(`${i+1} - ${cli.consumido.nome} (${cli.qtd} consumidos)`)
        })
        
        console.log(`\n`);
    }
}