import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import ClienteMenu from "../submenus/ClienteMenu";
import PetMenu from "../submenus/PetMenu";
import ProdutoMenu from "../submenus/ProdutoMenu";

console.clear()
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
var empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log('1 - Clientes')
    console.log('2 - Pets')
    console.log(`3 - Produtos`);
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
        case 3:
            let produtoMenu = new ProdutoMenu(empresa)
            produtoMenu.open()
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