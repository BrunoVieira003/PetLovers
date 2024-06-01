import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

export default class Random{

    public static gerarNumero(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    public static gerarSequencia(lenght: number): string{
        let numero = ""
        for(let i=0; i < lenght; i++){
            numero += this.gerarNumero(1, 9)
        }
        return numero
    }
    
    public static escolherAleatorio<T>(array: Array<T>){
        return array[this.gerarNumero(0, array.length-1)]
    }

    public static gerarData(): Date{
        return new Date(this.gerarNumero(1980, 2005), this.gerarNumero(0, 11), this.gerarNumero(1, 30))
    }

    public static gerarRG(): RG{
        return new RG(this.gerarSequencia(9), this.gerarData())
    }

    public static gerarTelefone(): Telefone{
        return new Telefone("12", this.gerarSequencia(9))
    }

    public static gerarPet(): Pet{
        let animais = [
            {
                tipo: "Cachorro",
                racas: [
                    "Poodle",
                    "Bulldog",
                    "Pastor Alemão",
                    "Vira-lata",
                    "Husk"
                ],
                nomes: [
                    "DoubleTó",
                    "Pelé",
                    "Rex",
                    "Sofia"
                ]
            },
            {
                tipo: "Gato",
                racas: [
                    "Siamês",
                    "Persa",
                    "Birmanês",
                    "Sphynx"
                ],
                nomes: [
                    "Bola de neve",
                    "Garfield",
                    "Sofia",
                    "June"
                ]
            }
        ]
        let randomPet = this.escolherAleatorio(animais)
        return new Pet(this.escolherAleatorio(randomPet.nomes), this.escolherAleatorio(randomPet.racas), this.escolherAleatorio(["M", "F"]), randomPet.tipo)
    }
}