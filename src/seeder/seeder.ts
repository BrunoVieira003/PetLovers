import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Random from "../util/random"

export default class Seeder{
    public static gerarClientes() : Array<Cliente>{

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

        return clientes
    } 
}