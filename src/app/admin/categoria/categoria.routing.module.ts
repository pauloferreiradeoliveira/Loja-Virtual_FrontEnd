import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriaComponent } from './categoria.component';


const routesAdmin: Routes = [
  {path: '', component: CategoriaComponent , children:[
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class CategoriaRoutes {}
