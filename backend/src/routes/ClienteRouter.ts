import { Router, Request, Response } from "express";
import Empresa from "../types/Empresa";
import { Cliente } from "../types/Cliente";

class ClienteRouter{
    public router: Router
    private clientes: Cliente[]

    constructor(empresa: Empresa){
        this.router = Router()
        this.clientes = empresa.getClientes

        // getAll
        this.router.get('/', (req, res) => {
            return res.status(200).send({
                message: 'Success',
                data: this.clientes
            })
        })

        //getById
        this.router.get('/:clienteId', (req, res) => {
            const {clienteId} = req.params
            const cliente = this.clientes.find(cli => cli.id === parseInt(clienteId))
            if(cliente){
                return res.status(200).send({
                    message: 'Success',
                    data: this.clientes
                })
            }else{
                return res.status(404).send({
                    message: 'Not found',
                })
            }
        })

        //create
        this.router.post('/', (req: Request, res: Response) => {
            const {nome, nomeSocial, cpf, rgs, telefones} = req.body
            const novoCliente = {
                id: empresa.clientesCounter++,
                nome,
                nomeSocial,
                cpf: {
                    valor: cpf.valor,
                    dataEmissao: new Date(cpf.dataEmissao)
                },
                rgs,
                telefones,
                dataCadastro: new Date
            }

            this.clientes.push(novoCliente)
            
            res.status(200).send({
                message: 'Success',
                data: novoCliente
            })
    })
    }
}



export default ClienteRouter