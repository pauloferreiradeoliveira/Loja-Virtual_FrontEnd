import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalModule } from 'ngx-bootstrap/modal';
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
    ReactiveFormsModule,
    TextMaskModule,
    ModalModule.forRoot()
  ],
  declarations: [
    CadastrarComponent,
    LoginComponent
  ]
})
export class FormModule { }
