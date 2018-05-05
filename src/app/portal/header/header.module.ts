import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoCarrinhoComponent } from './produtos-carrinho/produto-carrinho.component';
import { ComumMmodule } from '../../comum/comum.module';
import { CarrinhoService } from '../comum/servicos/carrinho.service';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    ComumMmodule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    CarrinhoComponent,
    ProdutoCarrinhoComponent,
    LoginComponent
],
  exports:[
    HeaderComponent
  ],
  providers: [CarrinhoService]
})
export class HeaderModule { }
