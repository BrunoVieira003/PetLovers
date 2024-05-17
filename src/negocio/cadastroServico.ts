import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do novo serviço: ")
        let valor = this.entrada.receberNumero("Digite o valor do novo serviço: ")
        const novoServico = new Servico()
        novoServico.nome = nome
        novoServico.valor = valor

        this.servicos.push(novoServico)

        console.log(`\nCadastro concluído :)\n`);
    }
        



        
    
    }