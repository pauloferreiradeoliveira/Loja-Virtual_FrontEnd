import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing.module';
import { AsideComponent } from './aside/aside.component';
import { LoginComponent } from './login/login.component'
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    AsideComponent,
    LoginComponent,
    HeaderComponent
]
})
export class AdminModule {}
