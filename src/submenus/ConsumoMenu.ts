import Entrada from '../io/entrada';
import Cliente from '../modelo/cliente';
import Empresa from '../modelo/empresa';
import AtualizarCliente from '../negocio/atualizarCliente';
import CadastroCliente from '../negocio/cadastroCliente';
import CadastroProdutosConsumidos from '../negocio/cadastroProdutoConsumido';
import CadastroRg from '../negocio/cadastroRg';
import CadastroTelefone from '../negocio/cadastroTelefone';
import ExcluirCliente from '../negocio/excluirCliente';
import ListagemClientes from '../negocio/listagemClientes';
import ListagemProdutosConsumidos from '../negocio/listagemProdutosConsumidos';
import Submenu from './submenu'

class ConsumoMenu extends Submenu{
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
            console.log('--------------- Consumo ---------------')
            console.log(`1 - Listar produtos consumidos por um cliente`);
            console.log(`2 - Registrar compra de produto`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 6)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagemProdutos = new ListagemProdutosConsumidos(this.empresa.getClientes)
                    listagemProdutos.listar()
                    break
                case 2:
                    let registroProdutos = new CadastroProdutosConsumidos(this.empresa.getClientes, this.empresa.getProdutos)
                    registroProdutos.cadastrar()
                    break
            }
            
        }
    }
    
}

export default ConsumoMenu