import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class RankingServicosConsumidos extends Listagem {
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

        let servicosConsumidos: Array<{qtd: number, servico: Produto}> = []
        this.clientes.forEach((cliente: Cliente) => {
            cliente.getServicosConsumidos.forEach(servico => {
                let oldProduto = servicosConsumidos.find(e => e.servico == servico)
                if(oldProduto){
                    oldProduto.qtd += 1
                }else{
                    servicosConsumidos.push({qtd: 1, servico: servico})
                }
            });
        })

        let ordenado = servicosConsumidos.sort((a, b) => {
            return b.qtd - a.qtd
        })

        if(ordenado.length == 0){
            console.log("\nNenhum serviço foi contratado ainda\n")
            return
        }

        console.log('--------- Serviços mais contratados ---------')
        ordenado.forEach((ser, i) => {
            console.log(`${i+1} - ${ser.servico.nome} (${ser.qtd})`)
        })
        
        console.log(`\n`);
    }
}