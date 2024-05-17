export default class Saida{
    public static formatCurrency(valor: number): string{
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
    }
}