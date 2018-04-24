import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { PortalComponent } from './portal.component';
import { PortalRoutes } from './portal.routing.module';
import { HeaderComponent } from './header/header.component';

import { PrinciapalComponent } from './princiapal/princiapal.component';
import { CategoriasService } from '../comum/servicos/categorias.service';
import { ProdutosService } from '../comum/servicos/produtos.service';


@NgModule({
  imports: [
    CommonModule,
    PortalRoutes,
    HttpModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [
    PortalComponent,
    HeaderComponent,
    PrinciapalComponent
  ],
  providers: [
    CategoriasService,
    ProdutosService
  ]
})
export class PortalModule { }
