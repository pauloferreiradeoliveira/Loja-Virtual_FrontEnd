import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../../comum/class/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  @Input() produtos: Produto[];

  constructor() { }

  getValorTotal(): number {
    let valor = 0;
    if (!(this.produtos == null)) {
      for (const produto of this.produtos) {
        valor += produto.preco;
      }
    }
    return valor;
  }

  ngOnInit() {
  }

}
