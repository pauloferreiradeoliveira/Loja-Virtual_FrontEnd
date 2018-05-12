import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing.module';
import { LoginComponent } from './login/login.component'
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { CategoriaModule } from './categoria/categoria.module';




@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    CategoriaModule,
    // Para o Login
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    NavegacaoComponent,
    LoginComponent
]
})
export class AdminModule {}
