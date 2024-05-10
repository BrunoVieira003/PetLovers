export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getNome(){return this.nome}
    public set setNome(value: string){this.nome = value}
    public get getRaca(){return this.raca}
    public set setRaca(value: string){this.raca = value}
    public get getGenero(){return this.genero}
    public set setGenero(value: string){this.genero = value}
    public get getTipo(){return this.tipo}
    public set setTipo(value: string){this.tipo = value}
}