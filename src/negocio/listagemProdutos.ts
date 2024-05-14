import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(clientes: Array<Produto>) {
        super()
        this.produtos = clientes
    }
    public listar(): void {
        if (this.produtos.length === 0){
            console.log(`\nAinda não há produtos cadastrados!\n`);
            return
        }
        console.log(`\nLista de produtos:`);
        this.produtos.forEach(produto => {
            console.log(produto.nome);
        })

        console.log(`--------------------------------------`);
        console.log(`\n`);
    }
}