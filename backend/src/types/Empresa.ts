import { Cliente } from "./Cliente"
import { Servico } from "./Servico"

export default class Empresa{
    public clientesCounter = 1
    public petsCounter = 1
    public servicosCounter = 1
    private clientes: Array<Cliente>
    private servicos: Array<Servico>

    constructor(){
        this.clientes = []
        this.servicos = []
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
}