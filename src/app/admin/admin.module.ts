import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing.module';
import { LoginComponent } from './login/login.component'
import { NavegacaoComponent } from './navegacao/navegacao.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    NavegacaoComponent,
    LoginComponent
]
})
export class AdminModule {}
