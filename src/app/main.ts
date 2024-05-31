import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Seeder from "../seeder/seeder";
import ClienteMenu from "../submenus/ClienteMenu";
import ConsumoMenu from "../submenus/ConsumoMenu";
import PetMenu from "../submenus/PetMenu";
import ProdutoMenu from "../submenus/ProdutoMenu";
import RankingMenu from "../submenus/RankingsMenu";
import ServicoMenu from "../submenus/ServicoMenu";

console.clear()
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
var empresa = new Empresa()

empresa.setClientes = Seeder.gerarClientes()
empresa.setProdutos = Seeder.gerarProdutos()
empresa.setServicos = Seeder.gerarServicos()

let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log('1 - Clientes')
    console.log('2 - Pets')
    console.log(`3 - Produtos`);
    console.log(`4 - Serviços`);
    console.log(`5 - Consumo`);
    console.log(`6 - Ranking`);
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
            break
        case 4:
            let servicoMenu = new ServicoMenu(empresa)
            servicoMenu.open()
            break
        case 5:
            let consumoMenu = new ConsumoMenu(empresa)
            consumoMenu.open()
            break
        case 6:
            let rankingMenu = new RankingMenu(empresa)
            rankingMenu.open()
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