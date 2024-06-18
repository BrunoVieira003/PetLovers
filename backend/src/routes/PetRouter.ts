import { Router, Request, Response } from "express";
import Empresa from "../types/Empresa";
import { Cliente } from "../types/Cliente";

export default class PetRouter{
    public router: Router
    private clientes: Cliente[]

    constructor(empresa: Empresa){
        this.router = Router()
        this.clientes = empresa.getClientes

        // getAll
        this.router.get('/:clienteId/pets', (req, res) => {
            const clienteId = parseInt(req.params.clienteId)
            const cliente = this.clientes.find(cli => cli.id === clienteId)
            if(cliente){
                return res.status(200).send({
                    message: 'Success',
                    data: cliente.pets
                })
            }else{
                return res.status(404).send({
                    message: 'Not found',
                })
            }
        })

        // getById
        this.router.get('/:clienteId/pets/:petId', (req, res) => {
            const clienteId = parseInt(req.params.clienteId)
            const petId = parseInt(req.params.petId)

            const cliente = this.clientes.find(cli => cli.id === clienteId)
            if(!cliente){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            const pet = cliente.pets.find(pet => pet.id === petId)
            if(!pet){
                return res.status(404).send({
                    message: 'Not found',
                })
            }

            return res.status(200).send({
                message: 'Success',
                data: pet
            })
        })

        // create
        this.router.post('/:clienteId/pets', (req, res) => {
            const clienteId = parseInt(req.params.clienteId)
            const {nome, tipo, raca, genero} = req.body
            const cliente = this.clientes.find(cli => cli.id === clienteId)
            if(!cliente){
                return res.status(404).send({
                    message: 'Not found',
                })
            }
            
            const novoPet = {
                id: empresa.petsCounter++,
                nome,
                tipo,
                raca,
                genero
            }

            cliente.pets.push(novoPet)
            
            return res.status(200).send({
                message: 'Success',
                data: novoPet
            })

            
        })

    }
}