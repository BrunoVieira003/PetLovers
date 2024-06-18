import { Cliente } from "./Cliente"

export default class Empresa{
    public clientesCounter = 1
    private clientes: Array<Cliente>

    constructor(){
        this.clientes = []
    }
    public get getClientes(){
        return this.clientes
    }

    public set setClientes(clientes: Array<Cliente>){
        this.clientes = clientes
    }
}