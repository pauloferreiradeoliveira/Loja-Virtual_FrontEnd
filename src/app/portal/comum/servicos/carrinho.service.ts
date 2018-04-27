import { Injectable, EventEmitter } from "@angular/core";
import { Produto } from "../../../comum/class/produto";

@Injectable()
export class CarrinhoService {
  static emitirProdutoAdicionado = new EventEmitter<Produto[]>();
  private produtos: Produto[];

  constructor() {}

  addCarrinho(cat: Produto) {
    if (this.produtos == null) {
      this.produtos = [cat];
    } else {
      this.produtos.push(cat);
    }
    CarrinhoService.emitirProdutoAdicionado.emit(this.produtos);
  }

  removeCarrinho(produto: Produto) {
    const index: number = this.produtos.indexOf(produto);
    if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }
}
