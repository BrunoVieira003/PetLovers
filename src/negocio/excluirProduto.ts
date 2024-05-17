import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import saida from "../io/saida"
import { empresa } from "../app/main"

export default class ExcluirProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
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


            let opcao = entrada.escolherNumero("Escolha o produto que deseja excluir: ", 0, this.produtos.length)

            if(opcao == 0){
                execucao = false
                console.log(`\n`)
                break
            }

            let produto = this.produtos[opcao-1]
            
            let confirm = entrada.confirmar(`Tem certeza de que deseja excluir o produto ${produto.nome}?`)
            if(confirm){
                empresa.setProdutos = this.produtos.filter(p => p !== produto)
                console.log(`\nProduto excluído\n`);
                execucao = false
            }
            }
        }
}