import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PermissaoComponent } from './permissao.component';
import { FormularioPermissaoComponent } from './formularioPermissao/formularioPermissao.component';

const routesAdmin: Routes = [
  {
    path: '',
    component: PermissaoComponent,
    children: [
      {
        path: 'novo',
        component: FormularioPermissaoComponent
      },
      {
        path: ':id'
      },
      {
        path: ':id/editar',
        component: FormularioPermissaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class PermissaoRoutes {}
