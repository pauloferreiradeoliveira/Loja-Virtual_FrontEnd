import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { ProdutoRoutes } from './produtos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutes
  ],
  declarations: [ProdutosComponent]
})
export class ProdutosModule { }
