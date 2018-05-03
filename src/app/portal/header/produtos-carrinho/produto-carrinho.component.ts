import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../../comum/class/produto';
import { CarrinhoService } from '../../comum/servicos/carrinho.service';

@Component({
  selector: 'app-produto-carrinho',
  templateUrl: './produto-carrinho.component.html',
  styleUrls: ['./produto-carrinho.component.scss']
})
export class ProdutoCarrinhoComponent implements OnInit {

  @Input() produto: Produto;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  removeProduto() {
    this.carrinhoService.removeCarrinho(this.produto);
  }

}
