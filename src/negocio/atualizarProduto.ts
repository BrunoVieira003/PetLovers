import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import saida from "../io/saida"

export default class AtualizarProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        if (this.produtos.length === 0){
            console.log(`\nAinda não há produtos cadastrados!\n`);
            return
        }

        let entrada = new Entrada()
        
        let execucao = true
        while(execucao){
            
            // Lista produtos
            this.produtos.forEach((v, i) => {
                console.log(` ${i+1}. ${v.nome} - ${saida.formatCurrency(v.valor)}`)
            })

            console.log('\n0 - Voltar')


            let opcao = entrada.escolherNumero("Escolha o produto que deseja alterar: ", 0, this.produtos.length)

            if(opcao == 0){
                execucao = false
                console.log(`\n`)
                break
            }

            let produto = this.produtos[opcao-1]
            
            console.log(`\nOpções:`);
            console.log(`1 - Nome`);
            console.log(`2 - Valor`);
            console.log(`\n0 - Voltar`);
    
            let opcaoInfo = entrada.escolherNumero('Escolha a informação que deseja alterar: ', 0, 4);
            switch (opcaoInfo) {
                case 1:
                    let nome = entrada.receberTexto('Digite um novo nome para o produto: ')
                    produto.nome = nome
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 2:
                    let valor = entrada.receberNumero('Digite o novo valor do produto: ')
                    produto.valor = valor
                    console.log('\nInformação alterada com sucesso');
                    break;
                case 0:
                    console.log(`\n`)
                    break;
                }
            }
        }
}