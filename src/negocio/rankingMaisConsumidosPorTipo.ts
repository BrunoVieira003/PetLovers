import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Venda from "../modelo/venda";
import Listagem from "./listagem";

export default class RankingMaisConsumidosPorTipo extends Listagem {
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

        let consumidosPorTipo: Array<{tipo: string, consumidos: Array<Produto | Servico>}> = []
        this.vendas.forEach(vend => {
            let oldConsumido = consumidosPorTipo.find(con => con.tipo == vend.pet.getTipo)
            if(oldConsumido){
                oldConsumido.consumidos.push(vend.consumido)
            }else{
                consumidosPorTipo.push({tipo: vend.pet.getTipo, consumidos: [vend.consumido]})
            }
        })

        let ordenado = consumidosPorTipo.map((con) => {
            let maisConsumidos: Array<{consumido: Produto | Servico, qtd: number}> = []
            con.consumidos.forEach(consu => {
                let oldConsumido = maisConsumidos.find(c => c.consumido == consu)
                if(oldConsumido){
                    oldConsumido.qtd += 1
                }else{
                    maisConsumidos.push({consumido: consu, qtd: 1})
            }
            })
            maisConsumidos.sort((a, b) => b.qtd - a.qtd)
            return {tipo: con.tipo, consumidos: maisConsumidos}
        })

        console.log("\n----- Produtos ou serviços mais consumidos por tipo -----")
        ordenado.forEach((con, i) => {
            console.log(`${i+1} - ${con.tipo}`)
            con.consumidos.forEach(c => {
                console.log(` • ${c.consumido.nome} (${c.qtd} consumidos)`)
            })
        })
        
        console.log(`\n`);
    }
}