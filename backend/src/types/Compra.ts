import { Pet } from "./Pet"
import { Produto } from "./Produto"
import { Servico } from "./Servico"

type Compra = {
    pet: Pet
    consumido: Produto | Servico
}

export type {Compra}