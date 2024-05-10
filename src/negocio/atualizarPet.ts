import Cliente from "../modelo/cliente"
import Entrada from "../io/entrada"
import CPF from "../modelo/cpf"
import Empresa from "../modelo/empresa"
import { empresa } from "../app/main"
import entrada from "../io/entrada"

export default class AtualizarPet {
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
            
            console.log(`\nPets de ${cliente.nome}`);
            cliente.getPets.forEach((v, i) => {
                console.log(`${i+1} - ${v.getNome}`)
            })

            console.log(`\n0 - Cancelar`);

            let opcao = entrada.escolherNumero("Escolha o pet que deseja alterar: ", 0, cliente.getPets.length)

            if(opcao == 0){
                execucao = false
                console.log(`\n`)
                break
            }

            let pet = cliente.getPets[opcao-1]
            
            console.log(`\nOpções:`);
            console.log(`1 - Nome`);
            console.log(`2 - Raça`);
            console.log(`3 - Gênero`);
            console.log(`4 - Tipo`);
            console.log(`\n0 - Voltar`);
    
            let opcaoInfo = entrada.escolherNumero('Escolha a informação que deseja alterar: ', 0, 4);
            switch (opcaoInfo) {
                case 1:
                    let nome = entrada.receberTexto('Digite um novo nome para o pet: ')
                    pet.setNome = nome
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 2:
                    let raca = entrada.receberTexto('Digite o nome da raça do pet: ')
                    pet.setRaca = raca
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 3:
                    let genero = entrada.receberTexto('Digite o genero do pet: ')
                    pet.setGenero = genero
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 4:
                    let tipo = entrada.receberTexto('Digite o tipo do pet: ')
                    pet.setTipo = tipo
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 0:
                    console.log(`\n`)
                    break;
                }
            }
        }
}