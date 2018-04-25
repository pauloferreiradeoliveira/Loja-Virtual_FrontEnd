import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComumMmodule } from '../../comum/comum.module';
import { ProdutoCarrinhoComponent } from './produtos-carrinho/produto-carrinho.component';




@NgModule({
  imports: [
    CommonModule,
    ComumMmodule
  ],
  declarations: [CardComponent, ProdutoCarrinhoComponent],
  exports: [CardComponent, ProdutoCarrinhoComponent ]
})
export class ComumPortalModule { }
