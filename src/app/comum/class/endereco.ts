export class Endereco {
  constructor(
    public CEP: string,
    public numero: number,
    public complemento: string ,
    public logradouro: string,
    public bairro: string,
    public localidade: string,
    public uf: string
  ) {}
}
