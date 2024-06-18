import { Router, Request, Response } from "express";
import Empresa from "../types/Empresa";
import { Servico } from "../types/Servico";

export default class ServicoRouter{
    public router: Router
    private servicos: Servico[]

    constructor(empresa: Empresa){
        this.router = Router()
        this.servicos = empresa.getServicos

        // getAll
        this.router.get('/', (req, res) => {
            return res.status(200).send({
                message: 'Success',
                servicos: this.servicos
            })
        })

        //getById
        this.router.get('/:servicoId', (req, res) => {
            const {servicoId} = req.params
            const servico = this.servicos.find(serv => serv.id === parseInt(servicoId))
            if(servico){
                return res.status(200).send({
                    message: 'Success',
                    servico
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
            const novoServico = {
                id: empresa.servicosCounter++,
                nome,
                preco: parseFloat(preco),
            }

            this.servicos.push(novoServico)
            
            res.status(200).send({
                message: 'Success',
                servico: novoServico
            })
        })

        //update
        this.router.put('/:servicoId', (req: Request, res: Response) => {
            const servicoId = parseInt(req.params.servicoId)
            const {nome, preco} = req.body

            const servicoIndex = this.servicos.findIndex(serv => serv.id === servicoId)
            if(servicoIndex < 0){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            const novoServico = {
                id: servicoId,
                nome,
                preco: parseFloat(preco)
            }

            this.servicos.splice(servicoIndex, 1, novoServico)
            
            res.status(200).send({
                message: 'Success',
            })
        })

        //delete
        this.router.delete('/:servicoId', (req, res) => {
            const {servicoId} = req.params
            const clienteIndex = this.servicos.findIndex(cli => cli.id === parseInt(servicoId))
            if(clienteIndex < 0){
                return res.status(404).send({
                    message: 'Not found',
                })
            }
            
            this.servicos.splice(clienteIndex, 1)
            return res.status(200).send({
                message: 'Success',
            })
        })
    }
}