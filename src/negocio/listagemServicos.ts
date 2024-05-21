import saida from "../io/saida";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
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
            console.log(` • ${servico.nome} - ${saida.formatCurrency(servico.valor)}`);
        })
        console.log(`\n`);
    }
}