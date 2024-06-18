import { Router, Request, Response } from "express";
import Empresa from "../types/Empresa";
import { Produto } from "../types/Produto";

export default class ProdutoRouter{
    public router: Router
    private produtos: Produto[]

    constructor(empresa: Empresa){
        this.router = Router()
        this.produtos = empresa.getProdutos

        // getAll
        this.router.get('/', (req, res) => {
            return res.status(200).send({
                message: 'Success',
                produtos: this.produtos
            })
        })

        //getById
        this.router.get('/:produtoId', (req, res) => {
            const {produtoId} = req.params
            const produto = this.produtos.find(prod => prod.id === parseInt(produtoId))
            if(produto){
                return res.status(200).send({
                    message: 'Success',
                    produto
                })
            }else{
                return res.status(404).send({
                    message: 'Not found',
                })
            }
        })

        //create
        this.router.post('/', (req: Request, res: Response) => {
            const {nome, preco} = req.body
            const novoProduto = {
                id: empresa.produtosCounter++,
                nome,
                preco: parseFloat(preco),
            }

            this.produtos.push(novoProduto)
            
            res.status(200).send({
                message: 'Success',
                produto: novoProduto
            })
        })

        //update
        this.router.put('/:produtoId', (req: Request, res: Response) => {
            const produtoId = parseInt(req.params.produtoId)
            const {nome, preco} = req.body

            const produtoIndex = this.produtos.findIndex(prod => prod.id === produtoId)
            if(produtoIndex < 0){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            const novoProduto = {
                id: produtoId,
                nome,
                preco: parseFloat(preco)
            }

            this.produtos.splice(produtoIndex, 1, novoProduto)
            
            res.status(200).send({
                message: 'Success',
            })
        })

        //delete
        this.router.delete('/:produtoId', (req, res) => {
            const {produtoId} = req.params
            const produtoIndex = this.produtos.findIndex(cli => cli.id === parseInt(produtoId))
            if(produtoIndex < 0){
                return res.status(404).send({
                    message: 'Not found',
                })
            }
            
            this.produtos.splice(produtoIndex, 1)
            return res.status(200).send({
                message: 'Success',
            })
        })
    }
}