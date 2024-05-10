import Cliente from "../modelo/cliente"
import Entrada from "../io/entrada"
import CPF from "../modelo/cpf"
import Empresa from "../modelo/empresa"
import { empresa } from "../app/main"
import entrada from "../io/entrada"

export default class ExcluirPet {
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

            let opcao = entrada.escolherNumero("Escolha o pet que deseja excluir: ", 0, cliente.getPets.length)

            if(opcao == 0){
                execucao = false
                console.log(`\n`)
                break
            }

            let pet = cliente.getPets[opcao-1]
            
            let confirm = this.entrada.confirmar(`Tem certeza de que deseja excluir o pet ${pet.getNome}?`)
            if (confirm) {
            cliente.setPets = cliente.getPets.filter(p => p !== pet)
            console.log(`\nPet excluído\n`);
            
            }else console.log(`\nOperação cancelada!\n`);
    }
}
}