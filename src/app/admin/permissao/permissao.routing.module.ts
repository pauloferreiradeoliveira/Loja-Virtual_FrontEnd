import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PermissaoComponent } from './permissao.component';
import { FormularioPermissaoComponent } from './formularioPermissao/formularioPermissao.component';
import { VisualicacaoComponent } from './visualicacao/visualicacao.component';
import { PermissaoResolver } from './guard/permissao.resolver';

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
        path: ':id',
        component: VisualicacaoComponent,
        resolve: {
          dados: PermissaoResolver
        }
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
