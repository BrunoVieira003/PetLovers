import Saida from "../io/saida";
import Cliente from "../modelo/cliente";
import Venda from "../modelo/venda";
import Listagem from "./listagem";

export default class RankingClientePorValor extends Listagem {
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

        let clientesMaisConsumiram: Array<{cliente: Cliente, valor: number}> = []
        this.vendas.forEach(vend => {
            let oldCliente = clientesMaisConsumiram.find(cli => cli.cliente == vend.cliente)
            if(oldCliente){
                oldCliente.valor += vend.consumido.valor
            }else{
                clientesMaisConsumiram.push({cliente: vend.cliente, valor: vend.consumido.valor})
            }
        })

        let ordenado = clientesMaisConsumiram.sort((a, b) => {
            return b.valor - a.valor
        })

        console.log("\n----- Clientes que mais consumiram em valor -----")
        ordenado.forEach((cli, i) => {
            if(i+1 <= 10){
                console.log(`${i+1} - ${cli.cliente.nome} (${Saida.formatCurrency(cli.valor)} gasto no total)`)
            }
        })
        
        console.log(`\n`);
    }
}