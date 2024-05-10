import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import RG from "../modelo/rg"
import Cadastro from "./cadastro"

export default class CadastroRg extends Cadastro {
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
        
        console.log(`\nAdicionar novo rg para o cliente`);
        let cliente;
        while (cliente === undefined) {
            let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
            if (!cliente) console.log(`Cliente com cpf: '${cpf}' não encontrado. Tente novamente\n`);
        }

            
            
        let valor = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataEmissao = this.entrada.receberData(`Por favor informe a data de emissão do rg`);
        let rg = new RG(valor, dataEmissao);

        cliente.getRgs.push(rg)
        



        
        console.log(`\nCadastro concluído :)\n`);
    }
}