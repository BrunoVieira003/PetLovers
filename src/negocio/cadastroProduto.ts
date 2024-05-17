import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do novo produto: ")
        let valor = this.entrada.receberNumero("Digite o valor do novo produto: ")
        const novoProduto = new Produto()
        novoProduto.nome = nome
        novoProduto.valor = valor

        this.produtos.push(novoProduto)

        console.log(`\nCadastro concluído :)\n`);
    }
        



        
    
    }