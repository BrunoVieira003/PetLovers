import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarPet from "../negocio/atualizarPet";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroRg from "../negocio/cadastroRg";
import CadastroServico from "../negocio/cadastroServico";
import CadastroTelefone from "../negocio/cadastroTelefone";
import ExcluirCliente from "../negocio/excluirCliente";
import ExcluirPet from "../negocio/excluirPet";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import ClienteMenu from "../submenus/ClienteMenu";
import PetMenu from "../submenus/PetMenu";

console.clear()
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
var empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log('1 - Clientes')
    console.log('2 - Pets')
    console.log(`11 - Listar produtos`);
    console.log(`12 - Adicionar novo produto`);
    console.log(`13 - Listar serviços`);
    console.log(`14 - Adicionar novo serviço`);
    console.log(`\n0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let clienteMenu = new ClienteMenu(empresa)
            clienteMenu.open()
            break;
        case 2:
            let petMenu = new PetMenu(empresa)
            petMenu.open()
            break;
        case 11:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 12:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break
        case 13:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 14:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}

export {empresa}