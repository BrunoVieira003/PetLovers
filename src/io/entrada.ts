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

    public receberData(mensagem: string): Date{
        let data = ""
        while(true){
            data = this.receberTexto(`${mensagem} (dd/mm/yyyy): `)
            if(/^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/.test(data)) break

            console.log('Formato de data inválido. Tente novamente')
        }

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        return new Date(ano, mes, dia)
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