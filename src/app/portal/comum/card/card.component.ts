import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../../comum/class/produto';
import { CarrinhoService } from '../../comum/servicos/carrinho.service';

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
