export class Produto {
  constructor(public id: number, public nome: string,
    public preco: number, public peso: number,
    public altura: number, public largura: number, public comprimento: number,
    public descricao: string, public foto: string, public parcela: number,
    public idCategoria: number
    ) {}

    getValordaParcela(): number {
      return this.preco / this.parcela;
    }
}
