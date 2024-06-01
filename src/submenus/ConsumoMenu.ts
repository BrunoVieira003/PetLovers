import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import CadastroProdutosConsumidos from '../negocio/cadastroProdutoConsumido';
import CadastroServicosConsumidos from '../negocio/cadastroServicoConsumido';
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
            console.log(`1 - Registrar compra de produto`);
            console.log(`2 - Registrar contratação de serviços`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 4)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let registroProdutos = new CadastroProdutosConsumidos(this.empresa)
                    registroProdutos.cadastrar()
                    break
                case 2:
                    let registroServicos = new CadastroServicosConsumidos(this.empresa)
                    registroServicos.cadastrar()
                    break
        }
            
        }
    }
    
}

export default ConsumoMenu