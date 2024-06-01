import { empresa } from "../app/main"
import Entrada from "../io/entrada"
import saida from "../io/saida"
import Cliente from "../modelo/cliente"
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto"
import RG from "../modelo/rg"
import Venda from "../modelo/venda"
import Cadastro from "./cadastro"

export default class CadastroProdutosConsumidos extends Cadastro {
    private empresa: Empresa
    private clientes: Array<Cliente>
    private entrada: Entrada
    private produtos: Array<Produto>
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
        this.clientes = empresa.getClientes
        this.produtos = empresa.getProdutos
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
        
        let opcaoProduto = this.entrada.escolherNumero("Escolha qual produto foi consumido: ", 0, this.produtos.length)
        if(opcaoProduto === 0){
            return
        }
        let produtoEscolhido = this.produtos[opcaoProduto-1]

        
        if(cliente.getPets.length === 0){
            console.log(`\n${cliente.nome} ainda não tem pets cadastrados!\n`);
            return
        }

        cliente.getPets.forEach((pet, i) => {
            console.log(` ${i+1}. ${pet.getNome} - ${pet.getTipo}(${pet.getRaca})`);
        })
        
        console.log('\n0 - Cancelar')
        let opcaoPet = this.entrada.escolherNumero("Escolha qual para qual pet é este produto: ", 0, cliente.getPets.length)
        if(opcaoPet === 0){
            return
        }
        let petEscolhido = cliente.getPets[opcaoPet-1]
        
        
        empresa.getVendas.push(new Venda(cliente, petEscolhido, produtoEscolhido))


        
        console.log(`\nRegistro concluído :)\n`);
    }
}