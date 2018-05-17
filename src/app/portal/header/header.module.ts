import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HeaderComponent } from './header.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoCarrinhoComponent } from './produtos-carrinho/produto-carrinho.component';
import { ComumModule } from '../../comum/comum.module';
import { LoginComponent } from './login/login.component';
import { CarrinhoService } from '../shared/servicos/carrinho.service';


@NgModule({
  imports: [
    CommonModule,
    ComumModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    CarrinhoComponent,
    ProdutoCarrinhoComponent,
    LoginComponent
],
  exports: [HeaderComponent],
  providers: [CarrinhoService]
})
export class HeaderModule { }
