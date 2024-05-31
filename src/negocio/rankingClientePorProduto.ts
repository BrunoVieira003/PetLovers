import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class RankingClientesPorProduto extends Listagem {
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

        let ordenado = this.clientes.sort((a, b) => {
            return b.getProdutosConsumidos.length - a.getProdutosConsumidos.length
        })

        console.log('--------- Top 10 ---------')
        ordenado.forEach((cli, i) => {
            if(i+1 <= 10){
                console.log(`${i+1} - ${cli.nome}`)
            }
        })
        
        console.log(`\n`);
    }
}