import Entrada from "../io/entrada"
import saida from "../io/saida"
import Servico from "../modelo/servico"

export default class AtualizarServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(produtos: Array<Servico>) {
        this.servicos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        if (this.servicos.length === 0){
            console.log(`\nAinda não há serviços cadastrados!\n`);
            return
        }

        let entrada = new Entrada()
        
        let execucao = true
        while(execucao){
            
            // Lista produtos
            this.servicos.forEach((v, i) => {
                console.log(` ${i+1}. ${v.nome} - ${saida.formatCurrency(v.valor)}`)
            })

            console.log('\n0 - Voltar')


            let opcao = entrada.escolherNumero("Escolha o serviço que deseja alterar: ", 0, this.servicos.length)

            if(opcao == 0){
                execucao = false
                console.log(`\n`)
                break
            }

            let servico = this.servicos[opcao-1]
            
            console.log(`\nOpções:`);
            console.log(`1 - Nome`);
            console.log(`2 - Valor`);
            console.log(`\n0 - Voltar`);
    
            let opcaoInfo = entrada.escolherNumero('Escolha a informação que deseja alterar: ', 0, 4);
            switch (opcaoInfo) {
                case 1:
                    let nome = entrada.receberTexto('Digite um novo nome para o serviço: ')
                    servico.nome = nome
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 2:
                    let valor = entrada.receberNumero('Digite o novo valor do serviço: ')
                    servico.valor = valor
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 0:
                    console.log(`\n`)
                    break;
                }
            }
        }
}