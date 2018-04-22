import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalRoutes } from './portal.routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutes
  ],
  declarations: [
    PortalComponent,
    HeaderComponent
  ]
})
export class PortalModule { }
