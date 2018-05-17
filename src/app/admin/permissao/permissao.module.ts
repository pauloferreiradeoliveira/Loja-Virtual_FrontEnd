import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissaoComponent } from './permissao.component';
import { PermissaoRoutes } from './permissao.routing.module';
import { FormularioPermissaoComponent } from './formularioPermissao/formularioPermissao.component';
import { VisualicacaoComponent } from './visualicacao/visualicacao.component';
import { PermissaoResolver } from './guard/permissao.resolver';
import { NavegacaoPipe } from '../shared/pipes/navegacao.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    VisualicacaoComponent,
    NavegacaoPipe
],
  providers: [
    PermissaoResolver
  ]
})
export class PermissaoModule { }
