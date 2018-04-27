import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';


const formPortal: Routes = [
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(formPortal)],
  exports: [RouterModule]
})
export class FormRoutes {}
