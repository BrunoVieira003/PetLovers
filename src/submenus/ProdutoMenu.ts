import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import AtualizarProduto from '../negocio/atualizarProduto';
import CadastroProduto from '../negocio/cadastroProduto';
import ExcluirProduto from '../negocio/excluirProduto';
import ListagemProdutos from '../negocio/listagemProdutos';
import Submenu from './submenu'

class ProdutoMenu extends Submenu{
    empresa: Empresa
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    open(): void {
        let opcao
        let entrada = new Entrada()
        console.clear()
        while(true){
            console.log('--------------- Produtos ---------------')
            console.log(`1 - Listar todos os produtos`);
            console.log(`2 - Cadastrar produto`);
            console.log(`3 - Atualizar produto`);
            console.log(`4 - Excluir produto`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 4)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagem = new ListagemProdutos(this.empresa.getProdutos)
                    listagem.listar()
                    break
                case 2:
                    let cadastro = new CadastroProduto(this.empresa.getProdutos)
                    cadastro.cadastrar()
                    break
                case 3:
                    let atualizar = new AtualizarProduto(this.empresa.getProdutos)
                    atualizar.atualizar()
                    break
                case 4:
                    let excluir = new ExcluirProduto(this.empresa.getProdutos)
                    excluir.excluir()
                    break
            }
            
        }
    }
    
}

export default ProdutoMenu