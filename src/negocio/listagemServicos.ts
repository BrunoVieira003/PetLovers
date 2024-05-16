import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Produto>
    constructor(servicos: Array<Produto>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        if (this.servicos.length === 0){
            console.log(`\nAinda não há serviços cadastrados!\n`);
            return
        }
        console.log(`\nLista de serviços:`);
        this.servicos.forEach(servico => {
            console.log(servico.nome);
        })

        console.log(`--------------------------------------`);
        console.log(`\n`);
    }
}