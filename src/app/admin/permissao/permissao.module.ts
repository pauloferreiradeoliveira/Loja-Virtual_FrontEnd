import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissaoComponent } from './permissao.component';
import { PermissaoRoutes } from './permissao.routing.module';
import { FormularioPermissaoComponent } from './formularioPermissao/formularioPermissao.component';
import { VisualicacaoComponent } from './visualicacao/visualicacao.component';
import { PermissaoResolver } from './guard/permissao.resolver';


@NgModule({
  imports: [
    CommonModule,
    PermissaoRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    PermissaoComponent,
    FormularioPermissaoComponent,
    VisualicacaoComponent
],
  providers: [
    PermissaoResolver
  ]
})
export class PermissaoModule { }
