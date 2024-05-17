import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import saida from "../io/saida"
import { empresa } from "../app/main"
import Servico from "../modelo/servico"

export default class ExcluirServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(produtos: Array<Servico>) {
        this.servicos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
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


            let opcao = entrada.escolherNumero("Escolha o servico que deseja excluir: ", 0, this.servicos.length)

            if(opcao == 0){
                execucao = false
                console.log(`\n`)
                break
            }

            let servico = this.servicos[opcao-1]
            
            let confirm = entrada.confirmar(`Tem certeza de que deseja excluir o serviço ${servico.nome}?`)
            if(confirm){
                empresa.setServicos = this.servicos.filter(p => p !== servico)
                console.log(`\nProduto excluído\n`);
                execucao = false
            }
            }
        }
}