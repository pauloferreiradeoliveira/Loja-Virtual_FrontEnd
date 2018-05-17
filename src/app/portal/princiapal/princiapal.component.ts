import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Produto } from '../../comum/class/produto';
import { ProdutosService } from '../../comum/servicos/produtos.service';
import { CarrinhoService } from '../shared/servicos/carrinho.service';



@Component({
  selector: 'app-princiapal',
  templateUrl: './princiapal.component.html',
  styleUrls: ['./princiapal.component.scss']
})
export class PrinciapalComponent implements OnInit, OnDestroy {

  principalProdutos: Produto[];
  subcriber: Subscription;

  constructor(private produtosService: ProdutosService, private carrinhoService: CarrinhoService) { }

  getProdutos() {
    this.subcriber =  this.produtosService.getProduto().subscribe(
      dados => this.principalProdutos = dados
    );
  }

  // NGS - Ciclos
  ngOnInit() {
    this.getProdutos();
  }

  ngOnDestroy() { this.subcriber.unsubscribe(); }

}
