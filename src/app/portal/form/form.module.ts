import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Proprios - Do aplicativo
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { FormRoutes } from './form.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormRoutes,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CadastrarComponent,
    LoginComponent
  ]
})
export class FormModule { }
