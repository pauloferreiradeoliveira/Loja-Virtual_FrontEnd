import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { NgModule } from '@angular/core';

import { PrinciapalComponent } from './princiapal/princiapal.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasResolver } from './categorias/guard/categorias.resolver';

const routesPortal: Routes = [
  { path: '', component: PortalComponent, children: [
    { path: 'categoria/:id', component: CategoriasComponent,
      resolve: { cadegoria: CategoriasResolver }
    },
    { path: '', component: PrinciapalComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routesPortal)],
  exports: [RouterModule]
})
export class PortalRoutes {}
