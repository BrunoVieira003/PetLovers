import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import CadastroProdutosConsumidos from '../negocio/cadastroProdutoConsumido';
import CadastroServicosConsumidos from '../negocio/cadastroServicoConsumido';
import ListagemProdutosConsumidos from '../negocio/listagemProdutosConsumidos';
import ListagemServicosConsumidos from '../negocio/listagemServicosConsumidos';
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
            console.log(`1 - Produtos consumidos por um cliente`);
            console.log(`2 - Registrar compra de produto`);
            console.log(`3 - Serviços contratados por um cliente`);
            console.log(`4 - Registrar contratação de serviços`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 4)
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
                case 3:
                    let listagemServicos = new ListagemServicosConsumidos(this.empresa.getClientes)
                    listagemServicos.listar()
                    break
                case 4:
                    let registroServicos = new CadastroServicosConsumidos(this.empresa.getClientes, this.empresa.getServicos)
                    registroServicos.cadastrar()
                    break
        }
            
        }
    }
    
}

export default ConsumoMenu