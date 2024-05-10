import Cliente from "../modelo/cliente"
import Entrada from "../io/entrada"
import CPF from "../modelo/cpf"
import Empresa from "../modelo/empresa"
import { empresa } from "../app/main"
import entrada from "../io/entrada"

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        if (this.clientes.length === 0){
            console.log(`\nAinda não há clientes cadastrados!\n`);
            return
        }
        
        var cliente: Cliente | undefined;
        while (cliente === undefined) {
            let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
            if (!cliente) console.log(`Cliente com cpf: '${cpf}' não encontrado. Tente novamente\n`);
        }

        let entrada = new Entrada()
        
        let execucao = true
        while(execucao){
            console.log(`\nOpções:`);
            console.log(`1 - Nome`);
            console.log(`2 - Nome social`);
            console.log(`3 - CPF`);
            console.log(`4 - Data de emissão do CPF`);
            console.log(`\n0 - Voltar`);
    
            let opcao = entrada.escolherNumero('Escolha a informação que deseja alterar: ', 0, 4);
            switch (opcao) {
                case 1:
                    let nome = entrada.receberTexto('Digite um novo nome para o cliente: ')
                    cliente.nome = nome
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 2:
                    let nomeSocial = entrada.receberTexto('Digite um novo nome social para o cliente: ')
                    cliente.nomeSocial = nomeSocial
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 3:
                    let cpf = entrada.receberTexto('Digite o número do cpf do cliente: ')
                    let outroCliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
                    if (outroCliente){
                        console.log(`\nCliente ${outroCliente.nome} já possui o cpf ${cpf}`);
                    }else{
                        cliente.setCpf = new CPF(cpf, cliente.getCpf.getDataEmissao)
                        console.log('\nInformação alterada com sucesso');
                    }
                    break;
                case 4:
                    let dataEmissao = entrada.receberData('Digite a data de emissão do cpf do cliente')
                    cliente.setCpf = new CPF(cliente.getCpf.getValor, dataEmissao)
                    console.log('\nInformação alterada com sucesso');
                    break;
                    
                case 0:
                    execucao = false
                    console.log(`\n`)
                    break;
            }
        }
        
        
        
    }
}