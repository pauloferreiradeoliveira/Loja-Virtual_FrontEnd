import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoriaRoutes } from './categoria.routing.module';
import { CategoriaComponent } from './categoria.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CategoriaComponent
]
})
export class CategoriaModule {}
