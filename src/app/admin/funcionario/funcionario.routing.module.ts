import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FuncionarioComponent } from './funcionario.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VisualicacaoComponent } from './visualicacao/visualicacao.component';
import { FuncionarioResolver } from './guard/funcionario.resolver';

const routesAdmin: Routes = [
  {
    path: '',
    component: FuncionarioComponent
  },
  {
    path: 'novo',
    component: FormularioComponent
  },
  {
    path: ':id',
    component: VisualicacaoComponent,
    resolve: {
      dados: FuncionarioResolver
    }
  },
  {
    path: ':id/editar',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})

export class FuncionarioRoutes {}
