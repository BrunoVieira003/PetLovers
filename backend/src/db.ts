import { Cliente } from "./types/Cliente"
import { Pet } from "./types/Pet"

type empresaType = {
    clientes: Array<Cliente>
    pets: Array<Pet>

}

const empresa: empresaType = {
    clientes: [],
    pets: []
}

export default empresa