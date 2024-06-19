import { Router, Request, Response } from "express";
import Empresa from "../types/Empresa";
import { Produto } from "../types/Produto";
import { Cliente } from "../types/Cliente";
import { Servico } from "../types/Servico";

export default class ProdutoRouter{
    public router: Router
    private clientes: Cliente[]
    private produtos: Produto[]
    private servicos: Servico[]

    constructor(empresa: Empresa){
        this.router = Router()
        this.clientes = empresa.getClientes
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos

        this.router.get('/')
    }
}