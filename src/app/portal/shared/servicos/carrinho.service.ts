import { Injectable, EventEmitter } from '@angular/core';
import { Produto } from '../../../comum/class/produto';

@Injectable()
export class CarrinhoService {
  // Para poder modificar nos lugares
  emitirProdutoAdicionado = new EventEmitter<Produto[]>();

  constructor() {}

  // Adicionar produtos ao Carrinho
  addCarrinho(cat: Produto) {
    let listaProdutos = this.getLocalCarrinho();

    if (listaProdutos == null) {
      listaProdutos = [cat];

    } else {
      if (this.pegarIndex(listaProdutos, cat) === -1) {
        listaProdutos.push(cat);
        // this.produtos.push(cat);
      }
    }

    this.setLocalCarrinho(listaProdutos);

  }

  getCarrinho(): void {
  // listaProdutos = this.getLocalCarrinho();
    this.emitirProdutoAdicionado.emit(this.getLocalCarrinho());
  }

  // Removendo os produtos
  removeCarrinho(removeProduto: Produto): void {
    const listaProdutos: Produto[] = this.getLocalCarrinho();

    const index: number = this.pegarIndex(listaProdutos, removeProduto);

    if (index !== -1) {
      listaProdutos.splice(index, 1);
    }
    localStorage.setItem('carrinho', JSON.stringify(listaProdutos));
    this.setLocalCarrinho(listaProdutos);
  }

  // Pegando os dados do carrinho
  private getLocalCarrinho(): Produto[] {
    return JSON.parse(localStorage.getItem('carrinho'));
  }

  private setLocalCarrinho(listaProdutos: Produto[]) {
    localStorage.setItem('carrinho', JSON.stringify(listaProdutos));
    this.emitirProdutoAdicionado.emit(listaProdutos);
  }

  private pegarIndex(lista: Produto[], pro: Produto): number {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === pro.id) {
        return i;
      }
     }
    return -1;
  }

}
