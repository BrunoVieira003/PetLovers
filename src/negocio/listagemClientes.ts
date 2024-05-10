import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        if (this.clientes.length === 0){
            console.log(`\nAinda não há clientes cadastrados!\n`);
            return
        }
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ${cliente.getCpf.getValor} - emitido em ${cliente.getCpf.dataEmissaoFormatada}`);
            if (cliente.getRgs.length !== 0) {
                console.log(`Rgs:`);
                cliente.getRgs.forEach((e) => {console.log(` • ${e.getValor} - emitido em ${e.dataEmissaoFormatada}`)}
                )
            }
            if (cliente.getTelefones.length !== 0) {
                console.log(`Telefones:`);
                cliente.getTelefones.forEach((e) => {console.log(` • (${e.getDdd}) ${e.getNumero}`)}
                )
                console.log(`--------------------------------------`);
            }
        });
        console.log(`\n`);
    }
}