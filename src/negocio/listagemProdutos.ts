import saida from "../io/saida";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        if (this.produtos.length === 0){
            console.log(`\nAinda não há produtos cadastrados!\n`);
            return
        }
        console.log(`\nLista de produtos:`);
        this.produtos.forEach(produto => {
            console.log(` • ${produto.nome} - ${saida.formatCurrency(produto.valor)}`);
        })

        console.log(`--------------------------------------`);
        console.log(`\n`);
    }
}