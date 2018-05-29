import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from '../servicos/carrinho.service';
import { Produto } from '../../../comum/class/produto';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() produto: Produto;

  constructor( private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  addCarrinho() {
    this.carrinhoService.addCarrinho(this.produto);
  }

}
