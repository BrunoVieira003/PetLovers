import { empresa } from "../app/main"
import Entrada from "../io/entrada"
import saida from "../io/saida"
import Cliente from "../modelo/cliente"
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto"
import RG from "../modelo/rg"
import Servico from "../modelo/servico"
import Venda from "../modelo/venda"
import Cadastro from "./cadastro"

export default class CadastroServicosConsumidos extends Cadastro {
    private empresa: Empresa
    private clientes: Array<Cliente>
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
        this.clientes = empresa.getClientes
        this.servicos = empresa.getServicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        if (this.clientes.length === 0){
            console.log(`\nAinda não há clientes cadastrados!\n`);
            return
        }

        if (this.servicos.length === 0){
            console.log(`\nAinda não há serviços cadastrados!\n`);
            return
        }
        
        console.log(`\nRegistrar contratação de serviço`);
        let cliente;
        while (cliente === undefined) {
            let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
            if (!cliente) console.log(`Cliente com cpf: '${cpf}' não encontrado. Tente novamente\n`);
        }

        
        this.servicos.forEach((servico, i) => {
            console.log(` ${i+1}. ${servico.nome} - ${saida.formatCurrency(servico.valor)}`);
        })
        
        console.log('\n0 - Cancelar')
        
        let opcaoServico = this.entrada.escolherNumero("Escolha qual serviço foi contratado: ", 0, this.servicos.length)
        if(opcaoServico === 0){
            return
        }
        let servicoEscolhido = this.servicos[opcaoServico-1]

        
        if(cliente.getPets.length === 0){
            console.log(`\n${cliente.nome} ainda não tem pets cadastrados!\n`);
            return
        }

        cliente.getPets.forEach((pet, i) => {
            console.log(` ${i+1}. ${pet.getNome} - ${pet.getTipo}(${pet.getRaca})`);
        })
        
        console.log('\n0 - Cancelar')
        let opcaoPet = this.entrada.escolherNumero("Escolha qual para qual pet é este serviço: ", 0, cliente.getPets.length)
        if(opcaoPet === 0){
            return
        }
        let petEscolhido = cliente.getPets[opcaoPet-1]
        
        
        empresa.getVendas.push(new Venda(cliente, petEscolhido, servicoEscolhido))


        
        console.log(`\nRegistro concluído :)\n`);
    }
}