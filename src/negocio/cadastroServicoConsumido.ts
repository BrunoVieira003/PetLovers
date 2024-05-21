import { empresa } from "../app/main"
import Entrada from "../io/entrada"
import saida from "../io/saida"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import RG from "../modelo/rg"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServicosConsumidos extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
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

        let opcao = this.entrada.escolherNumero("Escolha qual serviço foi contratado: ", 0, this.servicos.length)
        if(opcao === 0){
            return
        }
        
        cliente.getServicosConsumidos.push(this.servicos[opcao-1])


        
        console.log(`\nRegistro concluído :)\n`);
    }
}