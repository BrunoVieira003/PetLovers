import Cliente from "../modelo/cliente"
import Entrada from "../io/entrada"
import CPF from "../modelo/cpf"
import Empresa from "../modelo/empresa"
import { empresa } from "../app/main"

export default class ExcluirCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
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

        let confirm = this.entrada.confirmar(`Tem certeza de que deseja excluir o cliente ${cliente.nomeSocial}?`)
        if (confirm) {
            empresa.setClientes = this.clientes.filter(cli => cli.getCpf.getValor !== cliente?.getCpf.getValor)
            console.log(`\nCliente excluído\n`);
            
        }else console.log(`\nOperação cancelada!\n`);
        
    }
}