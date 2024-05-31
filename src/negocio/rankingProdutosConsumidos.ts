import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class RankingProdutosConsumidos extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        if (this.clientes.length === 0){
            console.log(`\nAinda não há clientes cadastrados`);
            return
        }

        let produtosConsumidos: Array<{qtd: number, produto: Produto}> = []
        this.clientes.forEach((cliente: Cliente) => {
            cliente.getProdutosConsumidos.forEach(produto => {
                let oldProduto = produtosConsumidos.find(e => e.produto == produto)
                if(oldProduto){
                    oldProduto.qtd += 1
                }else{
                    produtosConsumidos.push({qtd: 1, produto: produto})
                }
            });
        })

        let ordenado = produtosConsumidos.sort((a, b) => {
            return b.qtd - a.qtd
        })

        if(ordenado.length == 0){
            console.log("\nNenhum produto foi consumido ainda\n")
            return
        }

        console.log('--------- Top 10 ---------')
        ordenado.forEach((pro, i) => {
            if(i+1 <= 10){
                console.log(`${i+1} - ${pro.produto.nome} (${pro.qtd})`)
            }
        })
        
        console.log(`\n`);
    }
}