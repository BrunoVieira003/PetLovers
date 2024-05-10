import promptSync from "prompt-sync";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero  = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        return texto
    }

    public confirmar(mensagem : string): boolean{
        let prompt = promptSync()
        return prompt(`${mensagem} (S/N) `).toLowerCase() === 's'
    }

    public escolherNumero(mensagem: string, min: number, max: number): number{
        let prompt = promptSync()
        let opcao = -1
        while(true){
            opcao = this.receberNumero(mensagem)

            if(opcao >= min && opcao <= max){
                return opcao
            }

            console.log('Opção inválida')
        }
    }
}