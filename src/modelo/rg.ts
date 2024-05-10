export default class RG {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }

    public get dataEmissaoFormatada(): string{
        return `${this.dataEmissao.getDate()}/${this.dataEmissao.getMonth()}/${this.dataEmissao.getFullYear()}`
    }
}