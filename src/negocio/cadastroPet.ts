import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Pet from "../modelo/pet"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
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
        
        console.log(`\nAdicionar novo Pet para o cliente`);
        let cliente;
        while (cliente === undefined) {
            let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
            
            if (!cliente) console.log(`Cliente com cpf: '${cpf}' não encontrado. Tente novamente\n`);
        }

            
            
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Pet: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do Pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe a raça do Pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do Pet: `);

        let pet = new Pet(nome, raca, genero, tipo)

        cliente.getPets.push(pet)
        



        
        console.log(`\nCadastro concluído :)\n`);
    }
}