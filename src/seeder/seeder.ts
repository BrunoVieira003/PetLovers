import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Random from "../util/random";

export default class Seeder{
    public static inserirClientes(empresa: Empresa){

        let nomes = [
            "João",
            "Carlos",
            "Mateus", 
            "Márcia", 
            "Fred", 
            "Wanderson", 
            "Claudio",
            "Jéssica",
            "Eliane",
            "Jorge"
        ]

        let clientes = nomes.map((nome: string, index: number) => {
            let novoCPF = new CPF(`123${index}`, Random.gerarData())
            let novoCliente = new Cliente(nome, nome, novoCPF)

            novoCliente.getTelefones.push(Random.gerarTelefone())
            novoCliente.getRgs.push(Random.gerarRG())

            let novoPet = Random.gerarPet()
            novoCliente.getPets.push(novoPet)

            return novoCliente

        })

        empresa.setClientes = [...empresa.getClientes, ...clientes]
    }

    public static inserirProdutos(empresa: Empresa){
        let produtoNomes = [
            "Ração",
            "Brinquedo",
            "Caminha",
            "Coleira",
            "Caixa de Areia",
            "Shampoo",
            "Comedouro",
            "Bebedouro",
            "Escova de Pelos",
            "Tapete Higiênico"
        ]

        let produtos: Array<Produto> = []
        produtoNomes.forEach((nomeP) => {
            let novoProduto = new Produto()
            novoProduto.nome = nomeP
            novoProduto.valor = Random.gerarNumero(10, 200)
            produtos.push(novoProduto)
        })

        empresa.setProdutos = [...empresa.getProdutos, ...produtos]
    }

    public static inserirServicos(empresa: Empresa){
        let servicoNomes = [
            "Banho e Tosa",
            "Consulta Veterinária",
            "Vacinação",
            "Hospedagem",
            "Adestramento",
            "Passeio",
            "Transporte",
            "Creche",
            "Tosa Higiênica",
            "Hidratação de Pelos"
        ]

        let servicos: Array<Servico> = []
        servicoNomes.forEach((nomeS) => {
            let novoServico = new Servico()
            novoServico.nome = nomeS
            novoServico.valor = Random.gerarNumero(10, 200)
            servicos.push(novoServico)
        })

        empresa.setServicos = [...empresa.getServicos, ...servicos]
    }
}