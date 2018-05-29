import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal.component';
import { PortalRoutes } from './portal.routing.module';
import { HeaderComponent } from './header/header.component';

import { PrinciapalComponent } from './princiapal/princiapal.component';
import { CategoriasResolver } from './categorias/guard/categorias.resolver';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { ComumModule } from '../comum/comum.module';
import { CarrinhoService } from './shared/servicos/carrinho.service';
import { CardComponent } from './shared/card/card.component';





@NgModule({
  imports: [
    CommonModule,
    PortalRoutes,
    ComumModule,
    HeaderModule
  ],
  declarations: [
    PortalComponent,
    PrinciapalComponent,
    CategoriasComponent,
    FooterComponent,
    CardComponent
  ],
  providers: [
    CategoriasResolver,
    CarrinhoService
  ]
})
export class PortalModule { }
