import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissaoComponent } from './permissao.component';
import { PermissaoRoutes } from './permissao.routing.module';
import { FormularioPermissaoComponent } from './formularioPermissao/formularioPermissao.component';


@NgModule({
  imports: [
    CommonModule,
    PermissaoRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [PermissaoComponent,
    FormularioPermissaoComponent
]
})
export class PermissaoModule { }
