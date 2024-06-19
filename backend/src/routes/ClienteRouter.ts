import { Router, Request, Response } from "express";
import Empresa from "../types/Empresa";
import { Cliente } from "../types/Cliente";
import { Produto } from "../types/Produto";
import { Servico } from "../types/Servico";

export default class ClienteRouter{
    public router: Router
    private clientes: Cliente[]
    private produtos: Produto[]
    private servicos: Servico[]

    constructor(empresa: Empresa){
        this.router = Router()
        this.clientes = empresa.getClientes
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos

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
                    dataEmissao: new Date(cpf.dataEmissao+'T00:00')
                },
                pets: [],
                rgs: [],
                telefones: [],
                consumidos: [],
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
                    dataEmissao: new Date(cpf.dataEmissao+'T00:00')
                },
                pets: this.clientes[clienteIndex].pets,
                rgs: [],
                telefones: [],
                consumidos: this.clientes[clienteId].consumidos,
                dataCadastro: new Date
            }

            this.clientes.splice(clienteIndex, 1, novoCliente)
            
            res.status(200).send({
                message: 'Success',
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

        // registrar consumo produto
        this.router.post('/:clienteId/consumirProduto', (req, res) => {
            const clienteId = parseInt(req.params.clienteId)
            const { consumidoId, petId } = req.body

            const clienteIndex = this.clientes.findIndex(cli => cli.id === clienteId)
            if(clienteIndex < 0){
                return res.status(404).send({
                    message: 'cliente Not found',
                })
            }

            const consumido = this.produtos.find(prod => prod.id === parseInt(consumidoId))
            if(!consumido){
                return res.status(404).send({
                    message: 'produto Not found',
                })
            }

            const pet = this.clientes[clienteIndex].pets.find(prod => prod.id === parseInt(petId))
            if(!pet){
                return res.status(404).send({
                    message: 'pet Not found',
                })
            }

            const novoCliente = this.clientes[clienteIndex]
            novoCliente.consumidos.push({ pet, consumido })
            this.clientes.splice(clienteIndex, 1, novoCliente)

            return res.status(200).send({
                message: 'Success',
            })


        })

        // registrar consumo servico
        this.router.post('/:clienteId/consumirServico', (req, res) => {
            const clienteId = parseInt(req.params.clienteId)
            const { consumidoId, petId } = req.body

            const clienteIndex = this.clientes.findIndex(cli => cli.id === clienteId)
            if(clienteIndex < 0){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            const consumido = this.servicos.find(serv => serv.id === consumidoId)
            if(!consumido){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            const pet = this.clientes[clienteIndex].pets.find(prod => prod.id === petId)
            if(!pet){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            const novoCliente = this.clientes[clienteIndex]
            novoCliente.consumidos.push({ pet, consumido })
            this.clientes.splice(clienteIndex, 1, novoCliente)

            return res.status(404).send({
                message: 'Success',
            })


        })

        this.router.get('/consumo', (req, res) => {
            let consumo = []
            this.clientes.forEach(cli => {
                consumo = [...consumo, ...cli.consumidos]
            })

            return res.status(200).send({
                message: 'Success',
                consumo
            })
        })
    }
}