import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: ProdutosComponent,  children:[

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutes {}

