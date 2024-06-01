import CPF from "./cpf"
import Pet from "./pet"
import RG from "./rg"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public set setCpf(value: CPF){
        this.cpf = value
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public set setPets(value: Array<Pet>){
        this.pets = value
    }
}