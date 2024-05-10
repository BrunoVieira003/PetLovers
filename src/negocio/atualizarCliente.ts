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
            console.log(`\n0 - Voltar`);
    
            let opcao = entrada.escolherNumero('Escolha a informação que deseja alterar: ', 0, 2);
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
                    
                case 0:
                    execucao = false
                    console.log(`\n`)
                    break;
            }
        }
        
        
        
    }
}