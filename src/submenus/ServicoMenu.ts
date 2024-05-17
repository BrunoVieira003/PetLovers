import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import CadastroServico from '../negocio/cadastroServico';
import ListagemServicos from '../negocio/listagemServicos';
import Submenu from './submenu'

class ServicoMenu extends Submenu{
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
            console.log(`1 - Listar todos os serviços`);
            console.log(`2 - Cadastrar serviço`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 6)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagem = new ListagemServicos(this.empresa.getClientes)
                    listagem.listar()
                    break
                case 2:
                    let cadastro = new CadastroServico(this.empresa.getClientes)
                    cadastro.cadastrar()
                    break
            }
            
        }
    }
    
}

export default ServicoMenu