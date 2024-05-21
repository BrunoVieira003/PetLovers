import Entrada from "../io/entrada";
import saida from "../io/saida";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdutosConsumidos extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada;
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        if (this.clientes.length === 0){
            console.log(`\nAinda não há clientes cadastrados`);
            return
        }
        let cliente;
        while (cliente === undefined) {
            let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
            if (!cliente) console.log(`Cliente com cpf: '${cpf}' não encontrado. Tente novamente\n`);
        }

        if(cliente.getProdutosConsumidos.length === 0){
            console.log('\nEste cliente ainda não consumiu nenhum produto\n')
            return
        }

        console.log(`\nProdutos consumidos por ${cliente.nome}:`);
        cliente.getProdutosConsumidos.forEach(produto => {
            console.log(` • ${produto.nome} - ${saida.formatCurrency(produto.valor)}`);
        })
        
        console.log(`\n`);
    }
}