export class Endereco {
  constructor(
    public CEP: string,
    public numero: number,
    public complemento: string ,
    public rua: string,
    public bairro: string,
    public cidade: string,
    public estado: string
  ) {}
}
