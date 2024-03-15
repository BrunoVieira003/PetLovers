import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os Pets:`);
        this.clientes.forEach(cliente => {
            if (cliente.getPets.length !== 0) {
                console.log(cliente.nome);
                cliente.getPets.forEach(pet => {
                    console.log(`• ${pet.getNome}`);
                })
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}