import Entrada from '../io/entrada';
import Empresa from '../modelo/empresa';
import AtualizarServico from '../negocio/atualizarServico';
import CadastroServico from '../negocio/cadastroServico';
import ExcluirServico from '../negocio/excluirServico';
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
            console.log('--------------- Serviços ---------------')
            console.log(`1 - Listar todos os serviços`);
            console.log(`2 - Cadastrar serviço`);
            console.log(`3 - Atualizar serviço`);
            console.log(`4 - Excluir serviço`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 4)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagem = new ListagemServicos(this.empresa.getServicos)
                    listagem.listar()
                    break
                case 2:
                    let cadastro = new CadastroServico(this.empresa.getServicos)
                    cadastro.cadastrar()
                    break
                case 3:
                    let atualizar = new AtualizarServico(this.empresa.getServicos)
                    atualizar.atualizar()
                    break
                case 4:
                    let excluir = new ExcluirServico(this.empresa.getServicos)
                    excluir.excluir()
                    break
            }
            
        }
    }
    
}

export default ServicoMenu