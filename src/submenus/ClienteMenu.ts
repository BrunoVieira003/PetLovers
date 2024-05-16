import Entrada from '../io/entrada';
import Cliente from '../modelo/cliente';
import Empresa from '../modelo/empresa';
import AtualizarCliente from '../negocio/atualizarCliente';
import CadastroCliente from '../negocio/cadastroCliente';
import CadastroRg from '../negocio/cadastroRg';
import CadastroTelefone from '../negocio/cadastroTelefone';
import ExcluirCliente from '../negocio/excluirCliente';
import ListagemClientes from '../negocio/listagemClientes';
import Submenu from './submenu'

class ClienteMenu extends Submenu{
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
            console.log('--------------- Clientes ---------------')
            console.log(`1 - Listar todos os clientes`);
            console.log(`2 - Cadastrar cliente`);
            console.log(`3 - Adicionar novo rg para cliente`);
            console.log(`4 - Adicionar novo telefone para cliente`);
            console.log(`5 - Atualizar cliente`);
            console.log(`6 - Excluir cliente`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 6)
            if(opcao === 0) {
                console.clear()
                break
            }

            switch(opcao){
                case 1:
                    let listagem = new ListagemClientes(this.empresa.getClientes)
                    listagem.listar()
                    break
                case 2:
                    let cadastro = new CadastroCliente(this.empresa.getClientes)
                    cadastro.cadastrar()
                    break
                case 3:
                    let cadastroRg = new CadastroRg(this.empresa.getClientes)
                    cadastroRg.cadastrar()
                    break;
                case 4:
                    let cadastroTelefone = new CadastroTelefone(this.empresa.getClientes)
                    cadastroTelefone.cadastrar()
                    break;
                case 5:
                    let atualizar = new AtualizarCliente(this.empresa.getClientes)
                    atualizar.atualizar()
                    break;
                case 6:
                    let excluir = new ExcluirCliente(this.empresa.getClientes)
                    excluir.excluir()
                    break;
            }
            
        }
    }
    
}

export default ClienteMenu