import { Cliente } from "./Cliente"
import { Produto } from "./Produto"
import { Servico } from "./Servico"

export default class Empresa{
    public clientesCounter = 1
    public petsCounter = 1
    public servicosCounter = 1
    public produtosCounter = 1
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private produtos: Array<Produto>

    constructor(){
        this.clientes = []
        this.servicos = []
        this.produtos = []
    }
    public get getClientes(){
        return this.clientes
    }

    public set setClientes(clientes: Array<Cliente>){
        this.clientes = clientes
    }

    public get getServicos(){
        return this.servicos
    }

    public set setServicos(servicos: Array<Servico>){
        this.servicos = servicos
    }

    public get getProdutos(){
        return this.produtos
    }

    public set setProdutos(produtos: Array<Produto>){
        this.produtos = produtos
    }
}