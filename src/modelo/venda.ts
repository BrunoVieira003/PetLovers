import Cliente from "./cliente";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";

export default class Venda{
    public readonly cliente: Cliente
    public readonly pet: Pet
    public readonly consumido: Produto | Servico
    constructor(comprador: Cliente, pet: Pet, consumido: Produto | Servico){
        this.cliente = comprador
        this.pet = pet
        this.consumido = consumido
    }
}