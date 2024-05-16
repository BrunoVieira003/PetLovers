import Entrada from '../io/entrada';
import Cliente from '../modelo/cliente';
import Empresa from '../modelo/empresa';
import AtualizarCliente from '../negocio/atualizarCliente';
import AtualizarPet from '../negocio/atualizarPet';
import CadastroCliente from '../negocio/cadastroCliente';
import CadastroPet from '../negocio/cadastroPet';
import CadastroRg from '../negocio/cadastroRg';
import CadastroTelefone from '../negocio/cadastroTelefone';
import ExcluirCliente from '../negocio/excluirCliente';
import ExcluirPet from '../negocio/excluirPet';
import ListagemClientes from '../negocio/listagemClientes';
import ListagemPets from '../negocio/listagemPets';
import Submenu from './submenu'

class PetMenu extends Submenu{
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
            console.log('--------------- Pets ---------------')
            console.log(`1 - Listar todos os pets`);
            console.log(`2 - Adicionar novo Pet para cliente`);
            console.log(`3 - Atualizar pets`);
            console.log(`4 - Excluir pet`);
            console.log("\n0 - Voltar")

            opcao = entrada.escolherNumero("Escolha uma opção: ", 0, 6)
            if(opcao === 0) break

            switch(opcao){
                case 1:
                    let listagem = new ListagemPets(this.empresa.getClientes)
                    listagem.listar()
                    break
                case 2:
                    let cadastro = new CadastroPet(this.empresa.getClientes)
                    cadastro.cadastrar()
                    break
                case 3:
                    let atualizar = new AtualizarPet(this.empresa.getClientes)
                    atualizar.atualizar()
                    break;
                case 4:
                    let excluir = new ExcluirPet(this.empresa.getClientes)
                    excluir.excluir()
                    break;
            }
            
        }
    }
    
}

export default PetMenu