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

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
var empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log('1 - Clientes')
    console.log(`5 - Adicionar novo Pet para cliente`);
    console.log(`6 - Listar todos os Pets`);
    console.log(`7 - Atualizar cliente`);
    console.log(`8 - Excluir cliente`);
    console.log(`9 - Atualizar pets`);
    console.log(`10 - Excluir pet`);
    console.log(`11 - Listar produtos`);
    console.log(`12 - Adicionar novo produto`);
    console.log(`13 - Listar serviços`);
    console.log(`14 - Adicionar novo serviço`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let clienteMenu = new ClienteMenu(empresa)
            clienteMenu.open()
            break;
        case 5:
            let cadastroPet = new CadastroPet(empresa.getClientes)
            cadastroPet.cadastrar()
            break;
        case 6:
            let listagemPets = new ListagemPets(empresa.getClientes)
            listagemPets.listar()
            break;
        case 7:
            let atualizarCliente = new AtualizarCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break;
        case 8:
            let excluirCliente = new ExcluirCliente(empresa.getClientes)
            excluirCliente.excluir()
            break;
        case 9:
            let atualizarPet = new AtualizarPet(empresa.getClientes)
            atualizarPet.atualizar()
            break
        case 10:
            let excluirPet = new ExcluirPet(empresa.getClientes)
            excluirPet.atualizar()
            break
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