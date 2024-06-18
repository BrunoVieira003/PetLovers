import { Router, Request, Response } from "express";
import Empresa from "../types/Empresa";
import { Cliente } from "../types/Cliente";

export default class ClienteRouter{
    public router: Router
    private clientes: Cliente[]

    constructor(empresa: Empresa){
        this.router = Router()
        this.clientes = empresa.getClientes

        // getAll
        this.router.get('/', (req, res) => {
            return res.status(200).send({
                message: 'Success',
                clientes: this.clientes
            })
        })

        //getById
        this.router.get('/:clienteId', (req, res) => {
            const {clienteId} = req.params
            const cliente = this.clientes.find(cli => cli.id === parseInt(clienteId))
            if(cliente){
                return res.status(200).send({
                    message: 'Success',
                    cliente
                })
            }else{
                return res.status(404).send({
                    message: 'Not found',
                })
            }
        })

        //create
        this.router.post('/', (req: Request, res: Response) => {
            const {nome, nomeSocial, cpf} = req.body
            const novoCliente = {
                id: empresa.clientesCounter++,
                nome,
                nomeSocial,
                cpf: {
                    valor: cpf.valor,
                    dataEmissao: new Date(cpf.dataEmissao)
                },
                pets: [],
                rgs: [],
                telefones: [],
                dataCadastro: new Date
            }

            this.clientes.push(novoCliente)
            
            res.status(200).send({
                message: 'Success',
                cliente: novoCliente
            })
        })

        //update
        this.router.put('/:clienteId', (req: Request, res: Response) => {
            const clienteId = parseInt(req.params.clienteId)
            const {nome, nomeSocial, cpf} = req.body

            const clienteIndex = this.clientes.findIndex(cli => cli.id === clienteId)
            if(clienteIndex < 0){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            const novoCliente = {
                id: clienteId,
                nome,
                nomeSocial,
                cpf: {
                    valor: cpf.valor,
                    dataEmissao: new Date(cpf.dataEmissao)
                },
                pets: [],
                rgs: [],
                telefones: [],
                dataCadastro: new Date
            }

            this.clientes.splice(clienteIndex, 1, novoCliente)
            
            res.status(200).send({
                message: 'Success',
                data: novoCliente
            })
        })

        //delete
        this.router.delete('/:clienteId', (req, res) => {
            const {clienteId} = req.params
            const clienteIndex = this.clientes.findIndex(cli => cli.id === parseInt(clienteId))
            if(clienteIndex < 0){
                return res.status(404).send({
                    message: 'Not found',
                })
            }
            
            this.clientes.splice(clienteIndex, 1)
            return res.status(200).send({
                message: 'Success',
            })
        })
    }
}