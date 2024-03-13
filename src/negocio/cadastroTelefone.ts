import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroTelefone extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        if (this.clientes.length === 0){
            console.log(`\nAinda não há clientes cadastrados!\n`);
            return
        }
        
        console.log(`\nAdicionar novo telefone para o cliente`);
        let cliente;
        while (cliente === undefined) {
            let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
            if (!cliente) console.log(`Cliente com cpf: '${cpf}' não encontrado. Tente novamente\n`);
        }

            
            
        let ddd = this.entrada.receberTexto(`Por favor informe o número de ddd: `);
        let numero = this.entrada.receberTexto(`Por favor informe o número de telefone: `);

        let telefone = new Telefone(ddd, numero)

        cliente.getTelefones.push(telefone)
        



        
        console.log(`\nCadastro concluído :)\n`);
    }
}