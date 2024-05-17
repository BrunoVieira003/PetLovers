import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import AtualizarCliente from '../negocio/atualizarCliente';
import CadastroCliente from '../negocio/cadastroCliente';
import CadastroProduto from '../negocio/cadastroProduto';
import CadastroRg from '../negocio/cadastroRg';
import CadastroTelefone from '../negocio/cadastroTelefone';
import ExcluirCliente from '../negocio/excluirCliente';
import ListagemClientes from '../negocio/listagemClientes';
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
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 6)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagem = new ListagemProdutos(this.empresa.getClientes)
                    listagem.listar()
                    break
                case 2:
                    let cadastro = new CadastroProduto(this.empresa.getClientes)
                    cadastro.cadastrar()
                    break
            }
            
        }
    }
    
}

export default ProdutoMenu