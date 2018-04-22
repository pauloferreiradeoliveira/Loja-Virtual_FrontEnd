import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { NgModule } from '@angular/core';

const routesPortal: Routes = [
  { path: '', component: PortalComponent, children: []  },
];

@NgModule({
  imports: [RouterModule.forChild(routesPortal)],
  exports: [RouterModule]
})
export class PortalRoutes {}
