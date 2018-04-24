import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { NgModule } from '@angular/core';
import { PrinciapalComponent } from './princiapal/princiapal.component';

const routesPortal: Routes = [
  { path: '', component: PortalComponent, children: [
    {path: '', component: PrinciapalComponent}
  ]  },
];

@NgModule({
  imports: [RouterModule.forChild(routesPortal)],
  exports: [RouterModule]
})
export class PortalRoutes {}
