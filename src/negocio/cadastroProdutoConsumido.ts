import { empresa } from "../app/main"
import Entrada from "../io/entrada"
import saida from "../io/saida"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import RG from "../modelo/rg"
import Cadastro from "./cadastro"

export default class CadastroProdutosConsumidos extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private produtos: Array<Produto>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        if (this.clientes.length === 0){
            console.log(`\nAinda não há clientes cadastrados!\n`);
            return
        }

        if (this.produtos.length === 0){
            console.log(`\nAinda não há produtos cadastrados!\n`);
            return
        }
        
        console.log(`\nRegistrar compra de produto`);
        let cliente;
        while (cliente === undefined) {
            let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
            if (!cliente) console.log(`Cliente com cpf: '${cpf}' não encontrado. Tente novamente\n`);
        }

        this.produtos.forEach((produto, i) => {
            console.log(` ${i+1}. ${produto.nome} - ${saida.formatCurrency(produto.valor)}`);
        })

        console.log('\n0 - Cancelar')

        let opcao = this.entrada.escolherNumero("Escolha qual produto foi consumido: ", 0, this.produtos.length)
        if(opcao === 0){
            return
        }
        
        cliente.getProdutosConsumidos.push(this.produtos[opcao-1])


        
        console.log(`\nRegistro concluído :)\n`);
    }
}