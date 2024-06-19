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

        this.router.get('/maisConsumiram', (req, res) => {
            const rank: Array<{total: number ,cliente: Cliente}> = []
            this.clientes.forEach(cli => {
                rank.push({
                    total: cli.consumidos.length,
                    cliente: cli
                })
            })

            rank.sort((cliA, cliB) => {
                return cliB.total - cliA.total
            })

            return res.status(200).send({
                message: 'Success',
                rank
            })
        })
    }
}