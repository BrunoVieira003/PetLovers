import Cliente from "../modelo/cliente";
import Venda from "../modelo/venda";
import Listagem from "./listagem";

export default class RankingClientePorConsumo extends Listagem {
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

        let clientesMaisConsumiram: Array<{cliente: Cliente, qtd: number}> = []
        this.vendas.forEach(vend => {
            let oldCliente = clientesMaisConsumiram.find(cli => cli.cliente == vend.cliente)
            if(oldCliente){
                oldCliente.qtd += 1
            }else{
                clientesMaisConsumiram.push({cliente: vend.cliente, qtd: 1})
            }
        })

        let ordenado = clientesMaisConsumiram.sort((a, b) => {
            return b.qtd - a.qtd
        })

        console.log("\n----- Clientes que mais consumiram -----")
        ordenado.forEach((cli, i) => {
            if(i+1 <= 10){
                console.log(`${i+1} - ${cli.cliente.nome} (${cli.qtd} items consumidos)`)
            }
        })
        
        console.log(`\n`);
    }
}