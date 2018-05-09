import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal.component';
import { PortalRoutes } from './portal.routing.module';
import { HeaderComponent } from './header/header.component';

import { PrinciapalComponent } from './princiapal/princiapal.component';
import { ComumPortalModule } from './comum/comum-portal.module';
import { ComumMmodule } from '../comum/comum.module';
import { CarrinhoService } from './comum/servicos/carrinho.service';
import { CategoriasResolver } from './categorias/guard/categorias.resolver';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';





@NgModule({
  imports: [
    CommonModule,
    PortalRoutes,
    ComumPortalModule,
    ComumMmodule,
    HeaderModule
  ],
  declarations: [
    PortalComponent,
    PrinciapalComponent,
    CategoriasComponent,
    FooterComponent
  ],
  providers: [
    CategoriasResolver
  ]
})
export class PortalModule { }
