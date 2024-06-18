import { Request, Response } from "express";
import empresa from "../db";
import { Cliente } from "../types/Cliente";

class ClienteController{
    private clientes: Cliente[] = empresa.clientes

    createCliente(req: Request, res: Response){
        const {nome, nomeSocial, cpfValor, cpfData, rgs, telefones} = req.body
        this.clientes.push({
            nome,
            nomeSocial,
            cpf: {
                valor: cpfValor,
                dataEmissao: cpfData
            },
            rgs,
            telefones,
            dataCadastro: new Date
        })

        res.status(200).send({
            message: 'Success'
        })
    }

    getCliente(req: Request, res: Response){
        const {clienteId} = req.params
        const oldCliente = this.clientes.find(cli => cli.id === parseInt(clienteId))

        if(oldCliente){
            return res.status(200).send({
                message: 'Success',
                data: oldCliente
            })
        }else{
            return res.status(404).send({
                message: 'Not Found'
            })
        }
        

    }
}