import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing.module';
import { LoginComponent } from './login/login.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { CategoriaModule } from './categoria/categoria.module';
import { ComumModule } from '../comum/comum.module';
import { httpInterceptorProviders } from './shared/interceptors/interceptors';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ComumModule
  ],
  declarations: [
    AdminComponent,
    NavegacaoComponent,
    LoginComponent
  ]
})
export class AdminModule {}
