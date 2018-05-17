import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioRoutes } from './funcionario.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualicacaoComponent } from './visualicacao/visualicacao.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FuncionarioRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FuncionarioComponent,
    VisualicacaoComponent,
    FormularioComponent
]
})
export class FuncionarioModule { }
