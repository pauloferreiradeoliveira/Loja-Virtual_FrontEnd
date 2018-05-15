import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CategoriaRoutes } from './categoria.routing.module';
import { CategoriaComponent } from './categoria.component';
import { VisualicacaoComponent } from './visualicacao/visualicacao.component';
import { CategoriasResolver } from './guard/categorias.resolver';
import { FormularioCategoriaComponent } from './formularioCategoria/formularioCategoria.component';


@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CategoriaComponent,
    VisualicacaoComponent,
    FormularioCategoriaComponent
],
  providers: [
    CategoriasResolver
  ]
})
export class CategoriaModule {}
